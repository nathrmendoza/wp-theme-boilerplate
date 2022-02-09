import {scReadTxt, flReadTxt, ipReadTxt} from './utils/requestProgress';
import { refreshHTML } from './utils/refreshHtml';

/**
 * Filter posts
 */
(function() {
    const $filters = $('#post-filters input[name="filter"]');
    let filterStr = '';
    let filterArr = [];

    if ($filters) {

        $filters.on('click', function() {
            if ($(this).is(':checked')) 
                filterArr.push($(this).val());
            else {
                filterArr = filterArr.filter(e => {
                    return e !== $(this).val()
                });
            }

            if (filterArr.length)
                filterStr = `&categories=${filterArr.toString()}`;
            else
                filterStr = '';
            
            doFilter(filterStr);
        })
    }
})();

/**
 * Do the filter
 */
const doFilter = (query) => {
    $.ajax({
        url: `${siteData.siteURL}/wp-json/wp/v2/posts?status=publish${query}`,
        type: 'GET',
        dataType: 'json',
        beforeSend: () => {
            ipReadTxt();
        },
        success: res => {
            refreshHTML(res);
            scReadTxt();
        },
        error: err => {
            flReadTxt(err);
        }
    })
}