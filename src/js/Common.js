import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import { $scrolledElements, $body, Resp, detectIE } from './_helpers';

// import '@fancyapps/fancybox';

import './components/Header';
import './components/Popups';
import './components/Sliders';
import './components/CustomScroll';
import './components/VideoBlock';
import './sections/Services';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.screenScroll();
    this.expandText();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }

  screenScroll() {
    const $btn = $('.screen__descr-btn');

    $btn.on('click', function () {
      const offsetTop = Resp.isDesk ? 70 : 60;
      $scrolledElements.animate({
        scrollTop: $('#pass').offset().top - offsetTop
      }, 2000);
      return false;
    });
  }

  expandText() {
    const $btn = $('.js-expand-btn');

    $btn.each(function (i, $btn) {
      $($btn).on('click', (e) => {
        const $this = $(e.currentTarget);
        $this.parent().prev().slideDown();
        $this.parent().addClass('hidden');
      });
    });
  }
}

export default new Common();
