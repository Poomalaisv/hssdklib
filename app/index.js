// @flow

import * as HsModules from "./modules";

/**
 * Gives the referance to the object.
 * @package
 *
 */
(function (root = window) {
  module.exports = {
    ...HsModules
  };
})(this);
