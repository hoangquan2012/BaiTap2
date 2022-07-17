import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from 'react-icons/fa';
import './Header.css'

function Header(props) {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#"><img src='img/pngaaa.com-324053.png' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Các dòng xe" className='text-white'>
                            {props.carlist}
                        </NavDropdown>
                        <NavDropdown title="Mua trực tiếp">
                            <NavDropdown.Item>Xe mới</NavDropdown.Item>
                            <NavDropdown.Item>
                                Xe đã qua sử dụng
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Phụ kiện xe chính hãng
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dịch vụ">
                            <NavDropdown.Item>Phụ tùng & dầu chính hãng</NavDropdown.Item>
                            <NavDropdown.Item>
                                Dịch vụ & bảo dưỡng
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Bảo hành & Bảo hiểm
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tư vấn">
                            <NavDropdown.Item>Chọn cấu hình xe</NavDropdown.Item>
                            <NavDropdown.Item>
                                Đăng ký lái thử 
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Bảng giá xe
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm dòng xe..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light"><FaSearch /></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;