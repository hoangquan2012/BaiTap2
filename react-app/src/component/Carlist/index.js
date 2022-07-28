import { useState } from 'react'
import './Carlist.module.css'
import Button from 'react-bootstrap/Button';
import styles from './Carlist.module.css'
function Carlist(props) {
    const [active, setActive] = useState('active')
    return (
        <div class="btn-group">
            <Button href="#" class='btn btn-light active' aria-current="page">Active link</Button>
            <Button href="#" class="btn btn-light">Link</Button>
            <Button href="#" class="btn btn-light">Link</Button>
        </div>
    );
}

export default Carlist;