import {postItemHTML} from '../components/post-item'
/**
 * Loads more post on button click
 */
(function() {
    const $btn = $('#lmore-btn');
    if($btn) {
        $btn.on('click', function() {
            var current_page = parseInt($('.posts-list').attr('data-page'));
            var max_page = parseInt($('.posts-list').attr('data-max'));
            
            //thru admin ajax
            const postData = {
                action: "load_more_posts",
                current_page: current_page,
                max_page: max_page
            }
            
            $.ajax({
                url: siteData.ajaxURL,
                type: 'POST',
                data: postData,
                success: res => {
                    $('.posts-list').append(res.data);
                    $('.posts-list').attr('data-page', current_page+1);
                    if ($('.posts-list').attr('data-page') == max_page) {
                        $btn.fadeOut(200);
                    }
                },
                error: err => {
                    console.log(`Error occured: ${err}`);
                }
            })

            //thru rest api
            // $.ajax({
            //     url: `${siteData.siteURL}/wp-json/wp/v2/posts?per_page=5&page=${current_page+1}`,
            //     type: 'GET',
            //     success: res => {
            //         console.log(res);
            //         res.forEach(e => {
            //             document.querySelector('.posts-list').innerHTML+=postItemHTML(e);
            //         })
            //         $('.posts-list').attr('data-page', current_page + 1);
            //         if ($('.posts-list').attr('data-page') == max_page)
            //             $btn.fadeOut(200);
            //     },
            //     error: err => {
            //         console.log(err);
            //     }
            // });
        })
    }
})();