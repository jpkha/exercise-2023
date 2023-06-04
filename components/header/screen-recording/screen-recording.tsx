import { PwdTag } from "@/components/pwd-tag/pwd-tag";
import styles from './screen-recording.module.scss'
import Screen from '@/assets/screen.svg'
import ArrowUp from '@/assets/arrow-up.svg'
export const ScreenRecording = () => {
  return <div className={styles.screenRecording__container}>
    <div className={styles.screenRecording__logoScreen}>
      <Screen/>
    </div>
    <section className={styles.screenRecording__section}>
      <h2 className={ styles.screenRecording__title }>Screen Recording<ArrowUp/> </h2>
      <div  className={styles.screenRecording__tagContainer}>
        <PwdTag label={ '1080p' }/>
        <PwdTag label={ '60 FPS' }/>
      </div>
    </section>
  </div>
}