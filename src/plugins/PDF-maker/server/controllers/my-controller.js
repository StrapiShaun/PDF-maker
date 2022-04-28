'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('PDF-maker')
      .service('myService')
      .getWelcomeMessage();
  },
};
