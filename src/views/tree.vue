<template>
    <div class="treemap">
        <h3>chartxxxx</h3>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    import d3 from 'd3'
    import echarts from 'echarts'
    import { bookmarks } from '../libs/chrome'
    export default {
        name: 'tree',
        directives: {
            treemap: {
                inserted: function (el) {
                }
            }
        },
        data(){
          return {
              treeData:[]
          }
        },
        created(){
            this.getData()
        },
        mounted(){
            let elm = this.$refs.chart
            let chart = echarts.init(elm)
            let option = {
                series: [{
                    type: 'treemap',
                    data: [{
                        name: 'nodeA',            // First tree
                        value: 10,
                        children: [{
                            name: 'nodeAa',       // First leaf of first tree
                            value: 4
                        }, {
                            name: 'nodeAb',       // Second leaf of first tree
                            value: 6
                        }]
                    }, {
                        name: 'nodeB',            // Second tree
                        value: 20,
                        children: [{
                            name: 'nodeBa',       // Son of first tree
                            value: 20,
                            children: [{
                                name: 'nodeBa1',  // Granson of first tree
                                value: 20
                            }]
                        }]
                    }]
                }]
            };
            // option.series[0].data = this.treeData
            //chart.setOption(option)
        },
        methods: {
            async getData(){
                this.treeData = await bookmarks.getTree(true)
                console.log(this.treeData)
            }
        }
    }
</script>

<style lang="scss" scoped>

.treemap, .chart{
    width:100%;
    height:100%;
}

</style>