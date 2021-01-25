import styles from './carousel.module.scss'

export default function Carousel() {
    return(
        <div className={styles.carousel}>
            <div className={styles.inner}>
                <div className={styles.text}>
                    <h2>Featured</h2>
                    <h1>Kanojo, Okarishimasu</h1>
                    <div className={styles.tags}>
                        <span>Romance</span>
                        <span>Comedy</span>
                        <span>Drama</span>
                    </div>
                    <p>Kinoshita Kazuya is a regular college student who was just dumped by his girlfriend for another guy. Feeling down in the dumps, he decides to use an app called Diamond to hire Mizuhara Chizuru, a rental girlfriend, to make himself feel better. From their first meeting, she seems to be the perfect girl for him, but is there more to her than meets the eye? And how will their not quite typical relationship develop?</p>
                    <div className={styles.info}>
                        <a href="">Check it out</a>
                        <span className={styles.latest}>Chapter 172</span>
                        <span className={styles.status}>• Ongoing</span>
                    </div> 
                </div>
                <img className={styles.cover} src="/kanokari.jpg"/>
            </div>
        </div>
    )
}