<template>
    <nav>

        <div class="search-box">
            <search-bar></search-bar>
        </div>

        <div class="nav-items">
            <router-link class="nav-item hvr-underline-from-center" v-for="route of routes" v-if="route.name!='search'"  :to="route._path || route.path" :key="route.path">
                <span > {{ route.name }}</span>
            </router-link>
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
        padding: 0  4*$gap;
        color: #fff;
        background: $activeColor;
        border-bottom: solid 0px #dfdddd;

        >div{
            @include flex-1;
        }

        .search-box{
            padding-left:18%;
        }

        .nav-items{
            @include flex-1;
            @extend .flex-mr;
            .nav-item{
                padding: $gap 3*$gap;
                font-size:1.2em;
                /*&:before{
                    content: "";
                    position: absolute;
                    z-index: -1;
                    left: 51%;
                    right: 51%;
                    bottom: 0;
                    background: #fff;
                    height: 4px;
                    -webkit-transition-property: left, right;
                    transition-property: left, right;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }*/

                &.router-link-active{
                    background: #fff;
                    color: $activeColor;
                    font-weight:bold;
                    &:before{
                        left:0;
                        right:0;
                    }
                }
            }
        }

    }

</style>