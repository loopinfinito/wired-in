var player = ( function(){

	var player = {

		tracklist: [],

		current: 0,

		playing: false,

		init: function(){

			this.loadTracks()
			return this
		},

		loadTracks: function(){

			// $('#tracklist a').each( function( index, element ){

				// $(this).attr( 'data-index', index )
				// this.tracklist[ index ] = $('').append
			// })
			// console.log($('#tracklist a'))
		},

		prev: function(){

			console.log('prev')
		},

		next: function(){

			console.log('next')
		},

		play: function( index ){

			if( index == null )
				console.log('play')
			else
				console.log('go to '+ index +' and play')
		},

		pause: function(){

			console.log('pause')
		}
	}

	return player.init()
})()