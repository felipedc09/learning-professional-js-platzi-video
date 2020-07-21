import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({video, plugins: [new AutoPlay()]})

const playButton = document.getElementById('play')
const muteButton = document.getElementById('mute')
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()