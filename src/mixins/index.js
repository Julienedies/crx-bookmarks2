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
        '$root.event'(newVal, oldVal){
           this.getData &&  this.getData()
        }
    }
}
