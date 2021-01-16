import './library/jquery.js';
import { cookie } from './library/cookie.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        // console.log(response);
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            temp += `<li class="item">
            <a href="./shopcar.html?id=${elm.id}">
                <div class="p-pic">
                    <img src="../${picture[0].src}" alt="">
                </div>
                <p class="p-title">
                ${elm.title}
                </p>
                <p class="p-price">
                ${elm.price}
                    <span>元</span>
                </p>
                <p id="opinion"><span style="color: #757575;">6528人好评</span>
                    <a href="" class="btn">加入购物车</a>
                </p>
            </a>
        </li>`
        });
        $('.list').append(temp);
        $('body').find('.btn').on('click', function() {
            alert(1);
            // var id = this.id;
            // console.log(id);
            addItem(elm.id, elm.price, picture[0].src);
        });
    }
});

function addItem(id, price, src) {
    console.log(id, price, src);
    // console.log(cookie);
    // let product = {
    //     id,
    //     price
    // };
    // console.log(product);
    // cookie.set('shop',JSON.stringify(product))
}