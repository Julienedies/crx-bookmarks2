<template>
    <div>
        <router-link v-bind:to="path" v-for="path of paths" :key="path">
            <v-btn> {{ path }}</v-btn>
        </router-link>
    </div>
</template>

<script>
    import {paths} from '../app/routes'

    export default {
        name: "navBar",
        data() {
            return {
                paths
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>