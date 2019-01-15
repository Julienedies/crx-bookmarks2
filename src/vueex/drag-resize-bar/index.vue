<template>
    <div class="drag-resize-bar v">
    </div>
</template>

<script>
    import Draggable from '../draggable/index'

    export default {
        name: 'drag-resize-bar',
        props: {},
        data () {
            return {
                info: null
            }
        },
        mounted () {
            this.bindDrag()
        },
        destroyed () {
        },
        methods: {
            bindDrag () {
                let that = this
                let elm = this.$el
                new Draggable(elm, function (arg) {
                    that.$emit('resize', arg)
                })
            }

            /*bindDrag () {
                let that = this
                let elm = this.$el
                let startX, startY
                const onDown = function (e) {
                    e.preventDefault();

                    startX = e.clientX;
                    startY = e.clientY;

                    document.addEventListener('mousemove', onMove)
                    document.addEventListener('mouseup', onUp)
                    return false
                }
                const onMove = function (e) {
                    let moveX = e.clientX - startX;
                    let moveY = e.clientY - startY;

                    startX = e.clientX;
                    startY = e.clientY;

                    that.$emit('resize', {moveX, moveY})
                    return false
                }
                const onUp = function (e) {
                    document.removeEventListener('mousemove', onMove)
                    document.removeEventListener('mouseup', onUp)
                }
                elm.addEventListener('mousedown', onDown, false)
            }*/
        }
    }
</script>

<style lang="scss" scoped>
    .h {
        width: 100%;
        height: 5px;
        cursor: row-resize;
    }

    .v {
        width: 10px;
        height: 100%;
        cursor: col-resize;
    }

    .drag-resize-bar {
        &:hover {
            background: #f0f0f0;
        }
    }
</style>