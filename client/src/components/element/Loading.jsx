import styles from '../style/Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading_clc}></div>
            <p className={styles.loading_txt}>Loading <span className={styles.loading_dot}>. . .</span></p>
        </div>
    )
}
    
export default Loading;