import { FunctionComponent } from "react";
import styles from './pwd-tag.module.scss'
export interface PwdTagProps {
  label: string
}
export const PwdTag: FunctionComponent<PwdTagProps> = ({label}) => {
  return <span className={styles.pwdTag}>
    {label}
  </span>
}