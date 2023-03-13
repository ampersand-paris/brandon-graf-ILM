'use strict';

/**
 * studio-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::studio-service.studio-service');
