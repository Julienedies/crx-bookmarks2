<template>
    <div class="drag-resize-bar v">
    </div>
</template>

<script>

    export default {
        name: 'drag-resize-bar',
        props: {

        },
        data(){
            return {
                info: null
            }
        },
        mounted(){
            let that = this
            let elm = this.$el
            let startX, startY
            let w, h
            const onDown = function(e){
                e.preventDefault();

                w = elm.offsetWidth
                h = elm.offsetHeight

                startX = e.clientX;
                startY = e.clientY;

                document.addEventListener('mousemove', onMove)
                document.addEventListener('mouseup', onUp)

                //elm.setCapture()
                return false
            }
            const onMove = function(e){
                let moveX = e.clientX - startX;
                let moveY = e.clientY - startY;

                startX = e.clientX;
                startY = e.clientY;

                w += moveX
                //h += moveY

                //elm.style.width = `${w}px`
                that.$emit('resize', {moveX, moveY})
                return false
            }
            const onUp = function(e){
                document.removeEventListener('mousemove', onMove)
                document.removeEventListener('mouseup', onUp)
                //elm.releaseCapture()
            }
            elm.addEventListener('mousedown', onDown, false)
        },
        destroyed(){
        },
        methods: {
            bindDrag(e){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .h{
        width:100%;
        height:5px;
        cursor: row-resize;
    }
    .v{
        width:10px;
        height:100%;
        cursor: col-resize;
    }
    .drag-resize-bar{
        &:hover{
            background: #f0f0f0;
        }
    }
</style>