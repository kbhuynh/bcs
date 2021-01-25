import styles from './sidebar.module.scss'

export default function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <div className={styles.icon}></div>
            <a href="">Read</a>
            <a href="">Following</a>
            <a href="">Groups</a>
            <a href="">About</a>
            <div className={styles.smaller}>
                <a href="">Account</a>
                <a href="">Join Us</a>
            </div>
        </aside>
    )
}