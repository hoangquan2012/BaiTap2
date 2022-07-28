
import styles from './Body.module.css'
function Body(props) {
    return (
        <>
            <div  className={styles.background}>
                <img src="img/maybachfullhd.jpg"  className={styles.img}/>
            </div>
        </>
    );
}

export default Body;