<template>
    <div class="modal-wrap" @close="close" v-show="value">
        <div class="mask" @click="close"></div>
        <div class="modal-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.value = false
            },
            confirm() {

            },
            cancel() {
                this.close()
                this.$emit('cancel')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../basic/src/basic";

    .modal-wrap{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 1000;

        .mask{
            position: absolute;
            width:100%;
            height:100%;
            background: rgba(0,0,0, 0.2);
        }
        .modal-box{
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -60%);
            background: #fff;
            min-width: 40%;
            min-height:40px;
        }
    }
</style>