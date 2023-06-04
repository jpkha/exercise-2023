import { PowderMediaDataUtils } from "@/utils/powder-media-data.util";
import { PowderMedia } from "@/model/powder-media.model";
import { CategorySection } from "@/components/category-section/category-section";
import MediaList from "@/components/media-list/media-list";
import styles from './category-page.module.scss';

interface Paths {
  category: string;
}

export async function generateStaticParams() {
  const data = await PowderMediaDataUtils.getPowderMediaAllCategories();
  return data.map( ( category ) => ( {
    paths: category
  } ) )
}

async function fetchData( { category }: Paths ): Promise<PowderMedia[]> {
  const data = await PowderMediaDataUtils.getPowderMediaCategory( category );
  return data;
}

export default async function Page( { params }: { params: Paths } ) {
  const data = await fetchData( params );
  return <section className={styles.categoryPage__section}>
    <CategorySection title={ params.category } seeAll={false} >
      <MediaList mediaList={ data }/>
    </CategorySection>;
  </section>
}