<template>

    <nav>

        <div class="a">
            <router-link v-for="route of routes" v-if="route.name!='search'"  :to="route._path || route.path" :key="route.path">
                <span > {{ route.name }}</span>
            </router-link>
        </div>

        <div class="b">
            <search-bar></search-bar>
        </div>

    </nav>

</template>

<script>
    import routes from '../router/routes'
    import searchBar from '../components/searchBar'

    export default {
        name: "navBar",
        components: {
            searchBar
        },
        data() {
            return {
                routes
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic";

    nav{
        @include flex-middle;
        padding: 3*$gap  4*$gap;
        background: #fff;
        border-bottom: solid 1px #dfdddd;

        .a{
            @include flex-1;
            @include flex-middle;
            justify-content: space-around;
        }

    }

</style>