import './library/jquery.js';  
import  'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js';
import  'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        // console.log(response);
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            temp += `<li class="mb shadow item">
            <a href="./product.html?id=${elm.id}">
                <div class="p-pic">
                    <img data-original="../${picture[0].src}" alt="" class="lazy">
                </div>
                <h4 class="p-title">
                    ${elm.title}
                </h4>
                <p class="p-title">
                    ${elm.title}
                </p>
                <h2 class="p-price">
                    ${elm.price}
                <span>元起</span></h2>
            </a>
        </li>`
        });
        $('.list').append(temp);
        // $('body').find('#shoppingcar').on('click', function() {
        //     console.log(1);
        // });
    }
});
$(function()  {    
    $("img.lazy").lazyload({ effect:   "fadeIn" });
});