import styles from '../styles/main.module.css'
import { useEffect, useState } from 'react'
import Loading from '../components/element/Loading'
import img1 from "../assets/imgs/dev.png";
import img2 from "../assets/imgs/ui.png";
import img3 from "../assets/imgs/mining.png";
import img4 from "../assets/imgs/next.png";

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
                    <div className={`${styles.btn_group}`}>
                        <button className={styles.btn}>Know Me More</button>
                        <button className={`${styles.btn} ${styles.btn_white}`}>Download CV</button>
                    </div>
                </div>
                <div className={styles.circle}>
                    
                </div>
            </section>
            <section className={`${styles.section} ${styles.skill}`}>
                <div className={styles.box}>
                    <p className={`${styles.txt} ${styles.big_txt}`}>What Have <span className={`${styles.bold_txt} ${styles.green_txt}`}>I Learn</span></p>
                    <p className={`${styles.txt} ${styles.small_txt}`}>Know mw more, about what I have</p>
                </div>
                <div className={styles.card_layout}>
                    <div id='skill1' className={styles.card}>
                        <img src={img1} alt="" />
                        <p className={`${styles.txt} ${styles.small_txt} ${styles.bold_txt}`}>Web Development</p>
                        <button className={`${styles.btn}`}>Check</button>
                    </div>
                    <div id='skill2' className={styles.card}>
                        <img src={img2} alt="" />
                        <p className={`${styles.txt} ${styles.small_txt} ${styles.bold_txt}`}>User Interface</p>
                        <button className={styles.btn}>Check</button>
                    </div>
                    <div id='skill3' className={styles.card}>
                        <img src={img3} alt="" />
                        <p className={`${styles.txt} ${styles.small_txt} ${styles.bold_txt}`}>Data Mining</p>
                        <button className={styles.btn}>Check</button>
                    </div>
                    <div id='skill0' className={styles.card}>
                        <img src={img4} alt="" />
                        <p className={`${styles.txt} ${styles.small_txt} ${styles.bold_txt}`}></p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.project_card}>

                    </div>
                    <div className={styles.project_desc}>
                        <p className={`${styles.txt} ${styles.normal_txt} ${styles.bold_txt} ${styles.green_txt}`}>This Is Title</p>
                        <p className={`${styles.txt} ${styles.small_txt}`}>This lis text</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;