<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div id="view">
            <div id="main">
                <aside-bar></aside-bar>
                <div id="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from '../components/navBar'
    import AsideBar from "../components/asideBar"

    export default {
        name: "App",
        components: {
            AsideBar,
            navBar
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";
    
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
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex: 1;
    }

    #main{
        @include flex;
        position: absolute;
        left:0;
        right:0;
        top:0;
    }

    #content{
        flex:1;
        position:relative;
        background: #fff;
        >div{
            position: absolute;
            left:0;
            right:0;
            padding:$gap2;
            background: #fff;
        }
    }
</style>