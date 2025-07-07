export interface EcwidProduct {
  id: number;
  sku: string;
  name: string;
  price: number;
  compareToPrice?: number;
  description?: string;
  shortDescription?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  categoryId?: number;
  inStock: boolean;
  quantity: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  attributes?: Array<{
    id: number;
    name: string;
    value: string;
  }>;
  options?: Array<{
    name: string;
    choices: Array<{
      text: string;
      priceModifier?: number;
    }>;
  }>;
  galleryImages?: Array<{
    id: number;
    url: string;
    alt?: string;
  }>;
  media?: {
    images?: Array<{
      id: string;
      url: string;
      width: number;
      height: number;
      alt?: string;
    }>;
  };
  createTimestamp: number;
  updateTimestamp: number;
  enabled: boolean;
  url: string;
}

export enum EcwidProductSearchMethod {
  STOREFRONT = "STOREFRONT",
  CP = "CP",
}

export enum EcwidProductSortBy {
  RELEVANCE = "RELEVANCE",
  DEFINED_BY_STORE_OWNER = "DEFINED_BY_STORE_OWNER",
  ADDED_TIME_DESC = "ADDED_TIME_DESC",
  ADDED_TIME_ASC = "ADDED_TIME_ASC",
  UPDATED_TIME_DESC = "UPDATED_TIME_DESC",
  UPDATED_TIME_ASC = "UPDATED_TIME_ASC",
  NAME_ASC = "NAME_ASC",
  NAME_DESC = "NAME_DESC",
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
}

export enum EcwidProductOnsale {
  ONSALE = "onsale",
  NOT_ONSALE = "notonsale",
}

export enum EcwidProductInventory {
  IN_STOCK = "instock",
  OUT_OF_STOCK = "outofstock",
}

export type EcwidProductListRequestParams = {
  productId?: number;
  sku?: string;
  keyword?: string;
  searchMethod?: EcwidProductSearchMethod;
  category?: string;
  categories?: string;
  includeProductsFromSubcategories?: boolean;
  priceFrom?: number;
  priceTo?: number;
  createdFrom?: number | string;
  createdTo?: number | string;
  updatedFrom?: number | string;
  updatedTo?: number | string;
  sortBy?: EcwidProductSortBy;
  enabled?: boolean;
  isGiftCard?: boolean;
  inStock?: boolean;
  discountsAllowed?: boolean;
  visibleInStorefront?: boolean;
  isCustomerSetPrice?: boolean;
  onsale?: EcwidProductOnsale;
  inventory?: EcwidProductInventory;
  baseUrl?: string;
  cleanURLs?: boolean;
  slugsWithoutIds?: boolean;
  options?: Record<string, (string | number | boolean)[]>;
  attributes?: Record<string, (string | number | boolean)[]>;
  externalReferenceId?: string;
  enabledManualTaxes?: string;
  taxClassCodes?: string;
  offset?: number;
  limit?: number;
  responseFields?: string;
};

export type EcwidProductRequestParams = {
  baseUrl?: string;
  cleanURLs?: boolean;
  slugsWithoutIds?: boolean;
  lang?: string;
  responseFields?: string;
};
