

var giohang = new Array();
function themvaogiohang() {
    var btnItem = event.target;
    var product = btnItem.parentElement.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector(".price").innerText
    var productValue = product.querySelector("input").value
    console.log(productValue)
    var sp = new Array(productImg,productName,productPrice,productValue);
    giohang.push(sp);
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}
function showgiohang() {
    var cart = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(cart);
    var ttgh = "";
    for (let i = 0; i < giohang.length; i++) {
        ttgh += '<tr>' +
            '<td style="display: flex;align-items: center;"><img style="width: 70px"' +
            'src="'+giohang[i][0]+'" alt="">'+giohang[i][1]+'</td>' +
            '<td>' +
            '<p><span>'+giohang[i][2]+'</span><sup>đ</sup></p>' +
            '</td>' +
            '<td><input style="width: 30px; outline:none;" type="number" value="'+giohang[i][3]+'" name="quantity" min="1" max="5"></td>' +
            '<td style="cursor: pointer;">Xóa</td>' +
            '</tr>';
        document.getElementById("mycart").innerHTML = ttgh;
    }
}

