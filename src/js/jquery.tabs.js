(function($) {
    $.fn.extend({
        tabs: function(options) {
            let defaults = {
                ev: 'click',
                active: 'active',
                content: 'show'
            };

            // 合并参数
            $.extend(defaults, options);

            // 选择元素
            let btns = this.children('ul').children('li');
            let divs = this.children('div');

            btns.on(defaults.ev, function() {
                let index = btns.index(this);
                $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        }
    });
})(jQuery);