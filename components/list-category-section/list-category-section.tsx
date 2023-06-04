"use client"
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CategorySection } from "@/components/category-section/category-section";
import { PowderMediaCategory } from "@/model/powder-media-category.model";
import MediaList from '@/components/media-list/media-list'
import { SlicePowderMediaUtil } from "@/utils/slice-powder-media.util";
import { TABLET_SIZE, XL_DESKTOP_SCREEN_SIZE } from "@/styles/screen.const";
import { throttle } from "@/utils/throttle.util";

interface ListCategorySectionProps {
  powderMediaCategory: PowderMediaCategory[];
}

export const ListCategorySection: FunctionComponent<ListCategorySectionProps> = ( { powderMediaCategory } ) => {
  const [ mediaCategory, setMediaCategory ] = useState( powderMediaCategory );
  const [ displayView, setDisplayView] = useState(false)

  const handleResize = () => {
    let calculateNbItem;
    const windowWidth = window.innerWidth;
    if(windowWidth > XL_DESKTOP_SCREEN_SIZE) {
      calculateNbItem = 5
    } else if ( windowWidth > TABLET_SIZE) {
      calculateNbItem = 4
    } else {
      calculateNbItem = 3
    }
    setMediaCategory(
      [ ...SlicePowderMediaUtil.getSpecificNbPowderMediaByCategory(powderMediaCategory, calculateNbItem) ]
    )
    setDisplayView(true);
  };

  useEffect( () => {
      const debouncedHandleResize = throttle( handleResize, 260 );
      handleResize();
      window.addEventListener( 'resize', debouncedHandleResize );
      return () => {
        window.removeEventListener( 'resize', debouncedHandleResize );
      }
    }, []
  );


  return <>{ displayView && mediaCategory.map( ( { category, media } ) =>
    <CategorySection key={ category } title={ category }>
      <MediaList mediaList={ media }/>
    </CategorySection>
  ) }
  </>
}