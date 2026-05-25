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
                    <p>Build fast, modern websites using latest technologies. Responsive design for all devices.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Mobile Apps</h3>
                    <p>Create powerful mobile applications. iOS and Android support with seamless user experience.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Data Analytics</h3>
                    <p>Transform data into insights. Analytics dashboards and reports for better decision making.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Maintenance & Support</h3>
                    <p>24/7 support for your applications. Regular updates and security patches included.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>UI/UX Design</h3>
                    <p>Beautiful and user-friendly interfaces. Design that converts visitors into customers.</p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Cloud Solutions</h3>
                    <p>Scalable cloud infrastructure. Secure, reliable hosting with automatic backups.</p>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>&copy; 2026 Asmit Services. All rights reserved.</p>
            </footer>

            <button className={styles.button} onClick={() => window.location.href = '/services2'}>
                Go to 2nd service page
            </button>
        </div>
    )
}