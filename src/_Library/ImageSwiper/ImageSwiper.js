import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import {Autoplay, Controller, EffectFade, Navigation} from "swiper/modules";
import styled from "styled-components";

function ImageSwiper({imgUrls, swiperHeight, swiperWidth = "100%"}) {
    return (
        <SwiperContainer>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, EffectFade, Controller, Navigation]}
                autoplay={{
                    delay: 4600,
                }}
                navigation={{
                    enabled: true,
                }}
                controller={true}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true
                }}
                style={{
                    width: swiperWidth,
                    maxWidth: "1250px",
                    margin: "0 auto"
                }}
            >
                {imgUrls.map((i, index) => {
                    return <SwiperSlide
                        key={index}
                        style={{
                            height: swiperHeight,
                        }}>
                        <img
                            src={i} alt=" Caroussel"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </SwiperContainer>
    );
}

const SwiperContainer = styled.section`
  .swiper-button-prev, .swiper-button-next {
    color: var(--ColorWhite)
  }

  @media screen and (min-width: 980px) {
    .swiper-slide {
      height: 65vh !important;
    }
  }
`

export default ImageSwiper;