<?php
/**
 * Footer template
 *
 */
?>

        <footer id="page-footer">
            this is the footer.
        </footer>
    </div> <!-- page main wrapper -->
    <div class="non_visual_wrapper" style="display:none">
        <?php wp_footer(); ?>
        <script type="text/javascript" src="<?= get_template_directory_uri().'/dist/bundle.js' ?>"></script>
    </div>
    
</body>
</html>