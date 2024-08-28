'use strict';

/**
 * user-cv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-cv.user-cv');
