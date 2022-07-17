
import styles from './Body.module.css'
function Body(props) {
    return (
        <>
            <div  className={styles.background}>
                <img src="img/Background.png"  className={styles.img}/>
            </div>
        </>
    );
}

export default Body;