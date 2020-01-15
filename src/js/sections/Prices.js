import 'slick-carousel';
import { css, Resp } from '../modules/dev/_helpers'

class Prices {
   constructor() {
      this.block = document.querySelector('.prices')

      if (!this.block) return

      this.$promoBtn = $('.js-promo-code-enter-btn')
      this.checkboxes = this.block.querySelectorAll('.checkbox__input')
      this.promoCodes = this.block.querySelectorAll('.prices__item-promo-code')
      this.$slider = $(this.block).find('.prices__inner')

      this.init()
   }

   init() {
      if (!Resp.isMobile) this.setVisibleCode()
      if (Resp.isMobiles) this.initSlider()
      this.bindEvents()
   }

   bindEvents() {
      this.$promoBtn.on('click', () => this.togglePromoFields())
   }

   setVisibleCode() {
      this.checkboxes.forEach((check, index) => {
         if (check.checked) this.promoCodes[index].classList.add(css.visible)

         check.addEventListener('change', () => {
            this.promoCodes.forEach(sibling =>
               sibling.classList.remove(css.visible)
            )
            this.promoCodes[index].classList.add(css.visible)
         })
      })
   }

   togglePromoFields() {
      if (Resp.isMobile) {
         this.$promoBtn
            .toggleClass(css.active)
            .next()
            .toggle()
            .promise()
            .done(() => {
               this.$slider.slick('setPosition')
            })
      } else {
         this.$promoBtn
            .toggleClass(css.active)
            .next()
            .slideToggle()
      }
   }

   showPromoSuccess(evt) {
      const $btn = $(evt.currentTarget)
      const $form = $btn.parent()

      $form
         .prev()
         .css('transition', 'none')
         .slideUp()
      $form.slideUp()
      $form.siblings('.promo-code__success').slideDown(() => {
         if (Resp.isMobile) this.$slider.slick('setPosition')
      })
   }

   initSlider() {
      this.$slider.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         speed: 800,
         cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
         useTransform: true,
         adaptiveHeight: true,
         accessibility: false,
         swipe: true,
         rows: 0,
         dots: true,
         infinite: false,
         dotsClass: 'slick-dots slick-dots_white',
         responsive: [
            {
               breakpoint: 1023,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
   }
}

export default new Prices()
