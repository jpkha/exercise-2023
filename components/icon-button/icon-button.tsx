import { FunctionComponent, ReactNode } from "react";
import styles from './icon-button.module.scss'

interface IconButtonProps {
  children: ReactNode;
  label: string;
}
export const IconButton: FunctionComponent<IconButtonProps> = ( { label, children } ) => {
  return <button className={styles.iconButton__container} aria-label={label}>
    { children }
  </button>

}