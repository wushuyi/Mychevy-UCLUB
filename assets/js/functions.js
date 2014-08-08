;(function(wushuyi, constructor){
	var $cache = {};
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	constructor[wushuyi] = {
		myScroll: [],
		imgScroll : function(){
			$cache.mainBox = $('.wrapper');
			$cache.imgBox = $('#imgBox .scroll');
			$cache.imgList = $('.slide', $cache.imgBox);
			$cache.indicator = $('#indicator ul');
			windowW = $cache.mainBox.width();
			
			var self = this,
				switchIcon = "",
				imgSize = $cache.imgList.size(),
				screenW = $cache.mainBox.width(),
				screenH = $cache.mainBox.height(),
				screenHNs = screenH > 420 ? 'b' : 's';

			$cache.imgBox.width(screenW * imgSize);
			$cache.imgList.width(screenW).each(function(i){
				var $self = $(this);
				$self.css({
					'background-image' : 'url(assets/image/pic_'+i+'_'+screenHNs+'.jpg)'
				});
				switchIcon += '<li></li>';
			});
			$cache.indicator.append(switchIcon);
			$cache.indicator.width($cache.imgList.size() * 20);
			
			$cache.indicatorIcon = $('li', $cache.indicator);
			$cache.indicatorIcon.eq(0).addClass('active');
			
			self.myScroll[0] = new IScroll('#imgBox',{
					scrollX: true,
					scrollY: false,
					click: true,
					momentum: false,
					snap: true,
					snapSeed: 400,
					keyBindings: true
			});
			self.myScroll[0].on('scrollEnd', function(){
				var left = -$cache.imgBox.css('transform').split(',')[4];
				var index = Math.floor(left/windowW);
				$cache.indicatorIcon.removeClass('active').eq(index).addClass('active');
				
			});
		}
	};
})('wushuyi', this);

;(function($){
	$(document).ready(function (){
		switch(window.pgName){
			case 'imgScroll':
				wushuyi.imgScroll();
		}
	});
})(window.jQuery);
