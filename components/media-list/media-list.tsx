import  PwdMediaCard from "@/components/pwd-media-card/pwd-media-card";
import styles from './media-list.module.scss'
import { PowderMedia } from "@/model/powder-media.model";
import { FunctionComponent, memo } from "react";

interface MediaListProps  {
  mediaList: PowderMedia[];
}
const MediaList: FunctionComponent<MediaListProps> = ( { mediaList }) => {
  return <ul className={styles.mediaList__container}>
    {mediaList.map((media: PowderMedia) => <li key={media.id}>
       <PwdMediaCard media={media}/>
    </li>)}
  </ul>
};

export default memo(MediaList);