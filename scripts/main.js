$('a').click( function( event ){
	event.preventDefault()
})

$('#prev').click( function(){

	if( !$(this).hasClass('disabled') )
		console.log('prev')
})

$('#next').click( function(){

	if( !$(this).hasClass('disabled') )
		console.log('next')
})

$('#button').click( function(){

	if( $(this).hasClass('play') ){

		console.log('play')
		$(this).removeClass('play').addClass('pause')

	} else {

		console.log('pause')
		$(this).removeClass('pause').addClass('play')
	}
})

$('#tracklist a').click( function(){

	console.log('go to ' + $(this).attr('href'))
})