<?php
/**
 * Header template
 *
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		<?php wp_head(); ?>
        <?php if(defined('404_PAGE_INIT')) { ?>
            <title>Page not found | <?= get_bloginfo('name') ?></title>
        <?php } else { ?>
            <title><?php wp_title( '|', true, 'right' ); ?></title>
        <?php } ?>
		<link rel="stylesheet" href="<?= get_template_directory_uri().'/dist/main.css'?>" type="text/css" />
	</head>
    <body <?php body_class(); ?>>
	
		<header id="page-header">
			this is the header.
		</header>
            