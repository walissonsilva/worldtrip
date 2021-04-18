import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styles from './swiper.module.scss';

SwiperCore.use([Navigation, Pagination]);

export function ContinentsSlider() {
  const sliderData = [
    { imageSrc: '/images/continents/europe.jpg', imageAlt: 'Europa' },
    { imageSrc: '/images/continents/america.jpg', imageAlt: 'América' },
    { imageSrc: '/images/continents/africa.jpg', imageAlt: 'África' },
  ];

  return (
    <Box
      className={styles.swiper}
      maxWidth={1160}
      mx="auto"
      mt="52px"
      mb="20px"
      position="relative"
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination
      >
        { sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              h={500}
              backgroundImage={`url('${slide.imageSrc}')`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Flex
                flexDir="column"
                justify="center"
                align="center"
                backgroundColor="rgba(0, 0, 0, 0.2)"
                w="100%"
                h="100%"
              >
                <Text fontSize="5xl" fontWeight="bold">{slide.imageAlt}</Text>
                <Text fontSize="2xl" fontWeight="bold">O continente mais antigo</Text>
              </Flex>
            </Box>
          </SwiperSlide>
        )) }
      </Swiper>
    </Box>
  )
}