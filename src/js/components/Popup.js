import Popup from 'vintage-popup';

class Popups {
  constructor() {
    this.$popup = $('[data-popup-target]');

    this.init();
  }

  init() {
    this.$popup.on('click tap', function (e) {
      e.preventDefault();
    });
   
    $('.js-modal-close').on('click tap', function (e) {
      e.preventDefault();
    });
   
    this.$popup.popup({
      closeOnEsc: false,
      closeBtnSelector: '.js-popup-close',
      lockScreenEl: 'body'
    });
  }
}

export default new Popups();

window.Modal = {
  reinit: function () {
    new Popups();
  },
  open: function (target) {
    let modalEl = $(`[data-popup-id="${target}"]`).data('popup');

    modalEl.open();
  },
  close: function (target) {
    let modalEl = $(`[data-popup-id="${target}"]`).data('popup');

    modalEl.close();
  }
};
