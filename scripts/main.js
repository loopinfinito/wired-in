$('a').click( function( event ){
	event.preventDefault()
})

$('#prev-album').click( function(){

	if( !$(this).hasClass('disabled') )
		console.log('prev album')
})

$('#next-album').click( function(){

	if( !$(this).hasClass('disabled') )
		console.log('next album')
})

$('#prev').click( function(){
	player.prev()
})

$('#next').click( function(){
	player.next()
})

$('#toggle-play').click( function(){

	if( $(this).hasClass('play') ){

		player.play()
		$(this).removeClass('play').addClass('pause')
		$('#prev, #next').removeClass('hidden')

	} else {

		player.pause()
		$(this).removeClass('pause').addClass('play')
		$('#prev, #next').addClass('hidden')
	}
})

$('#tracklist a').click( function(){

	player.play( $(this).attr('data-index') )
})