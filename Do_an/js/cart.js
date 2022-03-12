

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
    var tong= 0;
    for (let i = 0; i < giohang.length; i++) {
        var tt = giohang[i][2] * giohang[i][3];
        tong += tt;
        ttgh += '<tr>' +
            '<td style="display: flex;align-items: center;"><img style="width: 70px"' +
            'src="'+giohang[i][0]+'" alt="">'+giohang[i][1]+'</td>' +
            '<td>' +
            '<p><span>'+giohang[i][2]+'</span><sup>đ</sup></p>' +
            '</td>' +
            '<td><input style="width: 30px; outline:none;" type="number" value="'+giohang[i][3]+'" name="quantity" min="1" max="5"></td>' +
            '<td style="cursor: pointer;" onclick="xoasp()">Xóa</td>' +
            '</tr>';
            document.getElementById("mycart").innerHTML = ttgh;
    }
    ttgh +=  '<h3>Tóm lược</h3>'+
    '<div class="" style="display: flex; justify-content: space-between;">'+
        '<p>Sản phẩm</p>'+
        '<span>'+tong+'</span>'+
    '</div>'+
    '<div class="" style="display: flex; justify-content: space-between;">'+
        '<p>Phí ship</p>'+
        '<span>0đ</span>'+
    '</div>'+
    '<div class="" style="display: flex; justify-content: space-between;">'+
        '<p>Thuế</p>'+
        '<span>0đ</span>'+
    '</div>'+
    '<p style="text-align: left;text-decoration: underline;cursor: pointer;">Nhập mã khuyến mãi</p>'+
    '<div class="" style="display: flex; justify-content: space-between;">'+
        '<p style="font-weight: bold;">Tổng tiền</p>'+
        '<span style="font-weight: bold;">'+tong+'</span>'+
    '</div>'+
    '<p style="text-align: left;">* Phí lắp đặt sẽ được áp dụng tại thời điểm lắp đặt.</p>'+
    '<p style="text-align: left;">Lưu ý: Ở đây cộng đồng của bạn là cộng đồng của chúng tôi và chúng tôi cam kết giữ an'+
        'toàn cho mọi người và hỗ trợ bạn bằng mọi cách có thể. Mặc dù trung tâm BMW tại địa phương của bạn cam'+
        'kết hoàn thành đơn đặt hàng của bạn nhanh nhất có thể, nhưng thời gian vận chuyển có thể lâu hơn bình'+
        'thường.</p>'+
    '<div class="buy-now">Mua ngay</div>'+
    '<p style="font-weight: bold;text-align: left; padding-top: 20px;">Cần giúp đỡ ?</p>'+
    '<p style="text-align: left;">Liên hệ với chúng tôi</p>';
    

}

function xoasp(){
    var x=event.target;
    var tr=x.parentElement;
    tr.remove();
}