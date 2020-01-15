import { css } from '../modules/dev/_helpers'

class Form {
   constructor() {
      this.$form = $('.form')

      this.$input = this.$form.find('.form-control')
      this.$clearInputGroup = $('.js-form-group-clear')

      if (this.$form.length) this.init()
   }

   init() {
      this.checkFill()
      this.removeError()
      this.initClearInputField()
   }

   checkFill() {
      this.$input.each(function() {
         checkInput($(this))
      })
      this.$input.blur(function() {
         checkInput($(this))
      })

      function checkInput(el) {
         if (el.val() !== '') {
            el.addClass(css.fill)
         } else {
            el.removeClass(css.fill)
         }
      }
   }

   removeError() {
      this.$input.on('click focus', ev => {
         $(ev.currentTarget)
            .parent()
            .removeClass(css.error)
      })
   }

   initClearInputField() {
      this.$clearInputGroup.each((i, group) => {
         const $group = $(group)
         const $btn = $group.find('.js-form-group-clear-btn')
         const $input = $group.find('.form-control')

         function checkInput($elInput) {
            $elInput.val()
               ? $group.addClass('has-value')
               : $group.removeClass('has-value')
         }

         checkInput($input)

         $input.on('input', () => checkInput($input))

         $btn.on('click', () => {
            $input.val('').focus()
            $group.removeClass('has-value')
         })
      })
   }
}

export default new Form()
