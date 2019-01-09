<template>
    <div id="tool-bar">

        <div class="a">
            <div v-if="paths" id="paths">
                <router-link v-for="path of paths" :to="`/node/${path.id}`" :key="path.id"> {{ path.title }} / </router-link>
            </div>

            <div class="select is-small">
                <select>
                    <option v-for="option of options" :value="option.value">{{option.text}}</option>
                </select>
            </div>
        </div>

        <div class="counter"> 共 {{ count }} 项</div>

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
        justify-content: space-between;
        padding: $gap $gap2 $gap $gap2;
        margin: 0 $gap2 0 0;
        background: $baseColor2;
        .a{
            @include flex-middle;
        }
        #paths{
            margin: 0 10*$gap 0 0;
        }
        .counter{
            margin:0 5*$gap 0 0;
        }
    }
</style>