import { ecwidClient } from ".";
import type { EcwidSearchResult } from "./index.types";
import type {
  EcwidProduct,
  EcwidProductListRequestParams,
  EcwidProductRequestParams,
} from "./product.types";

export function getProducts(params: EcwidProductListRequestParams) {
  return ecwidClient.get<EcwidSearchResult<EcwidProduct>>(`/products`, {
    params,
  });
}

export function getProductById(id: number, params?: EcwidProductRequestParams) {
  return ecwidClient.get<EcwidProduct>(`/products/${id}`, {
    params,
  });
}
