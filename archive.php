<?php 
/* Template Name: Default Archive Template
 * Template Post Type: page
 */
/**
 * Archive template
 */
    get_header(); ?>

    <main id="page">
            <div class="posts-list" data-page="<?=get_query_var('paged') ? get_query_var('paged') : 1?>" data-max="<?=$wp_query->max_num_pages?>">
                <?php if (have_posts()) { 
                    while(have_posts()) { the_post();
                        get_template_part('templates/post-item');
                     } 
                 } ?>
            </div>
    </main>

    <?php get_footer(); ?>