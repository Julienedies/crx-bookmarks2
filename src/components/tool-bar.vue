<template>
    <div class="tool-bar columns">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tool-bar'
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    .tool-bar {
        @include flex-middle;
        justify-content: space-between;
        padding: $gap 0 $gap $gap2;
        background: $baseColor2;

        > div {
            @include flex-middle;

        }


    }
</style>