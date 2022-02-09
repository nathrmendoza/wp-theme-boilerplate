<?php

    if(!isset($_SESSION)){
        session_start();
    }
    define('DEV_ENV', 1);

    if(DEV_ENV === 1){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
    }

    function theme_scripts_and_styles () {
        //styles
        wp_enqueue_style('style', get_template_directory_uri() . '/dist/main.css');
        
        //scripts
        wp_enqueue_script('main', get_template_directory_uri() . '/dist/bundle.js', NULL, 1.0, true);

        //authentication
        wp_localize_script('main', 'siteData', array(
            //check nonce for posts
            "nonce" => wp_create_nonce('wp_rest'),
            "siteURL" => get_site_url(),
            "ajaxURL" => admin_url('admin-ajax.php')
        ));


    }
    add_action('wp_enqueue_scripts', 'theme_scripts_and_styles');

    /**
     * Load more posts func
     */
    add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');
    add_action('wp_ajax_load_more_posts', 'load_more_posts');
    function load_more_posts() {
        $next_page = $_POST['current_page'] + 1;
        $query =  new WP_Query([
            'posts_per_page' => 5,
            'paged' => $next_page
        ]);

        if ($query->have_posts()) {
            ob_start();
            while($query->have_posts()) {
                $query->the_post();
                get_template_part('templates/post-item');
            }
            wp_send_json_success(ob_get_clean());
        } else {
            wp_send_json_error('No posts!');
        }
    }

?>