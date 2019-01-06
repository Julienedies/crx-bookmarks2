<template>
    <div>
        <nav-bar></nav-bar>
        <div id="view-container" class="columns">
            <aside-bar class="columns is-4"></aside-bar>
            <transition name="component-fade" mode="out-in" class="column">
                <router-view class="column"></router-view>
            </transition>
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
        padding: 15px 6px 10px 10px;
        border: solid 1px #e6e6e6;
    }
</style>