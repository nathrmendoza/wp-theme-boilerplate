import {scCreateTxt, flCreateTxt, ipCreateTxt} from '../utils/requestProgress'
import {addHTML} from '../utils/addHtml'
/**
 * Ajax request to create new post
 * can only be accessed when logged in
 */
(function() {
    const createButton = document.querySelector('#create-post');

    if(createButton) {
        createButton.addEventListener('click', e => {
            e.preventDefault();

            const postData = {
                "title" : document.querySelector("input[name='title']").value,
                "content" : document.querySelector("textarea[name='content']").value,
                "status" : "publish"
            }

            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: `${siteData.siteURL}/wp-json/wp/v2/posts`,
                data: JSON.stringify(postData),
                headers: {
                    'X-WP-Nonce' : siteData.nonce,
                    'Content-Type' : 'application/json;charset=UTF-8'
                },  
                success: res => {
                    console.log('Success: ', res);
                },
                error: err => {
                    console.log(`Error:`, err);
                }

            })
        })
    }
})();