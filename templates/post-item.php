<?php
/**
 * Template for: load more post item
 */
?>
<div class="post-item post-<?=the_ID()?>">  
    <?php $test_image = get_field('test_image');
    if ($test_image) { ?>
    <aside>
        <a href="<?=the_permalink()?>">
        <?=wp_get_attachment_image($test_image['id'], 'medium')?>
        </a>
    </aside>
    <?php } ?>
    <article>
        <?php $terms = get_the_terms( get_the_ID(), 'category' );
            foreach($terms as $term){ ?>
        <span><a href="<?=get_site_url().'/category/'.$term->slug?>"><?=$term->name?></a></span>
        <?php }?>
        <h3><a href="<?=the_permalink()?>"><?=the_title()?></a></h3>
        <div class="text-content">
            <?=the_content()?>
        </div>
    </article>
</div>