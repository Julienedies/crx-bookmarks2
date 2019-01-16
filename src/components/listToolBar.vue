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
        <div v-if="sortOptions">
            <label class="checkbox">
                &nbsp;&nbsp;<input type="checkbox" v-model="sortReverse" @change="$emit('sortReverseChange', sortReverse)">
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
            <button><i class="fa fa-list"></i></button>
            <button><i class="fa fa-th"></i></button>
        </div>
    </div>
</template>

<script>
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
                sortReverse: false
            }
        },
        watch: {
            'sortBy': function (newVal, oldVal) {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    .tool-bar {
        @include flex-middle;
        padding: $gap $gap $gap $gap2;
        background: $baseColor2;
        white-space: nowrap;

        > * {
            @include flex-middle;
            flex: 1 1 auto;
        }
        .select select{
            width:100%;
        }
        .show-type, .counter, .flex-shrink-right{
            flex: 0;
            padding-left: 2 * $gap;
            @include flex-right;
        }
    }
</style>