/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 *
 * @flow
 */

require('./polyfillEnvironment');

/**
 * Apply React patches in development by importing `haul/hot/patch`.
 */
require('react-hot-loader/patch').default.disableProxyCreation = true;
