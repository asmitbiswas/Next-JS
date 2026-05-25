'use client'
import styles from "./page.module.css"

export default function App() {
    return (
        <div className={styles.container}>
            
            <h1 className={styles.h1}>Our Services</h1>
            <p className={styles.subtitle}>Professional solutions for your business needs</p>

            <div className={styles.services}>
                
                <div className={styles.serviceCard}>
                    <h3>Web Development</h3>
                    <p>We build fast and modern websites. Your website will look great on all devices.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Mobile Apps</h3>
                    <p>We create apps for iPhones and Android phones. Your app will work smoothly and fast.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Data Analytics</h3>
                    <p>We analyze your business data. You will understand your customers better and make smart decisions.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Maintenance & Support</h3>
                    <p>We help your app 24/7. We fix bugs and keep everything secure and working well.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>UI/UX Design</h3>
                    <p>We design beautiful interfaces. Your customers will love using your app and will come back again.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Cloud Solutions</h3>
                    <p>We host your app in the cloud. Your app will be fast, safe and can handle millions of users.</p>
                </div>

            </div>

            <button className={styles.button} onClick={() => window.location.href = '/services2'}>
                Go to Next Page
            </button>

            <footer className={styles.footer}>
                <p>Copyright 2026 Asmit Services. All rights reserved.</p>
            </footer>

        </div>
    )
}