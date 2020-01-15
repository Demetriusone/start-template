import objectFitImages from 'object-fit-images'
import 'intersection-observer'

import './Preloader'
import './Header'
import '../sections/Screen'
import '../sections/Prices'
import './Sliders'
import './Anims'
import './Footer'
import './PlayInView'
import './Popup'
import './To-top'
import './SearchSelect'
import PageResize from './pageResize'
import './Dot'
import './form'
import './noTouch'
import VideoController from './VideoController'
import { $header, $scrolledElements } from '../modules/dev/_helpers'

export class Common {
   /**
    * Cache data, make preparations and initialize common scripts.
    */
   constructor() {
      // init videos which are playing on the button click
      const videoElements = document.querySelectorAll('.js-video-block')
      videoElements.forEach(el => new VideoController(el))

      this.init()
   }

   // scroll to section by hash
   scrollToSection() {
      const $btn = $('.js-scroll-btn');

      $btn && $btn.on('click', function (e) {
         e.preventDefault();

         const $el = $(this).attr('href');
         const $headerHeight = $header.height();

         $scrolledElements.animate({ scrollTop: $($el).offset().top - $headerHeight }, 1300);

         return false;
      });
   }

   /**
    * Initialize common scripts.
    */
   init() {
      objectFitImages()
      PageResize.init()

      this.scrollToSection()
   }
}

/** Export initialized common scripts by default */
export default new Common()
