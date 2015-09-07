/**
 * Created by claire on 2015/7/9.
 */
define(function(){
    var $window = $(window);
    var _alert = function(opt){
        opt = opt||{};
        this.opt = opt;
        var html = '<div class="alert" id="index_'+opt.id+'" style="margin:0;z-index:200;display:none;background:#fff;border:1px solid #e3e3e3;width:'+opt.width+'px;">'+
                '<div class="alert-title">提示:</div>'+
                '<div class="alert-content">'+opt.txt+'</div>'+
                '<div class="alert-bottom"><button class="btn alert-btn btn-primary" style="font-size:16px;margin-bottom:5px;width: 100%;height: 40px;">确定</button></div>'+
                '</div>';

        $('body').append(html);
        this._el = $('#index_'+opt.id);
        this.init();
    };
    _alert.prototype ={
        init:function(){
            var _that = this;
            _that._show();
            this._el.find('.alert-btn').click(function(){
                _that._close();
                _that.opt.cb && _that.opt.cb();
            });
        },
        _position:function(){
            this._el.css({
                top: ($window.height() - this._el.height()) / 2 + $window.scrollTop(),
                left: ($window.width() - this._el.width()) / 2
            });
        },
        _show:function(){
            if(!$('body').find('.alert_bg').length){
                $('body').append('<div class="gray-bg alert_bg" style="z-index: 100;"></div>');
            }

            function bgHeight(){
                var bodyHeight = $(document).height();
                var windowHeight = $(window).height();
                if(windowHeight < bodyHeight){
                    $('body').find('.alert_bg').height(bodyHeight);
                }else{
                    $('body').find('.alert_bg').height('100%');
                }
            }
            bgHeight();
            $(window).resize(function(){
                bgHeight();
            });
            this._el.show();
            this._position();
        },
        _close:function(){
            this._el.remove();
            $('body').find('.alert_bg').remove();
        }

    };

    return _alert;
});