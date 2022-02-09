import {scReadTxt, flReadTxt, ipReadTxt} from './utils/requestProgress'
import { refreshHTML } from './utils/refreshHtml';

/**
 * Ajax request to fetch posts on button click
 */
(function() {
    const $button = $("#load-posts");
    if ($button) {
        $button.on('click', e => {
            e.preventDefault();
            $.ajax({
                url: `${siteData.siteURL}/wp-json/wp/v2/posts?status=publish`,
                type: 'GET',
                dataType: 'json',
                beforeSend: () => {
                    console.log('in progress');
                    ipReadTxt();
                },
                error: err => {
                    console.log('fail');
                    flReadTxt(err);
                },
                success: res => {
                    console.log('success');
                    refreshHTML(res);
                    scReadTxt();
                }
            });

        })
    }
})();