import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductsSwiper from "./swiper/ProductsSwiper";
import { Typography } from "@mui/material";

import "./TabPanel.css";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardsSalad = [
    {
      title: 'Salad "Veal with vegetables"',
      ingredient: "Veal, tomatoes, cabbage, parsley",
      cost: "320 ₴",
      kcal: "330 kcal",
      img: "/image/menu/salad 1.jpg",
    },
    {
      title: "Futo with chicken",
      ingredient: "Chicken, tomato, eggs, cucumbers, corn",
      cost: "280 ₴",
      kcal: "440 kcal",
      img: "/image/menu/salad 2.jpg",
    },
    {
      title: 'Salad "Chicken Paradise"',
      ingredient: "Chicken, tomatoes, pepper, noodles.",
      cost: "440 ₴",
      kcal: "520 kcal",
      img: "/image/menu/salad 3.jpg",
    },
    {
      title: 'Salad "Vegetarian"',
      ingredient: "Brynza, lettuce, nuts, beans.",
      cost: "229 ₴",
      kcal: "144 kcal",
      img: "/image/menu/salad 4.jpg",
    },
    {
      title: 'Salad "Croutons""',
      ingredient: "Croutons, onion, cabbage",
      cost: "247 ₴",
      kcal: "177 kcal",
      img: "/image/menu/salad 5.jpg",
    },
  ];
  const cardsSoup = [
    {
      title: "Ukrainian borsch",
      ingredient: "Beets, cabbage, potatoes, carrots, onions",
      cost: "121 ₴",
      kcal: "213 kcal",
      img: "/image/menu/sup 1.jpg",
    },
    {
      title: "Fish soup",
      ingredient: "Fish, onion, black pepper, dill",
      cost: "137 ₴",
      kcal: "189 kcal",
      img: "/image/menu/sup 2.jpg",
    },
    {
      title: "Chicken soup",
      ingredient: "Chicken, onion, noodle, parsley",
      cost: "153 ₴",
      kcal: "165 kcal",
      img: "/image/menu/sup 3.jpg",
    },
    {
      title: "Mushroom soup",
      ingredient: "Mushrooms, onion, parsley, cream",
      cost: "170 ₴",
      kcal: "141 kcal",
      img: "/image/menu/sup 4.jpg",
    },
    {
      title: "Cream soup with vegatables",
      ingredient: "Carrots, leeks, parsley, herbs, celery",
      cost: "171 ₴",
      kcal: "140 kcal",
      img: "/image/menu/sup 5.jpg",
    },
  ];
  const cardsHot = [
    {
      title: "French fries",
      ingredient: "Potatoes, herbs, sauce",
      cost: "80 ₴",
      kcal: "110 kcal",
      img: "/image/menu/hu 1.jpg",
    },
    {
      title: "Futo with chicken",
      ingredient: "Chicken, tomato, eggs, cucumbers, corn",
      cost: "110 ₴",
      kcal: "150 kcal",
      img: "/image/menu/hu 2.jpg",
    },
    {
      title: "Fried chicken wings",
      ingredient: "Chicken, batter, sauce",
      cost: "160 ₴",
      kcal: "230 kcal",
      img: "/image/menu/hu 3.jpg",
    },
    {
      title: "Fried cheese sticks",
      ingredient: "Cheese, batter, sauce",
      cost: "150 ₴",
      kcal: "210 kcal",
      img: "/image/menu/hu 4.jpg",
    },
    {
      title: "Thai fried shrimp",
      ingredient: "Shrimp, batter, sauce",
      cost: "230 ₴",
      kcal: "220 kcal",
      img: "/image/menu/hu 5.jpg",
    },
  ];
  const cardsDesserts = [
    {
      title: "Cheesecake",
      ingredient: "Cream cheese, cream, cookies",
      cost: "110 ₴",
      kcal: "133 kcal",
      img: "/image/menu/dessert 1.jpg",
    },
    {
      title: "Tropical honeydew",
      ingredient: "Mango jam and coconut sorbet",
      cost: "120 ₴",
      kcal: "150 kcal",
      img: "/image/menu/dessert 2.jpg",
    },
    {
      title: "Napoleon cake",
      ingredient: "Puff pastry, cream",
      cost: "127 ₴",
      kcal: "150 kcal",
      img: "/image/menu/dessert 3.jpg",
    },
    {
      title: "Chocolate fondant",
      ingredient: "Chocolate, cocoa powder, cream",
      cost: "150 ₴",
      kcal: "210 kcal",
      img: "/image/menu/dessert 4.jpg",
    },
    {
      title: "Tiramisu",
      ingredient: "Strong coffee, macrapone, savoyardi",
      cost: "159 ₴",
      kcal: "190 kcal",
      img: "/image/menu/dessert 5.jpg",
    },
  ];
  const cardsDrinks = [
    {
      title: "Coca Cola",
      ingredient: "Coca Cola, ice, straw",
      cost: "60 ₴",
      kcal: "500 ml",
      img: "/image/menu/drink 1.jpg",
    },
    {
      title: "Sprite",
      ingredient: "Sprite, ice, straw",
      cost: "110 ₴",
      kcal: "500 ml",
      img: "/image/menu/drink 2.jpg",
    },
    {
      title: "Milkshake",
      ingredient: "Milk, ice-cream, strawberry",
      cost: "80 ₴",
      kcal: "500 ml",
      img: "/image/menu/drink 3.jpg",
    },
    {
      title: "Mojito",
      ingredient: "Sprite, mojito, lime, mint",
      cost: "100 ₴",
      kcal: "500 ml",
      img: "/image/menu/drink 4.jpg",
    },
    {
      title: "Lemon juice",
      ingredient: "Lemon, straw",
      cost: "50 ₴",
      kcal: "500 ml",
      img: "/image/menu/drink 5.jpg",
    },
  ];

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Playball",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "68px",
          lineHeight: "80px",
          color: "#EFEFEF",
          textAlign: "center",
          marginBottom: "64px",
        }}
      >
        Menu
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }} id="Menu">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ sx: { backgroundColor: "#FFA321" } }}
              sx={{
                "& button.Mui-selected": { color: "#EFEFEF" },
                marginBottom: "16px",
              }}
            >
              <Tab
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: " 24px",
                  lineHeight: "28px",
                  color: "#727272;",
                  textTransform: "none",
                }}
                label="Salad"
                value="1"
              />
              <Tab
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: " 24px",
                  lineHeight: "28px",
                  color: "#727272;",
                  textTransform: "none",
                }}
                label="Soups"
                value="2"
              />
              <Tab
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: " 24px",
                  lineHeight: "28px",
                  color: "#727272;",
                  textTransform: "none",
                }}
                label="Hot"
                value="3"
              />
              <Tab
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: " 24px",
                  lineHeight: "28px",
                  color: "#727272;",
                  textTransform: "none",
                }}
                label="Dessert"
                value="4"
              />
              <Tab
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: " 24px",
                  lineHeight: "28px",
                  color: "#727272;",
                  textTransform: "none",
                }}
                label="Drink"
                value="5"
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <ProductsSwiper list={cardsSalad} />
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            <ProductsSwiper list={cardsSoup} />
          </TabPanel>
          <TabPanel value="3" sx={{ padding: 0 }}>
            <ProductsSwiper list={cardsHot} />
          </TabPanel>
          <TabPanel value="4" sx={{ padding: 0 }}>
            <ProductsSwiper list={cardsDesserts} />
          </TabPanel>
          <TabPanel value="5" sx={{ padding: 0 }}>
            <ProductsSwiper list={cardsDrinks} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
