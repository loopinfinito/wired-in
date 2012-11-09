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

			$('#tracklist a').each( function( index, element ){

				$(this).attr( 'data-index', index )
				player.tracklist[ index ] = $('<audio controls style=""></audio>').appendTo('body').attr( 'src', 'music/1/'+$(this).attr( 'data-src' ) )[0]
				player.tracklist[ index ].addEventListener( 'ended', function(){
					player.next()
				})
			})
		},

		prev: function(){

			if( this.current == 0 )
				this.play( this.tracklist.length - 1 )
			else
				this.play( this.current - 1 )
		},

		next: function(){

			if( this.current == this.tracklist.length - 1 )
				this.play( 0 )
			else
				this.play( this.current + 1 )
		},

		play: function( index ){

			if( this.tracklist.length > 0 ){

				if( index == null ){

					if( this.playing )
						this.stop()

					this.tracklist[ this.current ].play()
					$('#tracklist a').removeClass( 'playing' )
					$('#tracklist a[data-index='+this.current+']').addClass( 'playing' )
					this.playing = true
					console.log('play')

				} else if( index >= 0 && index < this.tracklist.length ){

					this.stop()
					this.current = index
					console.log('go to '+ index)
					this.play()
				}
			}
		},

		stop: function(){

			this.tracklist[ this.current ].pause()
			this.tracklist[ this.current ].currentTime = 0
			console.log('stop')
		},

		pause: function(){

			this.tracklist[ this.current ].pause()
			this.playing = false
			console.log('pause')
		}
	}

	return player.init()
})()