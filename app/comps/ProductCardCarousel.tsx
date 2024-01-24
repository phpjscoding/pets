import ProductCard from "./ProductCard.js"

import { Swiper, SwiperSlide } from 'swiper/react';
// import app_config from "remix.config.js"
import 'swiper/swiper-bundle.css'

export default function ProductCardCarousel() {
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