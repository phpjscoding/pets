import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import bootstrap from './../public/assets/bootstrap.css'
import styles from './styles.css'
import '@shopify/shopify-api/adapters/web-api';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration

} from "@remix-run/react";
// import swpercss from 'swiper/css';


import Header from './comps/Header'
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cssBundleHref },
  { rel: "stylesheet", href: bootstrap },
  { rel: "stylesheet", href: styles }

];


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


export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}



// {
//   "node": {
//       "id": "gid://shopify/Product/7218891685999",
//       "title": "Wholesale Preium Pet Beds & Accessories 59x46cm Non-Skid Bottom Surface Mattress Dog Bed for Small Dog",
//       "handle": "wholesale-preium-pet-beds-accessories-59x46cm-non-skid-bottom-surface-mattress-dog-bed-for-small-dog",
//       "priceRange": {
//           "minVariantPrice": {
//               "amount": "380.25"
//           }
//       },
//       "images": {
//           "edges": [
//               {
//                   "node": {
//                       "originalSrc": "https://cdn.shopify.com/s/files/1/0563/6528/5487/products/H736cf64836b54ac49aeda028d52434a6u.webp?v=1705663745",
//                       "altText": "H736cf64836b54ac49aeda028d52434a6u.jpg"
//                   }
//               },
//               {
//                   "node": {
//                       "originalSrc": "https://cdn.shopify.com/s/files/1/0563/6528/5487/products/H76889c33edee45919c0496f255bbbad1w.webp?v=1705663745",
//                       "altText": "H76889c33edee45919c0496f255bbbad1w.jpg"
//                   }
//               },
//               {
//                   "node": {
//                       "originalSrc": "https://cdn.shopify.com/s/files/1/0563/6528/5487/products/Hf2ade87e6e234acab6f22d4c203ea820k.webp?v=1705663745",
//                       "altText": "Hf2ade87e6e234acab6f22d4c203ea820k.jpg"
//                   }
//               },
//               {
//                   "node": {
//                       "originalSrc": "https://cdn.shopify.com/s/files/1/0563/6528/5487/products/H29bd1c9e562f43c8bc1d3cb103bbebadK.webp?v=1705663745",
//                       "altText": "H29bd1c9e562f43c8bc1d3cb103bbebadK.jpg"
//                   }
//               },
//               {
//                   "node": {
//                       "originalSrc": "https://cdn.shopify.com/s/files/1/0563/6528/5487/products/H25b23226149247d3a0977e3aa183e016E.webp?v=1705663745",
//                       "altText": "H25b23226149247d3a0977e3aa183e016E.jpg"
//                   }
//               }
//           ]
//       }
//   }
// }