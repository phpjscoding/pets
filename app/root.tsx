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
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    href: "assets/waggy.png"

  },

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
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_API_TOKEN,
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


