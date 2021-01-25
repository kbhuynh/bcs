import styles from './latest.module.scss'

export default function Latest() {
    return(
        <div className={styles.container}>
            <div className={styles.chapters}>
                <h2>Latest</h2>
                <a className={styles.chapter} href="">
                    <img src="/kanokari.jpg"/>
                    <div className={styles.info}>
                        <p className={styles.title}>Kanojo, Okarishimasu</p>
                        <p className={styles.time}>5h</p>
                    </div>
                    <p className={styles.chnum}>Chapter 172</p>
                </a>
                <a className={styles.chapter} href="">
                    <img src="/tawawa.jpg"/>
                    <div className={styles.info}>
                        <p className={styles.title}>Getsuyoubi no Tawawa</p>
                        <p className={styles.time}>1d</p>
                    </div>
                    <p className={styles.chnum}>Chapter 7</p>
                </a>
                <a className={styles.chapter} href="">
                    <img src="/prefect.jpg"/>
                    <div className={styles.info}>
                        <p className={styles.title}>The Story Between a Dumb Prefect and a High School Girl with an Inappropriate Skirt Length</p>
                        <p className={styles.time}>1d</p>
                    </div>
                    <p className={styles.chnum}>Vol. 5 Chapter 25</p>
                </a>
                <a className={styles.chapter} href="">
                    <img src="/cuckoo.jpg"/>   
                    <div className={styles.info}>
                        <p className={styles.title}>A Couple of Cuckoos</p>
                        <p className={styles.time}>5h</p>
                    </div>
                    <p className={styles.chnum}>Chapter 47</p>

                </a>
            </div>
        </div>
    )
}