/*
 |--------------------------------------------------------------------------
 | Functionality related to project base directory
 |--------------------------------------------------------------------------
 | !!! THIS FILE IS LOCATION RESTRICTED, DON'T MOVE IT !!!
 */

const { resolve } = require('path')
const { stat } = require('fs-extra')

/**
 * App base path
 * @param segments
 *
 * @example Get app base dir
 */
function dir_root(...segments) {
	return resolve(__dirname, ...segments)
}

/**
 * Get env variable
 *
 * This function will make sure env is loaded
 * @param key
 */
function env(key) {
	load_env_once()
	return process.env[key]
}

function load_env_once(path) {
	if (process.env.____ENV_LOADED == '1') {return}

	reload_env(path)
}

function reload_env(path) {
	path = path || dir_root('.env')
	stat(path, e => {
		if (e) {
			console.warn(`.env file not found: ${path}`)
		}
	})
	require('dotenv').config({ path })
	process.env.____ENV_LOADED = '1'
}

module.exports = { dir_root, load_env_once, reload_env, env }
