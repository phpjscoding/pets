import type { MetaFunction } from "@remix-run/node";
import CollectionBanner from "./../comps/CollectionBanner.js";
import { useLoaderData } from "@remix-run/react";
import HeroSlides from "../comps/HeroSlides";
import ProductCardCarousel from "./../comps/ProductCardCarousel.js";

export const meta: MetaFunction = () => {
  return [
    { title: "Waggy Pet Shop" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {


  // anywhere in your app, after loadConfig is complete and resolved
  // --------------------

  const domain = "hydrogen-backend.myshopify.com"
  //const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

  const URL = `https://${domain}/api/2024-01/graphql.json`
  const query = `{
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": "dff9d9dffa5f4b9d33fb9cf174c2fbd9",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }
  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error("Products not fetched")
  }



}


export default function Index() {
  const data = useLoaderData();
  const obj = { data }
  const products = obj.data.data.products.edges
  return (
    <div>

      <HeroSlides />
      <CollectionBanner />
      <ProductCardCarousel />

      {/* <ul className="products-grid">
        {products.map(product => <li className="product-card" key={product.id}>
          <h2> {product.node.title}</h2>
          <div className="first-img">
            <img src={product.node.images.edges[0].node.originalSrc} alt="" />
          </div>
          {


            <div className="product-images" key={product.id}>
              {
                product.node.images.edges.map((img, i) => {
                  return <img key={i} src={img.node.originalSrc} alt="" />
                })
              }
            </div>



          }
        </li>)}
      </ul> */}


    </div>
  );
}
