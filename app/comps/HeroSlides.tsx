
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// export const links: LinksFunction = () => [
//     { rel: "stylesheet", href: cssBundleHref },
//     { rel: "stylesheet", href: bootstrap },
//     { rel: "stylesheet", href: styles }

//   ];
import app_config from "remix.config.js"
import 'swiper/swiper-bundle.css'
export default function HeroSlides() {

    return (
        <div>

            <div>
                <Swiper
                    spaceBetween={10}
                    className='swper-container'
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {app_config.data.heroSlides.map((slide, i) => {
                        return <SwiperSlide key={i} style={{ height: 'auto', border: '3px solid red' }}>
                            <div className="row banner-content align-items-center">
                                <div className="img-wrapper col-md-5">
                                    <img src={slide.img} className="img-fluid" alt='' />
                                </div>
                                <div className="content-wrapper col-md-7 p-5 mb-5">
                                    <div className="secondary-font text-primary text-uppercase mb-4"> {slide.text_1} </div>
                                    <h2 className="banner-title display-1 fw-normal"> {slide.text_2} <span className="text-primary"> {slide.text_3} </span>
                                    </h2>
                                    <a href={slide.url} className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        shop now
                                        {/* <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                            <use xlink:href="#arrow-right"></use>
                        </svg> */}

                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                    })}



                </Swiper>

            </div>

        </div>
    );
}