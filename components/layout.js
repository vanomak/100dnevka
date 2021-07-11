import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
// import {FirebaseBase} from "../lib/firebase"
// import {FirebaseAuth} from "../lib/firebase_auth"

const name = '[Your Name]'
export const siteTitle = '100dnevka'

function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="100 дней развития"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <div className={styles.title}>
                            <div className={styles.title__left}>THE TELO CONTROL</div>
                            <Image
                                layout="fixed"
                                priority
                                src="/images/logo.png"
                                // className={utilStyles.borderCircle}
                                width={60}
                                height={76}
                                alt={name}
                            />
                            <div className={styles.title__right}>100ДНЕВКА</div>
                        </div>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/logo.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
