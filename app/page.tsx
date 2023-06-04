import { PowderMediaDataUtils } from "@/utils/powder-media-data.util";
import { PowderMediaCategory } from "@/model/powder-media-category.model";
import styles from "./page.module.scss";
import { ListCategorySection } from "@/components/list-category-section/list-category-section";

async function fetchData(): Promise<{ data: PowderMediaCategory[] }> {
  const data = await PowderMediaDataUtils.getPowderMediaByCategory();
  return {
    data
  };
}

export default async function Home() {
  const { data } = await fetchData();
  return (
    <main className={styles.home__mainContainer}>
      <ListCategorySection powderMediaCategory={data}/>
    </main>
  )
}
