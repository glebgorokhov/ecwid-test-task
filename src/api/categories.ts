import { ecwidClient } from ".";
import type {
  EcwidCategory,
  EcwidCategoryListRequestParams,
  EcwidCategoryRequestParams,
} from "./categories.types";
import type { EcwidSearchResult } from "./index.types";

export function getCategories(params?: EcwidCategoryListRequestParams) {
  return ecwidClient.get<EcwidSearchResult<EcwidCategory>>("/categories", {
    params,
  });
}

export function getCategoryById(id: number, params?: EcwidCategoryRequestParams) {
  return ecwidClient.get<EcwidCategory>(`/categories/${id}`, {
    params,
  });
}
