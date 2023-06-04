import Gear from '@/assets/gear.svg';
import Record from '@/assets/record.svg';
import User from '@/assets/user.svg';
import { IconButton } from "@/components/icon-button/icon-button";
import styles from './header-action-side.module.scss'
import { PwdButton } from "@/components/pwd-button/pwd-button";
export const HeaderActionSide = () => {
  return <div className={styles.headerActionSide__container}>
    <IconButton label={'record'}><Record/></IconButton>
    <PwdButton>Start session</PwdButton>
    <IconButton label={'gear'}><Gear/></IconButton>
    <IconButton label={'user'}><User/></IconButton>
  </div>
}