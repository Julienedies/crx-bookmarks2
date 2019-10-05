<template>
    <div class="box">
        <h3 class="title is-6">为不同的level标记不同的颜色</h3>

        <div class="field">
            <div class="control">
                <label class="radio" v-for="(v, i) in levelsColorMap">
                    {{ i }}级
                    <input class="input" type="color" v-model="levelsColorMap[i]"></input>
                </label>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-info" @click="save">保存</button>
            </div>
        </div>

    </div>
</template>

<script>
    import bookmarkManager from '../../../libs/bookmarkManager'
    import setting from '../../../libs/setting'

    export default {
        name: 'setting-color',
        data () {
            return {
                levels: [],
                levelsColorMap: {}
            }
        },
        created () {
            this.getData();
        },
        methods: {
            async getData () {
                let levels = this.levels = await setting.get('levels');
                let levelsColorMap = this.levelsColorMap = await setting.get('levelsColorMap') || {};
                levels.forEach((v) => {
                    let item = levelsColorMap[v];
                    if (item === undefined) {
                        levelsColorMap[v] = '';
                    }
                });
            },
            save () {
                console.log(this.levelsColorMap);
                setting.set('levelsColorMap', this.levelsColorMap);
                //setting.set({id: 'levels', _data: [1, 2, 3, 4, 5, 6, 7]});
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
