/*!
 * 
 * Created by j on 2019-01-09.
 */

export default {
    bind(el, binding, vnode, oldVnode) {

    },
    inserted(el, binding, vnode, oldVnode) {
        let cla = binding.value;
        console.log(binding)
        el.onclick = function (e) {
            this.classList.toggle(cla)
        }

    },
    update(el, binding, vnode, oldVnode) {

    },
    componentUpdated(el, binding, vnode, oldVnode) {

    },
    unbind(el, binding, vnode, oldVnode) {
        el.onclick = undefined;
    }
}