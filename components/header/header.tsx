import styles from './header.module.scss';
import Powder from '@/assets/powder.svg'
import { ScreenRecording } from "@/components/header/screen-recording/screen-recording";
import { HeaderActionSide } from "@/components/header/header-action-side/header-action-side";
import Link from "next/link";

export const Header = () => {
  return <header className={styles.header__container}>
    <div className={styles.header__logoContainer}>
      <Link  href="/" aria-label="Back to home">
        <Powder className={ styles.header__logo }/>
      </Link>
    </div>
    <div className={ styles.header__mainContainer }>
      <ScreenRecording/>
      <HeaderActionSide/>
    </div>
  </header>
}