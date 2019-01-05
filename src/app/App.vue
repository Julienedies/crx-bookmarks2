<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import navBar from '../components/navBar'
    export default {
        name: "App",
        components: {
            navBar
        }
    }
</script>

<style lang="scss" scoped>

</style>