import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration

} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import bootstrap from './../public/assets/bootstrap.css'
import styles from './styles.css'
import '@shopify/shopify-api/adapters/web-api';
import fetch_options from "./snippets/fetch_options.js"
import app_config from "remix.config.js"
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
  const URL = app_config.data.gql_store_url
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

  const options = fetch_options(query)

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


