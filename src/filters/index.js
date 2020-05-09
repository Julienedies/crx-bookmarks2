/*!
 * filter
 * Created by j on 2019-01-05.
 */

/**
 * 显示网站icon
 * @param input {String} 书签的url
 * @returns {String}  icon src
 */
export function getFavicon (input) {
    return 'chrome://favicon/' + input;
}

export function hex2Rgb (color, opacity) {
    color = color.toLowerCase();
    // 16进制颜色值的正则
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            let colorNew = "#";
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        //return "RGB(" + colorChange.join(",") + ")";
        return `rgb( ${ colorChange.join(',') }, ${ opacity || 0.4 })`;
    } else {
        return color;
    }
}

