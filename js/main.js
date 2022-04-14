function onYouTubeIframeAPIReady() {
	var player;

	player = new YT.Player('YouTubeBackgroundVideoPlayer',
	{
		videoId: 'wZGLkYVwcCs',
		width: 1920,
		height: 1080,

		playerVars: {
			playlist: 'wZGLkYVwcCs',
			autoplay: 1,
			autohide: 1,
			disablekb: 1,
			controls: 0,
			showinfo: 0,
			modestbranding: 1,
			loop: 1,
			fs: 0,
			rel: 0,
			enablejsapi: 1,
			iv_load_policy: 3
		},

		events: {
			onReady: function(e)
			{
				//e.target.mute();
				e.target.setVolume(1);
				e.target.setPlaybackQuality('hd1080');
			},

			onStateChange: function(e)
			{
				if (e && e.data === 1)
				{
					var videoHolder = document.getElementById('home-banner-box');

					if (videoHolder && videoHolder.id)
					{
						videoHolder.classList.remove('loading');
					}
				}
				else if (e && e.data === 0)
				{
					e.target.playVideo();
				}
			}
		}
	});
}