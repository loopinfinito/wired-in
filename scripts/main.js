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

	if( player.playing )
		player.pause()
	else
		player.play()
})

$('#tracklist a').click( function(){

	player.play( $(this).attr('data-index') )
})