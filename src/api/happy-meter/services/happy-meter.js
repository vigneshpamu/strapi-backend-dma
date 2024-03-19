'use strict';

/**
 * happy-meter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::happy-meter.happy-meter');
