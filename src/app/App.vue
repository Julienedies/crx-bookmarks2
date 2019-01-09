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
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

    #view{
        padding-bottom: 4 * $gap;
        overflow-y: scroll;
        overflow-x: hidden;
        flex-grow: 1;
    }
    #main{
        @include flex;
        min-height: 100%;
    }
    #content{
        @include flex-1;
        background: #fff;
        padding:$gap2;
        overflow-x: hidden;
    }
</style>