<template>
    <div id="tool-bar">
        <div v-if="paths">
            <router-link v-for="path of paths" :to="`/node/${path.id}`" :key="path.id"> {{ path.title }} / </router-link>
        </div>
        <div class="select is-small is-rounded">
            <select>
                <option v-for="option of options" :value="option.value">{{option.text}}</option>
            </select>
        </div>
        <span> 共{{ count }}项</span>
    </div>
</template>

<script>
    export default {
        name: 'toolBar',
        props: {
            paths: Array,
            options: Array,
            count: 0
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    #tool-bar {
        @include flex-middle;
        @include flex-right;
        padding: 0 20px 10px 10px;
        margin-bottom: 10px;
        border-bottom: solid 1px #f0f0f0;
    }
</style>