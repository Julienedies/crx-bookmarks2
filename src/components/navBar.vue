<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <router-link v-for="route of routes" v-if="route.name!='search'"  :to="route._path || route.path" :key="route.path" class="navbar-item">
                    <span > {{ route.name }}</span>
                </router-link>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <search-bar></search-bar>
                </div>
            </div>
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

</style>