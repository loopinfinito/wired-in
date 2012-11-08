$('a').click( function( event ){
	event.preventDefault()
})

$('#prev').click( function(){

	if( !$(this).hasClass('disabled') )
		player.prev()
})

$('#next').click( function(){

	if( !$(this).hasClass('disabled') )
		player.next()
})

$('#button').click( function(){

	if( $(this).hasClass('play') ){

		player.play()
		$(this).removeClass('play').addClass('pause')

	} else {

		player.pause()
		$(this).removeClass('pause').addClass('play')
	}
})

$('#tracklist a').click( function(){

	player.play( $(this).attr('data-index') )
})