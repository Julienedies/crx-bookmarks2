<template>
    <div>
        <tool-bar>
            <button @click="clear" class="flex-middle active" title="清空回收站"><i class="far fa-trash-alt"></i></button>
        </tool-bar>

        <list :bookmarkArray="bookmarkArray">
            <template slot-scope="{ bookmark }" slot="default">
                <button @click="recover(bookmark)" title="恢复"><i class="fa fa-undo"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
            </template>
            <template slot-scope="{ bookmark }" slot="bb">
                <button @click="recover(bookmark)" title="恢复"><i class="fa fa-undo"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
            </template>
        </list>
    </div>
</template>

<script>
    import toolBar from '../listToolBar'
    import list from '../list'
    import { mapState } from 'vuex'
    import bookmarkManager from '../../libs/bookmarkManager'
    import getDb from '../../libs/db'

    const trashDb = getDb('trash');

    export default {
        name: 'trash',
        components: {
            toolBar,
            list
        },
        data () {
            return {
                bookmarkArray: []
            }
        },
        computed: {
            ...mapState({
                reverse: state => state.ui.list.reverse
            })
        },
        created () {
            this.getData();

            let cb = (args) => {
                console.log('event cb: trashDb add', args);
                this.bookmarkArray.unshift(args[0])
            };

            trashDb.on('add', cb);

            this.$once('hook:beforeDestroy', function () {
                trashDb.off('add', cb)
            });
        },
        methods: {
            async getData () {
                this.bookmarkArray = await trashDb.get().then(data => {
                    return Object.values(data);
                });
                this.reverse && this.bookmarkArray.reverse();
            },
            async recover (bookmark) {
                let data = await bookmarkManager.recover(bookmark);
                trashDb.remove(bookmark);
                this._remove(bookmark);
                this.$msg({title: '已经恢复！', msg: JSON.stringify(data)});
            },
            remove (bookmark) {
                trashDb.remove(bookmark);
                this._remove(bookmark);
            },
            _remove (bookmark) {
                let index = this.bookmarkArray.findIndex((item) => item === bookmark);
                this.bookmarkArray.splice(index, 1);
            },
            clear () {
                if (confirm('确认清空回收站, 该操作不可撤销!')) {
                    this.bookmarkArray = [];
                    trashDb.clear();
                }
            },
        },
        watch: {
            'reverse' (newVal) {
                this.bookmarkArray.reverse();
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
