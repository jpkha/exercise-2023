"use client"
import { useSearchParams } from "next/navigation";
import Plyr, { PlyrSource } from "plyr-react"
import "plyr-react/plyr.css"
import styles from './video-page.module.scss'

export default function Page( ) {
  const searchParams = useSearchParams();

  const url = searchParams.get('url');
  const videoSrc: PlyrSource = {
    type: "video",
    sources: [
      { src: url ?? ''}
    ]

  };
  return <section className={styles.videoPage}>
    {url && <Plyr options={{autoplay: true}} source={videoSrc} />}
  </section>
}