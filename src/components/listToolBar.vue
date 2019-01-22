<template>
    <div class="tool-bar">
        <div class="paths" v-if="paths">
            <router-link v-for="path of paths" v-if="path.title" :to="`/node/${path.id}`" :key="path.id">
                &nbsp; {{ path.title }} &nbsp; >
            </router-link>
        </div>
        <div class="select is-small" v-if="sortOptions">
            <select v-model="sortBy" @change="$emit('sortByChange', $event.target.value)">
                <option v-for="option of sortOptions" :value="option.value">{{option.text}}</option>
            </select>
        </div>
        <div>
            <label class="checkbox">
                &nbsp;&nbsp;<input type="checkbox" v-model="reverse">
                排序反转
            </label>
        </div>
        <div></div>
        <div class="flex-shrink-right">
            <slot>
            </slot>
        </div>
        <div class="counter" v-if="count"> 共 {{ count }} 项</div>
        <div class="show-type">
            <button :class="{active: ui.list.showType === 'list'}" @click="updateUi(['list.showType', 'list'])"><i class="fa fa-list"></i></button>
            <button :class="{active: ui.list.showType === 'gird'}" @click="updateUi(['list.showType', 'gird'])"><i class="fa fa-th"></i></button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'list-tool-bar',
        props: {
            paths: Array,
            sortOptions: Array,
            count: Number
        },
        data () {
            return {
                sortBy: '',
            }
        },
        computed: {
            ...mapState({
                ui: 'ui'
            }),
            reverse: {
                get () {
                    return this.$store.state.ui.list.reverse
                },
                set (val) {
                    this.$store.commit('updateUi', ['list.reverse', val])
                }
            }
        },
        methods: {
            ...mapMutations({
                updateUi: 'updateUi'
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    .tool-bar {
        @include flex-middle;
        padding: $gap $gap $gap $gap2;
        background: $baseColor2;
        white-space: nowrap;

        > * {
            @include flex-middle;
            flex: 1 1 auto;
        }

        .select select {
            width: 100%;
        }

        .show-type, .counter, .flex-shrink-right {
            flex: 0;
            padding-left: 2 * $gap;
            @include flex-right;
        }
    }
</style>