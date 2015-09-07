/**
 * Created by claire on 2015/6/25.
 */
var static_domain = 'http://10.8.6.8:8080/public';
var base = 'http://10.8.6.8:8080/CarcareAppService/';
require.config({
    shim: {
        'jquery-1.11.1.min': {
            exports: '$'
        }
    },
    baseUrl: static_domain+'/lib/',
    paths: {
        'mobiscroll.custom-2.6.2.min': 'mobiscroll.custom-2.6.2.min',
        'jquery-1.11.1.min': 'jquery-1.11.1.min',
        'bootstrap.min': 'bootstrap.min',
        'zepto.min': 'zepto.min',
        include: '../script/include',
        widget: '../script/widget',
        common: '../script'
    }
});
require(['jquery-1.11.1.min','common/common'], function ($,Common) {
    Common.init();
});
