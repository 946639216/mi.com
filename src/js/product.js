import './library/jquery.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        // console.log(res);
        let picture = JSON.parse(res.picture);
        // console.log(${picture}[1].src);
        // console.log(picture);
        let temp = `<img src="../${picture[0].src}">`;
        $('.bg-img').append(temp);
    }

})