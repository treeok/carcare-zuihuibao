/**
 * Created by claire on 2015/7/9.
 */
define(function(){
    var $window = $(window);
    var _dialog = function(opt){
        opt = opt||{};
        this.opt = opt;
        var html = '<div class="dialog" id="index_'+opt.id+'" style="margin:0;z-index:200;display:none;background:#fff;border:1px solid #e3e3e3;width:'+opt.width+'px;">'+
                '<div class="dialog-title">'+opt.title+'<span class="close">×</span></div>'+
                '<div class="dialog-content">'+opt.content+'</div>'+
                '<div class="dialog-bottom">'+opt.bottom+'</div>'+
                '</div>';
        $('body').append(html);
        this._el = $('#index_'+opt.id);
        this.init();
    };
    _dialog.prototype ={
        init:function(){
            var _that = this;
            _that._show();
            this._el.find('.close').click(function(){
                _that._close();
            });
        },
        _position:function(){
            this._el.css({
                top: ($window.height() - this._el.height()) / 2 + $window.scrollTop(),
                left: ($window.width() - this._el.width()) / 2
            });
        },
        _show:function(){
            if(!$('body').find('.dialog_bg').length){
                $('body').append('<div class="gray-bg dialog_bg" style="z-index: 100;"></div>');
            }

            function bgHeight(){
                var bodyHeight = $(document).height();
                var windowHeight = $(window).height();
                if(windowHeight < bodyHeight){
                    $('body').find('.dialog_bg').height(bodyHeight);
                }else{
                    $('body').find('.dialog_bg').height('100%');
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
            $('body').find('.dialog_bg').remove();
        }
    };

    return _dialog;
});
