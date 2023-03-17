export const CATEGORY = {
   ALL: 'all',
   RUM: 'rum',
   TEQUILA: 'tequila',
   GIN: 'gin',
   WHISKEY: 'whiskey',
   VODKA: 'vodka',
};

export const SORTBY = {
   AZ: 'a-z',
   PRICE: 'price',
};

export interface ItemType {
   id: number;
   name: string;
   category: string;
   price: number;
};

export type CategoriesType =
   typeof CATEGORY.ALL |
   typeof CATEGORY.RUM |
   typeof CATEGORY.TEQUILA |
   typeof CATEGORY.GIN |
   typeof CATEGORY.WHISKEY |
   typeof CATEGORY.VODKA;

export type SortByType = typeof SORTBY.AZ | typeof SORTBY.PRICE;