import React from "react";

function Footer(props) {
    return (
        <div>
            <a className="btn btn-danger btn-md" onClick={() => props.deleteAllProduct()}>&nbsp;Xóa tất cả</a>
                    <a href="checkout.html" class="btn btn-primary btn-md"><i
                        className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Thanh toán</a>
        </div>
    )
}

export default Footer;