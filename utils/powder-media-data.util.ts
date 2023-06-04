import { PowderMedia } from "@/model/powder-media.model";
import path from "path";
import fs from "fs";
import { PowderMediaCategory } from "@/model/powder-media-category.model";

export namespace PowderMediaDataUtils {
  export let getPowderMediaData = async (): Promise<PowderMedia[]> => {
    const jsonDirectory = path.join( process.cwd(), 'data' );
    const fileContents = await fs.readFileSync( jsonDirectory + '/data.json', 'utf-8' );
    return JSON.parse( fileContents )
      .map((powderMedia: Omit<PowderMedia, "id">, index: number) => ({id: index,...powderMedia}))
      .sort((a:PowderMedia, b:PowderMedia) => b.createdAt.valueOf() - a.createdAt.valueOf());
  }

  export const getPowderMediaCategory = async (mediaCategory: string): Promise<PowderMedia[]> => {
    const data = await getPowderMediaData();
    return data.filter(({category}) => {
      return category === mediaCategory
    })
  }

  export const getPowderMediaAllCategories = async (): Promise<string[]> => {
    const data = await getPowderMediaData();
    const categories = data.map( ( { category } ) => category );
    return categories.filter((value, index, array) => array.indexOf(value) === index);
  }

  export const getPowderMediaByCategory = async (): Promise<PowderMediaCategory[]> => {
    const data = await getPowderMediaData();
    const categories = await getPowderMediaAllCategories();
    const mediaByCategory: PowderMediaCategory[] = [];
    categories.forEach(( category) => mediaByCategory.push({
      category,
      media: data.filter((media) => category === media.category).slice(0,5)
    }))
    return mediaByCategory;
  }

}
