<template>
    <div class="treeMapWrapper">
        <div id="chart"></div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    import { bookmarks } from '../../libs/chrome'

    export default {
        name: 'treemap',
        mounted () {
            bookmarks.getTree(true).then((data) => {
                console.log('treemap data:', data)
                this.drawTreeMap(data, this.$el, this.$el.clientWidth, this.$el.clientHeight)
            })
        },
        methods: {
            drawTreeMap (data, elm) {
                let w = 100
                let h = 100
                let x = d3.scaleLinear().domain([0, w]).range([0, w]);
                let y = d3.scaleLinear().domain([0, h]).range([0, h]);
                let color = d3.scaleOrdinal().range(d3.schemeCategory10);
                let treemap = d3.treemap()
                    //.tile(d3.treemapResquarify)
                    .size([w, h])
                    //.paddingOuter(0.5)
                    //.paddingTop(5)
                    .round(false);

                const treeNodes = d3.hierarchy(data[0])
                    .sum((d) => d.value)
                  /*  .sort(function (a, b) {
                        return b.height - a.height || b.value - a.value
                    })*/

                let currentDepth = treeNodes; // 初始节点为根节点

                treemap(treeNodes);

                console.log('生成的treemap数据结构 => ', treeNodes)

                let $chart = d3.select('#chart')
                let $cell

                function drawTree (d) {

                    $cell = $chart
                        .selectAll('div')
                        .data(d.descendants())
                        .enter()
                        .append('div')
                        .attr("class", function(d) { return `cell ${d.children ? 'is-parent' : ''}` })
                        .attr('style', function (d) {
                            return `left:${ x(d.x0) }%; top:${ y(d.y0) }%; width:${ x(d.x1) - x(d.x0) }%; height:${ y(d.y1) - y(d.y0) }%; background:${ color(d.data.title) }; z-index:${-d.depth};`
                        })
                        .on('click', function (d) {
                            console.log('click cell:', d)
                            //return zoom(currentDepth === d.parent ? treeNodes : d.parent);
                        });

                    let $text = $cell.append('div')
                        .attr('class', 'text')
                        .attr('style', function(d) {
                            let pw = this.parentNode.offsetWidth
                            console.info(d, pw)
                            if( (d.x1-d.x0)<7 || (d.y1-d.y0)<2 ){
                                return 'display:none;'
                            }else{
                                return ''
                            }
                        })

                    $text.append('span')
                        .attr('style', (d) => {
                            return d.depth > 1 ? '' : 'display:none;'
                        })
                        .attr('class', 'hint--top')
                        .attr('aria-label', '返回上一级')
                        .append('i')
                        .attr('class', 'fas fa-reply');

                    $text.append('span').text((d) => {
                        return d.data.title
                    });

                    $text.append('span')
                        .attr('class', 'hint--top')
                        .attr('aria-label', '选择当前文件夹')
                        .append('i')
                        .attr('class', 'check');
                }

                drawTree(treeNodes)

                d3.select(elm).on('click', function () {
                    zoom(treeNodes);
                });

                function zoom (d) {
                    x.domain([d.x0, d.x1]);
                    y.domain([d.y0, d.y1]);

                    $cell.transition()
                        .duration(400)
                        .attr('style', (d) => {
                        return `left:${ x(d.x0) }%; top:${ y(d.y0) }%; width:${ x(d.x1) - x(d.x0) }%; height:${ y(d.y1) - y(d.y0) }%;background:${ color(d.data.title) }; `
                    })

                    $cell // hide this depth and above
                        .filter(function(d) { return d.ancestors(); })
                        .classed("hide", function(d) { return d.children ? true : false });

                    $cell // show this depth + 1 and below
                        .filter(function(d) { return d.depth > currentDepth; })
                        .classed("hide", false);

                    currentDepth = d;
                    d3.event.stopPropagation();
                }
            }
        }
    }
</script>

<style lang="scss">
    .treeMapWrapper {
        width: 100%;
        height: 100%;

        #chart {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .cell {
            position: absolute;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            //border:solid 1px #fff;
            //margin: -1px 0 0 -1px;

            &.is-parent{
                justify-content: flex-start;
                align-items: flex-start;
            }

            &.hide {
                opacity: 0;
                pointer-events: none;

                .text {
                    filter: blur(10px);
                }
            }

            &:hover {
               // z-index:100;
                .text {
                    color: hsla(0, 0, 100, 1);
                }
            }

            &.level-0 {
                z-index: 4;
                font-size: 15vmin;
                display: none;
            }

            &.level-1 {
                z-index: 3;
                font-size: 10vmin;
            }

            &.level-2 {
                z-index: 2;
                font-size: 5vmin;
            }

            &.level-3 {
                z-index: 1;
                font-size: 2.5vmin;
            }

            .text {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    margin: 0 5px;
                    cursor: pointer;
                }

                .check {
                    position: relative;
                    display: inline-block;
                    width: 1.4em;
                    height: 1.4em;
                    background: #fff;
                    border-radius: 50%;
                    vertical-align: middle;

                    &.checked, &:hover {
                        &:after {
                            border-color: #1e7ec0;
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
                        top: -0.1em;
                    }
                }
            }

        }
    }
</style>
