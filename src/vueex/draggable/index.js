/*!
 * Making draggable objects
 * Created by j on 2019-0-15.
 */

export default class Draggable {

    /**
     *
     * @param dom {dom} dom element
     * @param callback {Function} callback on dragging
     */
    constructor (dom, callback) {
        this.dom = dom
        this.callback = callback
        this.startX = 0
        this.startY = 0
        this.event = null

        const that = this
        const elm = this.dom

        const onDown = this.onDown = function (e) {
            e.preventDefault();
            this.event = e
            that.startX = e.clientX;
            that.startY = e.clientY;

            document.addEventListener('mousemove', onMove)
            document.addEventListener('mouseup', onUp)
            return false
        }

        const onMove = function (e) {
            this.event = e
            let moveX = e.clientX - that.startX;
            let moveY = e.clientY - that.startY;

            that.startX = e.clientX;
            that.startY = e.clientY;

            that.callback({moveX, moveY})
            return false
        }

        const onUp = function (e) {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseup', onUp)
        }
        elm.addEventListener('mousedown', onDown, false)
    }

    destroy(){
        this.dom.removeEventListener('mousedown', this.onDown)
    }

}


