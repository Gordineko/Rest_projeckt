import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReservationForm from "./ReservationForm";

import TabPanel from "./TabPanel";

function MainContent() {
  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{
          paddingBottom: "100px",
        }}
      >
        <Box
          sx={{
            margin: "0 auto 100px auto ",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "100%",
            "@media (max-width:1350px)": {
              justifyContent: "center",
            },
          }}
          className="main_content"
        >
          <Box id="About us" sx={{ maxWidth: "637px" }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "88px",
                fontFamily: "Playball",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "68px",
                lineHeight: "80px",
                color: "#EFEFEF",
              }}
            >
              About us
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginBottom: "56px",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "28px",
                color: "#EFEFEF",
              }}
            >
              We were the first in Dnipro who were able to make such a
              restaurant for connoisseurs. In our restaurant you will have the
              opportunity to try our nourishing and delicious food, listen to
              good music and just have a good time with friends.
            </Typography>

            <Box className="main_text_down">
              <Typography
                variant="body"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "28px",
                  color: "#EFEFEF",
                }}
              >
                Our brand-chef knows how to combine tasty with healthy, so you
                can not worry about gaining weight after visiting our
                restaurant, we have thought of everything for you.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "635px",
              "@media (max-width:1350px)": {
                display: "none",
              },
            }}
          >
            <img src={require("../image/About_It.jpg")} alt="sad" />
          </Box>
        </Box>

        <TabPanel />
        <Box className="reservation">
          <Typography
            id="Reservation"
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "88px",
              fontFamily: "Playball",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "68px",
              lineHeight: "80px",
              color: "#EFEFEF",
            }}
          >
            Reservation
          </Typography>
          <ReservationForm />
        </Box>
      </Container>
    </main>
  );
}

export default MainContent;
