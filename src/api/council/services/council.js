'use strict';

/**
 * council service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::council.council');
