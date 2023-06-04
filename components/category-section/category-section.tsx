import { FunctionComponent, ReactNode } from "react";
import styles from './category-section.module.scss';
import Link from "next/link";

interface CategorySectionProps {
  title: string;
  seeAll?: boolean;
  children: ReactNode;
}
export const CategorySection: FunctionComponent<CategorySectionProps> = ( { title, seeAll = true, children} ) => {
  return <section>
    <div className={styles.categorySection__container}>
      <h2 className={styles.categorySection__title}>{title}</h2>
      {  seeAll &&
        <Link className={styles.categorySection__link} href={`/category/${title}`}> See All</Link>
      }
    </div>
      {children}
  </section>
}