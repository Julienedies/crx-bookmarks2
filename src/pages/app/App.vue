<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div id="view">
            <div id="main">
                <aside-bar ref="aside"></aside-bar>
                <drag-resize-bar @resize="onResize"></drag-resize-bar>
                <div id="content" ref="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from '../../components/navBar'
    import AsideBar from '../../components/asideBar'

    export default {
        name: "App",
        components: {
            AsideBar,
            navBar
        },
        methods: {
            onResize(arg){
                let asideDom = this.$refs.aside.$el
                let width = asideDom.offsetWidth
                width += arg.moveX
                console.log(asideDom, width, arg)
                asideDom.style.width = `${width}px`
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/basic/src/basic";
    
    #app{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        flex-direction: column;
    }

    #view{
        position: relative;
        overflow: hidden;
        display: flex;
        flex: 1;
    }

    #main{
        @include flex;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom: 0;
        overflow: hidden;
    }

    #content{
        overflow-x: hidden;
        overflow-y: scroll;
        flex:1;
        position:relative;
        background: #fff;
        >div{
            padding:$gap2;
            background: #fff;
        }
    }
</style>
