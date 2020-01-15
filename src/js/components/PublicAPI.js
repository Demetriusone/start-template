import Prices from '../sections/Prices'

/**
 * Website's public API (example).
 * Make some functions and methods accessible in global scope.
 *
 * @module PublicAPI
 */

export class PublicAPI {
   static showPricesPromoSuccess(evt) {
      Prices.showPromoSuccess(evt)
   }
}

/** Expose Public API */
export default window.PublicAPI = PublicAPI
