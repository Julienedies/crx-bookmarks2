<template>
    <nav>
        <div class="search-box">
            <search-bar></search-bar>
        </div>

        <div class="nav-items">
            <router-link class="nav-item hvr-underline-from-center" v-for="route of routes" v-if="route.title && route.name!='search'"  :to="route._path || route.path" :key="route.path">
                <span > {{ route.title }}</span>
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
    @import "../css/basic/src/basic";

    nav{
        @include flex-middle;
        padding: 0  4*$gap;
        color: #fff;
        background: $activeColor;

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
                position: relative;
                padding: $gap 3*$gap;
                font-size:1.2em;
                white-space: nowrap;

                // hover style start--------------
                display: inline-block;
                vertical-align: middle;
                -webkit-transform: perspective(1px) translateZ(0);
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                overflow: hidden;
                &:before{
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
                }
                // ---------------hover style end
                &.router-link-active{
                    background: #fff;
                    color: $activeColor;
                    font-weight:bold;
                }
                &.router-link-active, &:hover{
                    &:before{
                        z-index: auto;
                        left:0;
                        right:0;
                    }
                }
            }
        }

    }
</style>
