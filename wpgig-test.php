<?php
/**
 * Plugin Name:       Wpgig Test
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpgig-test
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wpgig_test_wpgig_test_block_init() {
	register_block_type( __DIR__ . '/build' );

	add_action('admin_enqueue_scripts', 'wpgig_block_script');
}
add_action( 'init', 'wpgig_test_wpgig_test_block_init' );


function wpgig_block_script(){
	$handle = 'create-block-wpgig-test-editor-script';
	

	$data = get_transient('wpgig-block');
	if(!$data){
		$response = wp_remote_get('https://jsonplaceholder.typicode.com/users');
		$datajson = wp_remote_retrieve_body($response);
		$data = json_decode($datajson);
	
		set_transient('wpgig-block', $data, 24*60*60);
	}


	wp_localize_script($handle, 'wpgigBlockData', $data);
}