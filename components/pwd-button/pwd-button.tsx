import { FunctionComponent, ReactNode } from "react";
import styles from './pwd-button.module.scss';

interface PwdButtonProps {
  children: ReactNode
}
export const PwdButton: FunctionComponent<PwdButtonProps> = ({children}) => {
  return <div className={styles.pwdButton__container}>
    <button className={styles.pwdButton__button}>
    {children}
  </button>
  </div>
}