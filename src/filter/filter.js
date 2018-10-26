import Vue from 'vue'

// 隐藏手机号中间4位的过滤器
Vue.filter('PrivacyPhone', (value) => {
    value += '';
    if (value.length === 11) {
        return value.substr(0, 3) + '****' + value.substr(7, 4);
    } else {
        return value;
    }
});
// 银行卡号格式化过滤器
Vue.filter('bankNumber', (value) => {
    let thisNumber = value + '',
        newStr = '';
    for (let i = 0; i < thisNumber.length; i++) {
        if (i !== 0 && i % 4 === 0) {
            newStr += " ";
        }
        newStr += thisNumber[i];
    }
    return newStr;
});
//亿、万元过滤器
Vue.filter('amount', (value) => {
    let numStr = ''
    let val = value / 100
    if (val >= 10000 && val < 100000000) {
        numStr = (val / 10000).toString() + "万元"
    } else if (val >= 100000000) {
        numStr = (val / 100000000).toString() + "亿"
    } else {
        numStr = val.toString() + "元"
    }
    return numStr;
});
// 银行卡号格式化过滤器
Vue.filter('yymmdd', (obj) => {
    let date = new Date(obj);
    let y = 1900 + date.getYear();
    let m = "0" + (date.getMonth() + 1);
    let d = "0" + date.getDate();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
});
// 货币过滤器
Vue.filter('currency', function (value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    let stringified = Math.abs(value).toFixed(decimals);
    let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    let i = _int.length % 3;
    let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    let _float = decimals ? stringified.slice(-1 - decimals) : '';
    let sign = value < 0 ? '-' : '';
    let digitsRE = /(\d{3})(?=\d)/g;
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
});
// 日期格式过滤器
Vue.filter('dateFil', (value) => {
    if (!value) return
    return value.split(' ')[0]
})

// 我的担保状态的过滤器
Vue.filter('guaranteeStatus', (value) => {
    let guaranteeStatus;
    if (value === 0) {
        guaranteeStatus = '待还款'
    } else if (value === 1) {
        guaranteeStatus = '已还款'
    } else if (value === 2) {
        guaranteeStatus = '已代偿'
    } else if (value === 3) {
        guaranteeStatus = '流标'
    }
    return guaranteeStatus;
});