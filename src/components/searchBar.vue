<template>
    <div class="field has-addons" style="flex:1;">
        <div class="control" style="width:100%;">
            <input class="input" type="text" placeholder="" v-model.trim="query" @keyup.enter="search()"/>
        </div>
        <div class="control">
            <a class="button is-info search-btn" @click="search()">
                <i class="fa fa-search"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'searchBar',
        data () {
            return {
                query: ''
            }
        },
        mounted () {
            console.log(this, this.$route.params.query)
            this.query = this.$route.params.query
        },
        methods: {
            search () {
                let query = this.query
                query && this.$router.push({name: 'search', params: {query}})
            }
        },
        computed: {
            // 使用对象展开运算符将此对象混入到外部对象中
            ...mapState({})
        }
    }
</script>

<style lang="scss" scoped>
    .search-btn {
        padding: 0 1rem;
    }

    .fa {
        color: inherit;
    }
</style>