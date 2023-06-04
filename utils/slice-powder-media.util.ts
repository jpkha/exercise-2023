import { PowderMediaCategory } from "@/model/powder-media-category.model";

export namespace SlicePowderMediaUtil {
  export const slicePowderMedia = ( ( powderMedia: PowderMediaCategory, nbDisplayItem: number ): PowderMediaCategory => {
    return {
      ...powderMedia,
      media: [ ...powderMedia.media.slice( 0, nbDisplayItem ) ]
    }
  } )

  export const getSpecificNbPowderMediaByCategory = ( powderMedia: PowderMediaCategory[], nbDisplayItem: number ): PowderMediaCategory[] => {
    return powderMedia.map( ( powderMedia ) => slicePowderMedia( powderMedia, nbDisplayItem ) );
  }
}


