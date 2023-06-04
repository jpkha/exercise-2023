import { PowderMediaDataUtils } from "../utils/powder-media-data.util";
import { expect } from "@playwright/test";

describe('utils', () => {
  it('should get data with index', async () => {
    const data = await PowderMediaDataUtils.getPowderMediaData()
    expect(data[0].id).toBeTruthy();
    expect(data[Math.floor(Math.random() * data.length)].category).toBeTruthy();
    expect(data[data.length - 1].category).toBeTruthy();
  });
  it('should get data with the most recent data at first', async () => {
    const data = await PowderMediaDataUtils.getPowderMediaData()
    expect(data[0].createdAt > data[1].createdAt).toBeTruthy();
  });

  it('should get all category', async () => {
    expect( await PowderMediaDataUtils.getPowderMediaAllCategories()).toEqual( [ 'Shooters', 'Action-adventure', 'MOBA' ] );
  });

  it('should get MOBA category', async () => {
    const category = 'MOBA';
    const data = await PowderMediaDataUtils.getPowderMediaCategory(category);
    expect(data[0].category).toEqual(category);
    expect(data[Math.floor(Math.random() * data.length)].category).toEqual(category);;
    expect(data[data.length - 1].category).toEqual(category);;
  });

  it('should get PowderMedia By Category', async () => {
    const data = await PowderMediaDataUtils.getPowderMediaByCategory();
    const category = await PowderMediaDataUtils.getPowderMediaAllCategories();
    const randomCategory = category[0];
    expect(data.some(({category}) => category === randomCategory)).toBeTruthy();
    expect(data.find(({category}) => category === randomCategory).media.length).toBeGreaterThan(0);
  });


})