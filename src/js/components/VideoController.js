import { $document } from '../modules/dev/_helpers'

export default class VideoController {
   constructor(element) {
      this.block = element
      if (!this.block) return

      this.video = this.block.querySelector('video')
      this.playBtn = this.block.querySelector('.js-video-play-btn')

      this.fullScreenState = false

      this.init()
   }

   init() {
      this.bindEvents()
   }

   bindEvents() {
      this.playBtn.addEventListener('click', () => this.playVideo())

      $document.on(
        'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange',
        'video',
        e => this.onFullscreenChange(e)
      );
   }

   playVideo() {
      this.block.classList.add('is-playing')
      if (!this.fullScreenState) this.enableFullScreen()
      this.video.play()
   }

   enableFullScreen() {
      if (this.video.requestFullscreen) {
         this.video.requestFullscreen()
      } else if (this.video.msRequestFullscreen) {
         this.video.msRequestFullscreen()
      } else if (this.video.mozRequestFullScreen) {
         this.video.mozRequestFullScreen()
      } else if (this.video.webkitRequestFullScreen) {
         this.video.webkitRequestFullScreen()
      }
   }

   onFullscreenChange() {
      if (this.fullScreenState) {
         this.stopVideo(this.video)
         this.fullScreenState = false
      } else {
         this.fullScreenState = true
         this.playVideo()
      }
   }

   stopVideo(video) {
      video.pause()
      video.currentTime = 0
   }
}
