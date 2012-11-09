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
				player.tracklist[ index ] = $('<audio></audio>').appendTo('body').attr( 'src', 'music/1/'+$(this).attr( 'data-src' ) )[0]
				player.tracklist[ index ].addEventListener( 'ended', player.next )
			})

			console.log(this.tracklist[0])
		},

		prev: function(){

			var index

			if( this.current == 0 )
				index = this.tracklist.length - 1
			else
				index = this.current - 1

			this.play( index )
		},

		next: function(){

			var index

			if( this.current == this.tracklist.length - 1 )
				index = 0
			else
				index = this.current + 1

			this.play( index )
		},

		play: function( index ){

			if( this.tracklist.length > 0 ){

				if( index == null ){

					if( this.playing )
						this.stop()

					this.tracklist[ this.current ].play()
					console.log('play')

				} else if( index >= 0 && index < this.tracklist.length ){

					this.stop()
					this.current = index
					console.log('go to '+ index)
					this.play()
				}

				this.playing = true
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