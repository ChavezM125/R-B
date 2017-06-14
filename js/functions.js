//almacenar slider en variable
var slider=$('#slider');
//almacenar botones
var next=$('#btn-next');
var prev=$('#btn-prev');

$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-'+100+'%');

function moverR() {
	slider.animate({
		margin-left:'-'+200+'%'
		},700, function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left','-'+100+'%');
		});
}

next.on('click',function(){
	moverD();
});