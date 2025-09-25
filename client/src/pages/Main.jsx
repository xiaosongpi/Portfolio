import styles from '../styles/main.module.css'
import { useEffect, useState } from 'react'
import Loading from '../components/element/Loading'

const Main = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

        }, )
    })

    if (loading) {
        <Loading />
    }

    return (
        <>
            <na className={styles.nav}>
                <ul className={styles.nav_group}>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </na>
            <section className={`${styles.section} ${styles.hero}`}>
                <div className={styles.txt_group}>
                    <p className={`${styles.txt} ${styles.normal_txt} ${styles.gray_txt}`}>I'am programmer</p>
                    <p className={`${styles.txt} ${styles.big_txt}`}>Hello, I'am <span className={`${styles.bold_txt} ${styles.green_txt}`}>Zhomphilies</span></p>
                    <p className={`${styles.txt} ${styles.small_txt}`}>I am a fifth-semester Information Technology student with an interest in programming and system development.</p>
                    <button className={styles.button}>Know Me More</button>
                </div>
                <div className={styles.circle}>
                    
                </div>
            </section>
            <section className={`${styles.section} ${styles.skill}`}>
                <div className={styles.box}>
                    <p className={`${styles.txt} ${styles.big_txt}`}>What <span className={` ${styles.bold_txt} ${styles.green_txt}`}>I</span> Have</p>
                    <p className={`${styles.txt} ${styles.small_txt}`}>Know mw more, about what I have</p>
                </div>
            </section>
        </>
    )
}

export default Main;