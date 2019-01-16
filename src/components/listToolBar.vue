<template>
    <div class="tool-bar">
        <div>
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
        </div>
        <div>
            <slot>

            </slot>
        </div>
        <div class="counter" v-if="count"> 共 {{ count }} 项</div>
        <div>
            <button><i class="fas fa-list"></i></button>
            <button><i class="fas fa-th"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tool-bar',
        props: {
            paths: Array,
            sortOptions: Array,
            count: Number
        },
        data(){
            return {
                sortBy: ''
            }
        },
        watch: {
            'sortBy': function(newVal, oldVal){
                this.$emit('sort-by-change', newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    .tool-bar {
        @include flex-middle;
        justify-content: space-between;
        padding: $gap 0 $gap $gap2;
        background: $baseColor2;

        > div:first-child {
            @include flex-middle;
        }

        .paths {
            margin: 0 10*$gap 0 0;
        }

        .counter {
            margin: 0 5*$gap 0 0;
        }
    }
</style>