import React, { useState } from 'react';
import Main from './component/Main';
import Footer from './component/Footer';
import Header from './component/Header';


const App = () => {

    const products = [
        {
            id: "1",
            img: "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
            name: "Apple Ipad 4 Wifi 16GB",
            price: "11,800,000",
            order: "1"
        },
        {
            id: "2",
            img: "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
            name: "Nokia Asha 311",
            price: "2,699,000",
            order: "2"
        },
        {
            id: "3",
            img: "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
            name: "Apple iPhone 5 16GB White",
            price: "1,4990,000",
            order: "3"
        }
    ]
    const [productss, setProductss] = useState(products)
    function deleteProduct(id) {
        const deleteProducts = productss.filter(product => id !== product.id);
        setProductss(deleteProducts);
    }

    function deleteAllProduct() {
        setProductss(prevState => {});
    }

    const productList = productss.map(product =>
        <Main
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            amount={product.amount}
            order={product.order}
            deleteProduct={deleteProduct}
            key={product.id}
        />)
    return (

        <div>
            <Header />
            <main role="main">
                <div className="container mt-4">
                    <h1 className="text-center">Giỏ hàng</h1>
                    <div className="row">
                        <div className="col col-md-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ảnh đại diện</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                {productList}
                            </table>

                            <Footer />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default App;
