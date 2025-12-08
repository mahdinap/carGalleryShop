import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}){
    return(
        <>
            <header className={styles.header}>
                <Link href="/">
                <h2 className={styles.header.h2}>Car Gallery</h2>
                <p className={styles.header.p}>Choose Your Car</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div> 
            <footer className={styles.footer}>
                <h3><a className={styles.footer.a} href="https://nextjs.org/" target="_blank">Next.js 12</a> course | Desember 2025 &copy;</h3>
            </footer>
        </>
    )
}
export default Layout;