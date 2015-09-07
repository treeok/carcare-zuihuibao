/**
 * Created by NCGZ-DZ- on 2015/8/25.
 */
define(function(){
    var _tab = function(element){
        this.element = $(element);
        this.init();
    };
    _tab.prototype = {
        init:function(){
            var that = this;
            this._$ul = this.element.find('ul');
            this._$panel_content = this.element.find('.tab-content');
            this._$navs = this._$ul.find('li');
            this._$panels = this._$panel_content.find('.tab-pane');
            this._$navs.each(function(){
                $(this).click(function(){
                    var $this = $(this),
                        index = that._$navs.index($this);
                    that.show($this,index);
                });
            });
        },
        show:function($ele,index){
            var that = this;
            if(index == 3){
                $(that._$panels.get(index)).empty();
                //找到目前的active
                var indexActive;
                that._$navs.each(function(){
                    if($(this).hasClass('active')){
                        indexActive = that._$navs.index($(this));
                    }
                });
                $(that._$panels.get(index)).append($(that._$panels.get(indexActive)).html());
            }
            that._$navs.map(function(){
                $(this).removeClass('active');
            });
            that._$panels.map(function(){
                $(this).removeClass('active');
            });
            if($ele.hasClass('active'))  return;
            $ele.addClass('active');
            $(that._$panels.get(index)).addClass('active');
        }
    };

    return _tab;
});