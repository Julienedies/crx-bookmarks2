<template>
    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" placeholder="" v-model.trim="query" @keyup.enter="search()">
        </div>
        <div class="control">
            <a class="button is-info" :click="search()">
                Search
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'searchBar',
        data() {
            return {
                query: ''
            }
        },
        created() {
            this.$nextTick( function() {
                this.query = this.$route.params.query
            })
        },
        methods: {
            search() {
                let query = this.query
                query && this.$router.push({name: 'search', params: {query}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>