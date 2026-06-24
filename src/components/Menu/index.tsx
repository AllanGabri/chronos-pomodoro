
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';


export function Menu()
 {
    return <nav className={styles.menu}>
        <a className={styles.menuLink} href='#' >
            <HouseIcon />
            <span>Chronos</span>
        </a>
        <a className={styles.menuLink} href='#' >
            <HistoryIcon />
            <span>Chronos</span>
        </a>
        <a className={styles.menuLink} href='#' >
            <SettingsIcon />
            <span>Chronos</span>
        </a>
        <a className={styles.menuLink} href='#' >
            <SunIcon />
            <span>Chronos</span>
        </a>
    </nav>
    
}
