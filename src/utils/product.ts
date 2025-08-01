import { type EcwidProduct } from "@/api/product.types";

/**
 * Generate a product URL with slug and ID
 * Format: /p/{slug}-{id}
 */
export function generateProductUrl(product: EcwidProduct): string {
  const slug = product.customSlug || product.autogeneratedSlug;
  return `/p/${slug}-${product.id}`;
}

/**
 * Extract product ID from a product URL
 * Format: /p/{slug}-{id}
 */
export function extractProductIdFromUrl(url: string): number {
  const splitUrl = url.split("-");
  return Number(splitUrl[splitUrl.length - 1]);
}
