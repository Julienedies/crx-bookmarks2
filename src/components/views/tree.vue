<template>
    <div class="treeMapWrapper">
        <header id="path"></header>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    import echarts from 'echarts'
    import { bookmarks } from '../../libs/chrome'

    function drawTreeMap (data, elm, vm) {
        let w = 100
        let h = 100
        let x = d3.scaleLinear().domain([0, w]).range([0, w]);
        let y = d3.scaleLinear().domain([0, h]).range([0, h]);
        let color = d3.scaleOrdinal().range(d3.schemeCategory10);
        let treemap = d3.treemap()
            .tile(d3.treemapBinary)
            .size([w, h])
            .paddingInner(0)
            .round(false);

        let nodes = d3.hierarchy(data[0])
            .sum((d) => 1)  // d.value
        //.sort(function(a, b) { return b.height - a.height ||  b.value - a.value; });

        let currentDepth = 0
        let currentNode = nodes

        treemap(nodes)

        console.log('生成的treeMap数据结构 => ', nodes)

        let $chart = d3.select(elm).append('div').attr('class', 'nodesWrapper')

        let $cell = $chart
            .selectAll(".node")
            .data(nodes.descendants())
            .enter()
            .append('div')
            .attr('class', (d) => `node level-${ d.depth }`)
            .attr('x-title', (d) => d.data.title);

        $cell
            .attr('style', (d) => {
                return `left:${ x(d.x0) }%; top:${ y(d.y0) }%; width:${ x(d.x1) - x(d.x0) }%; height:${ y(d.y1) - y(d.y0) }%; z-index:${ 1000 - d.depth };`
            })
            .style('background-color', (d) => {
                while (d.depth > 2) d = d.parent;
                return color(d.data.title);
            })
            .on('click', (d) => {
                updatePath(d)
                if (currentNode.data.id === d.data.id && !d.children) {
                    zoom(d.parent)
                } else {
                    zoom(d)
                }

            });

        let $text = $cell
            .append('div')
            .attr('class', 'text');

        $text
            .append('span')
            .attr('style', (d) => {
                return d.depth > 1 ? '' : 'display:none;'
            })
            .attr('class', 'return-up hint--top')
            .attr('aria-label', (d) => {
                return `返回上一级:${ d.parent && d.parent.data.title }`
            })
            .on('click', function (d) {
                console.log('@return', d.parent.data.title, d, d.parent)
                if (d.parent) {
                    updatePath(d.parent)
                    if (currentNode.data.id === d.data.id) {
                        zoom(d.parent)
                    } else {
                        d.parent && zoom(d.parent.parent)
                    }
                }
                d3.event.stopPropagation()
            })
            .append('i')
            .attr('class', 'fas fa-reply');

        $text
            .append('span')
            .attr('class', 'name hint--top')
            .attr('aria-label', (d) => `点击转到: ${ d.data.title }`)
            .text((d) => {
                return d.data.title
            })
            .on('click', function (d) {
                location.hash = '#/node/' + d.data.id
                d3.event.stopPropagation()
            });

        $text
            .append('span')
            .attr('class', 'check-box hint--top')
            .attr('aria-label', (d) => `选择当前文件夹: ${ d.data.title }`)
            .append('i')
            .attr('class', 'check')
            .on('click', function (d) {
                this.classList.toggle('checked')
                vm.$emit('selectFolderChange', d.data, d.path(nodes).reverse().map((v) => v.data.title))
                d3.event.stopPropagation()
            });

        let $path = d3.select('#path')

        updatePath(nodes)

        function updatePath (d) {
            console.info('#updatePath', d)
            let $paths = $path
                .selectAll('a')
                .data(d.path(nodes).reverse());

            $paths
                .enter()
                .append('a')
                .merge($paths)
                .text(function (d) {
                    return d.data.title + ' > ';
                })
                .on('click', (d) => {
                    updatePath(d)
                    zoom(d)
                });

            $paths.exit().remove();
        }

        function zoom (d) {
            console.log('#zoom', d.data.title, d);

            currentDepth = d.depth;
            currentNode = d

            x.domain([d.x0, d.x1]);
            y.domain([d.y0, d.y1]);

            $cell.transition()
                .duration(500)
                .attr('style', (d) => {
                    return `left:${ x(d.x0) }%; top:${ y(d.y0) }%; width:${ x(d.x1) - x(d.x0) }%; height:${ y(d.y1) - y(d.y0) }%; background:${ color(d.data.title) };  z-index:${ 1000 - d.depth };`
                });

            $cell
                .filter(function (d) {
                    return d.ancestors();
                })
                .classed('hide', function (d) {
                    return d.children
                });

            $cell
                .filter(function (d) {
                    return d.depth > currentDepth;
                })
                .classed('hide', false);

        }
    }

    export default {
        name: 'tree',
        created () {
        },
        mounted () {
            this.getData().then((data) => {
                console.log(data)
                let elm = this.$refs.chart
                let cw = elm.offsetWidth
                let ch = elm.offsetHeight
                drawTreeMap(data, elm, this)
            })
        },
        methods: {
            async getData () {
                //return await bookmarks.getSubTree('4575', 1)
                return await bookmarks.getTree(true)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $m: 0; // margin

    .treeMapWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    #path {
        height: 1.8em;
        line-height: 1.4em;
    }

    .chart {
        flex: 1;
    }

    /deep/ .nodesWrapper {
        position: relative;
        width: calc(100% - #{$m} * 2 * 1px);
        height: calc(100% - #{$m} * 2 * 1px);
        margin: $m * 1px;
        overflow: hidden;

        .node {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            color: #fff;
            background-color: #1f77b4;
            border: solid 1px #fff;
            transition: opacity .8s;
            cursor: pointer;

            .text {
                display: flex;
                justify-content: center;
                align-items: center;
                transition: color .4s, opacity .8s, filter .8s;

                span {
                    margin: 0 5px;
                    cursor: pointer;

                    &.return-up, &.check-box {
                        opacity: 0;
                        transition: opacity 0.4s;
                        pointer-events: none;
                    }

                    &.name {
                        font-size: 1.1rem;
                        line-height: 1.1rem;
                    }
                }

                .check {
                    position: relative;
                    display: inline-block;
                    width: 1.4em;
                    height: 1.4em;
                    background: #fff;
                    border: solid 1px #fff;
                    border-radius: 50%;
                    vertical-align: middle;

                    &.checked, &:hover {
                        background: #1e7ec0;

                        &:after {
                            border-color: #fff;
                        }
                    }

                    &:after {
                        content: '';
                        position: absolute;
                        width: 1.5em;
                        height: 1em;
                        border: solid 2px #afacac;
                        border-top: none;
                        border-right: none;
                        transform: rotate(-55deg);
                        top: -0.2em;
                    }
                }
            }

            &.hide {
                opacity: 0;
                pointer-events: none;

                .text {
                    filter: blur(10px);
                }
            }

            &:hover {
                z-index: 1000 !important;
                opacity: 0.9;

                .return-up, .check-box {
                    opacity: 1 !important;
                    pointer-events: auto !important;
                }
            }

            &.level-0 {
                z-index: 4;
                display: none;
            }

            &.level-1 {
                z-index: 3;
            }

            &.level-2 {
                z-index: 2;
            }

            &.level-3 {
                z-index: 1;
            }

        }


    }


</style>
