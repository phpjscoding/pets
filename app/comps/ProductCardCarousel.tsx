import ProductCard from "./ProductCard.js"

import { Swiper, SwiperSlide } from 'swiper/react';
// import app_config from "remix.config.js"
import 'swiper/swiper-bundle.css'
import app_config from 'remix.config.js'
import fetch_options from "../snippets/fetch_options.js";
import { useLoaderData } from "@remix-run/react";


export const loader = async () => {
  const URL = app_config.data.gql_store_url;
  const query = `{
    collections(first: 5) {
      nodes {
        handle
        id
        title
        productsCount
        products(first: 25) {
          nodes {
            handle
            id
            title
            tags
          }
        }
        description
        image {
          originalSrc
          id
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

export default function ProductCardCarousel() {
  const data = useLoaderData()
  console.log(data, 'collectionsssssssssssssssssssssssssssss')
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="products-cards-carousel">
      <Swiper
        spaceBetween={30}
        className=''
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          array.map(index => {
            return <div key={index}>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </div>
          })
        }


      </Swiper>
    </div>
  )
}


/*
query MyQuery {
  collections(first: 5) {
    nodes {
      handle
      id
      title
      productsCount
      products(first: 25) {
        nodes {
          handle
          id
          title
          tags
        }
      }
      description
      image {
        originalSrc
        id
      }
    }
  }
}


*/