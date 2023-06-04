import { PowderMedia } from "@/model/powder-media.model";
import { FunctionComponent, memo } from "react";
import Image from 'next/image';
import styles from './pwd-media-card.module.scss'
import moment from "moment";
import Link from "next/link";
import { ImageUtil } from "@/utils/image.util";

export interface PowderMediaCardProps {
  media: PowderMedia
}

const PwdMediaCard: FunctionComponent<PowderMediaCardProps> = ( { media } ) => {
  return <div className={ styles.pwdMediaCard__container }>
    <div className={ styles.pwdMediaCard__imgContainer }>
      <Image
        src={ media.image }
        alt={ media.category }
        blurDataURL={ ImageUtil.rgbDataURL( 31, 32, 36 ) }
         placeholder="blur"
        loading="lazy"
        sizes={ '300px' }
        fill={ true }
      />
      <span className={ styles.pwdMediaCard__duration }>6:02:31</span>
      <Link href={`/video?url=${media.video}`} className={styles.pwdMediaCard__link} aria-label="Got to the video"/>
    </div>
    <time className={ styles.pwdMediaCard__time }>{ moment( media.createdAt ).fromNow() }</time>
  </div>
}

export default memo(PwdMediaCard);