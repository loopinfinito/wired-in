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

$('#toggle-play').click( function(){

	if( $(this).hasClass('play') ){

		player.play()
		$(this).removeClass('play').addClass('pause')
		$('#prev-music, #next-music').removeClass('hidden')

	} else {

		player.pause()
		$(this).removeClass('pause').addClass('play')
		$('#prev-music, #next-music').addClass('hidden')
	}
})

$('#tracklist a').click( function(){

	player.play( $(this).attr('data-index') )
})