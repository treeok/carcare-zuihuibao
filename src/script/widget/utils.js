/**
 * Created by claire on 2015/6/25.
 */
define(function(){
    var utils = {
        ajaxGet:function(url,param,cb){
            if(typeof param !== 'object'){
                cb = param;
                param = null;
            }
            $.get(url,param,function(data){
                cb&&cb(data);

            });
        },
        ajaxJson:function(url,param,cb,load,noload){
            $.ajax({
                type: 'post',
                url: url,
                data: param,
                beforeSend: function(){
                    load && load();
                },
                success: function(data){
                    cb&&cb(data)
                },
                complete:function(){
                    noload && noload();
                }
            });
        },
        telRegx:function(str){
            var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            return str.match(reg);
        },
        pwdRegx:function(str){
            var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/;
            return str.match(reg);
        },
        mailRegx:function(str){
            var reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            return str.match(reg);
        },
        nameRegx:function(str){
            var reg =  /^[\u4e00-\u9fa5]{2,20}$/;
            return str.match(reg);
        },
        plateNumRegx:function(str){
            var reg = /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/;
            return str.match(reg);
        },
        modalRegx:function(str){
            var reg = /[a-zA-Z][a-zA-Z0-9]{3,15}/;
            return str.match(reg);
        },
        fingineRegx:function(str){
            var reg = /[a-zA-Z][a-zA-Z0-9]{16}/;
            return str.match(reg);
        },
        engineRegx:function(str){
            var reg = /[a-zA-Z][a-zA-Z0-9]{5,24}$/;
            return str.match(reg);
        }
    };
    return utils;
});