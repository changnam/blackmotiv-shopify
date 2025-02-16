import {Menu,ShopifyMenuOperation} from "./types"
import { getMenuQuery } from "./queries/menu";
import { TAGS, SHOPIFY_GRAPHQL_API_ENDPOINT } from "../constants";
import { ensureStartWith } from "../utils";
import { isShopifyError } from "../type-guard";

const domain = process.env.SHOPIFY_STORE_DOMAIN ? ensureStartWith(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch({
    cache = "no-store",
    headers,
    query,
    tags,
    variables,
}){
    try {
        // console.log("endpoint: "+endpoint);
        // console.log("key: "+key);
        // console.log(
        //   "body: " +
        //     JSON.stringify({
        //       ...(query && { query }),
        //       ...(variables && { variables }),
        //       cache,
        //       ...(tags && { next: { tags } }),
        //     })
        // );

        const result = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": key,
            ...headers,
          },
          body: JSON.stringify({
            ...(query && { query }),
            ...(variables && { variables }),
            cache,
            ...(tags && { next: { tags } }),
          }),
        });

        const body = await result.json();

        if(body.erros){
            throw body.errors[0];
        }

        return {
            status: result.status,
            body
        }
    } catch (error){
        if(isShopifyError(error)){
            throw {
                cause: error.cause?.toString() || "unknown",
                status: error.status || 500,
                message: error.message,
                query
            }
        }

        throw {
            error,
            query
        }
    }
}

export async function getMenu(handle){
    // console.log("handle: "+handle);
    // console.log("query: " + getMenuQuery);
    const res = await shopifyFetch({
        query: getMenuQuery,
        tags: [TAGS.collections],
        variables: {
            handle: handle,
        }
    });

    return (
        res.body?.data?.menu?.items.map((item) => ({
            title: item.title,
            path: item.url.replace(domain, "").replace("/collections","/search").replace("/pages","")
        })) || []
    );
}