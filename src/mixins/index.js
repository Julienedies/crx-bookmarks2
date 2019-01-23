/*!
 * define Vue mixins
 * Created by j on 2019-01-13.
 */
import editBookmark from './editBookmark'

export default {
    methods: {
        editBookmark
    },
    watch: {
        '$root.event' (newVal, oldVal) {
            console.log('mixins watch $root.event', this.name)
            this.getData && this.getData()
        },
        '$store.state.ui.list.reverse' (newVal) {
            this.bookmarkArray && this.bookmarkArray.reverse()
        },
    }
}
