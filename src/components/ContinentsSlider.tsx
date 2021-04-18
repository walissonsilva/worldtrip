import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

export function ContinentsSlider() {
  return (
    <Box
      maxWidth={1160}
      mx="auto"
      mt="52px"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src="/images/continents/europe.png" alt="Europe Slider" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/continents/america.jpg" alt="America Slider" />
        </SwiperSlide>

        <SwiperSlide>
          Slide 3
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}