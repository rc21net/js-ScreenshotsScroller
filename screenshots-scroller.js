(function( $ ) {
	$.fn.scroller = function () {

		//величина шага прокрутки
		var bigstep = 146;
		var smallstep = 50;

		var itemsWidth = 0;

		var items = this.find('.items');
		var prev = this.find('.prev');
		var next = this.find('.next');

		// ширина всех item
		items.find('.item').each(function(){
			itemsWidth += $(this).outerWidth(true);
		});

		// внешний вид
		items.css('overflow', 'hidden');
		if (itemsWidth > items.width()){
			prev.css('visibility', 'visible');
			next.css('visibility', 'visible');
		}

		// события
		next.click(function(e){
			e.preventDefault;
			scrollphoto(true, bigstep);
		});
		next.dblclick(function(e){ //ie
			e.preventDefault;
			scrollphoto(true, bigstep);
		});
		prev.click(function(e){
			e.preventDefault;
			scrollphoto(false, bigstep);
		});
		prev.dblclick(function(e){ //ie
			e.preventDefault;
			scrollphoto(false, bigstep);
		});

		items.on('mousewheel', wheelscroll);
		items.on('DOMMouseScroll', wheelscroll); //ff

		function scrollphoto(way, step){
			if(way) items.scrollLeft(items.scrollLeft()+step);
			else items.scrollLeft(items.scrollLeft()-step);
		}

		function wheelscroll(e){
			if (e.originalEvent.wheelDelta /120 > 0) scrollphoto(false, smallstep);
			else scrollphoto(true, smallstep);

			e.preventDefault();
		}
	}

})(jQuery);




