import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ProductsSwiper.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ProductsSwiper({ list, test2 }) {
  const [slidesPerView, setSlidesPerView] = useState(4);

  return (
    <>
      <Swiper
        id="Menu"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1350: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {list.map((listItem) => (
          <SwiperSlide
            key={listItem.cost}
            className="products_card"
            sx={{ display: "block", maxWidth: " 303px" }}
          >
            <Box sx={{ maxWidth: "100%" }}>
              <img src={listItem.img} alt="ad" />
            </Box>
            <Box sx={{ padding: "16px 9px 24px;" }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "28px",
                  marginBottom: "8px",
                }}
              >
                {listItem.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "28px",
                  marginBottom: "24px",
                }}
              >
                {listItem.ingredient}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#FFA321",
                    marginRight: "20px",
                  }}
                >
                  {listItem.cost}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#FFA321",
                  }}
                >
                  {listItem.kcal}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
