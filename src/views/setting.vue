<template>
    <div>
        <button class="button" @click="download">备份配置</button>
        <label class="button" @click="upload" for="upload">恢复配置</label>
        <input type="file" id="upload" name="upload" @change="upload" ref="file" style="position:absolute; left:-3000px;">
        <transition name="fade">
            <div class="box" v-if="msg"> {{  msg  }}</div>
        </transition>
    </div>
</template>

<script>
    import {downloads, fileSystem} from '../libs/chrome/index'
    import {Db} from '../libs/db'

    export default {
        name: 'setting',
        data(){
            return {
                msg: ''
            }
        },
        methods: {
            download(){
                let that = this
                let data = Db.getAll()
                let str = JSON.stringify(data)
                let url = window.URL.createObjectURL(new Blob([str], {type: 'text/plain;charset=utf-8'}));
                downloads.download({
                    filename: 'bookmarks2-bak.json',
                    url: url
                }).then(data => {
                    console.log(data)
                    that.msg = '备份已下载!'
                })
            },
            upload(){
                let that = this;
                let dom = this.$refs.file
                let file = dom.files[0];
                if(!file) return
                console.log(file)
                let reader = new FileReader
                reader.onload = function(e){
                    let data = this.result
                    data = JSON.parse(data)
                    console.log(data)
                    Db.init(data)
                    that.msg = '恢复成功!'
                }
                reader.readAsText(file)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        margin-top: 2em;
    }
</style>