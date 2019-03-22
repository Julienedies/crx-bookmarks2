<template>
    <div>
        <list-tool-bar></list-tool-bar>
        <shortcut></shortcut>
    </div>
</template>

<script>
    import shortcut from './shortcut'

    export default {
        name: 'home',
        components: {
            shortcut
        }
    }
</script>

<style lang="scss" scoped>

</style>