/* eslint-disable */

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require('path');

module.exports = {
	devtool: 'source-map',
	output: {
		// The name under which the editor will be exported.
		library: 'DecoupledEditor',
		path: path.resolve(__dirname, '../build'),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
};
