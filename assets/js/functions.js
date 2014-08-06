;(function(wushuyi, constructor){
	var $cache = {};
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	constructor[wushuyi] = {
		myScroll: [],
		imgScroll : function(){
			$cache.mainBox = $('.wrapper');
			$cache.imgBox = $('#imgBox .scroll');
			$cache.imgList = $('.slide', $cache.imgBox);
			var self = this,
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
			});

			self.myScroll[0] = new IScroll('#imgBox',{
					scrollX: true,
					scrollY: false,
					click: true,
					momentum: false,
					snap: true,
					snapSeed: 400,
					keyBindings: true,
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
