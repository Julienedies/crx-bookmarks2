<template>
    <div>
        <nav-bar></nav-bar>
        <div id="view-container">
            <aside-bar></aside-bar>
            <main>
                <router-view></router-view>
            </main>
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

    #view-container{
        @include flex;
        margin: $gap*2 0 0 0;
    }
    main{
        @include flex-1;
        overflow: hidden;
        background: #fff;
    }
</style>