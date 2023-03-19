<?php

function init() {
  wp_enqueue_script('php', get_theme_file_uri('/build/pages.assets.php'));
  wp_enqueue_script('js', get_theme_file_uri('/build/pages.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('css', get_theme_file_uri('/build/pages.css'));
}

add_action('wp_enqueue_scripts', 'init');