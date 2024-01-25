import app_config from 'remix.config.js'
export default function fetch_options(query) {
  return {
    endpoint: app_config.data.gql_store_url,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_API_TOKEN,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }
}