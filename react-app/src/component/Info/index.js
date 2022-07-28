import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Info.module.css'
import Slider from "react-slick";
import styles from './Info.module.css'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Info(props) {
    let settings = {
        dots: true,
    };
    const cards1 =
        [
            {
                index: 0,
                headline: 'Nhận báo giá xe tại đại lý',
                describe: 'Tìm xe có sẵn tại đại lý và nhận báo giá',
                src: 'img/card/1.png',
                btn: 'Tìm xe có sẵn'
            },
            {
                index: 1,
                headline: 'Mercedes-Maybach GLS',
                describe: 'Định nghĩa mới của sự xa xỉ và đẳng cấp',
                src: 'img/card/2.png',
                btn: 'Công cụ cấu hình xe'
            },
            {
                index: 2,
                headline: 'Dòng xe Mercedes-AMG',
                describe: 'Các mẫu xe thể thao hiệu suất cao Mercedes-AMG.',
                src: 'img/card/3.png',
                btn: 'Tìm hiểu thêm'
            }
        ]
    const cards2 =
        [
            {
                index: 3,
                headline: 'Xe đã qua sử dụng',
                describe: 'An tâm với Mercedes-Benz Certified.',
                src: 'img/card/4.png',
                btn: 'Tìm hiểu thêm'
            },
            {
                index: 4,
                headline: 'Đặt hẹn dịch vụ trực tuyến',
                describe: 'Đặt lịch hẹn dịch vụ trực tuyến một cách thuận tiện.',
                src: 'img/card/5.png',
                btn: 'Đặt lịch hẹn'
            }
        ]
    const cardlist1 = cards1.map(card => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.src} style={{ height: '214.5px' }} />
            <Card.Body>
                <Card.Title >{card.headline}</Card.Title>
                <Card.Text className='pb-4'>
                    {card.describe}
                </Card.Text>
                <Button variant="primary" style={{width: '100%',height: '50px',fontWeight:'500', marginBottom: '30px'}}>{card.btn}</Button>
            </Card.Body>
        </Card>
    ))
    const cardlist2 = cards2.map(card => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.src} style={{ height: '214.5px' }} />
            <Card.Body>
                <Card.Title >{card.headline}</Card.Title>
                <Card.Text className='pb-4'>
                    {card.describe}
                </Card.Text>
                <Button variant="primary" style={{width: '100%',height: '50px' ,fontWeight:'500', marginBottom: '30px'}}>{card.btn}</Button>
            </Card.Body>
        </Card>
    ))
    return (
        <div className="container pt-5 pb-5">
            <div className={styles.color}>Tìm hiểu thêm</div>
            <Slider {...settings}>
                <div className='d-flex justify-content-around'>
                    {cardlist1}
                </div>
                <div className='d-flex justify-content-around'>
                    {cardlist2}
                </div>
            </Slider>
        </div>
    );
}

export default Info;