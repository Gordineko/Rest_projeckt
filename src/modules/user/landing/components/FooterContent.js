import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function FooterContext() {
  return (
    <footer id="Contacts">
      <Container
        maxWidth="xl"
        sx={{
          "@media (max-width:1350px)": {
            padding: "0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            "@media (max-width:1350px)": {
              flexDirection: "column-reverse",
              textAlign: "center",
              "& .MuiBox-root": { justifyContent: "center" },
              position: "relative",
              "& img ": { color: "var(--main-color)" },
              "@media (max-width:1350px)": {
                maxWidth: "100%",
                "& .image_box::after": { display: "block" },
                "@media (max-width:800px)": {
                  "& .contacts::after": {
                    display: "block",
                  },
                  "& .image_box": { display: "none" },
                },
              },
            },
          }}
        >
          <Box
            className="image_box"
            sx={{
              position: "relative",
              maxWidth: "855px",
              "@media (max-width:1350px)": {
                maxWidth: "100%",
              },
            }}
          >
            <img src="./image/map.jpg" alt="asd" />
          </Box>
          <Box
            className="contacts"
            sx={{
              padding: "0 31px 56px",
              color: "#EFEFEF",

              "@media (max-width:1350px)": {
                position: "absolute",
                zIndex: "10",
                left: "50%",
                transform: "translateX(-50%)",
              },
              "@media (max-width:800px)": {
                position: "static",
                transform: "none",
                backgroundImage: 'url("./image/map.jpg")',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "44px",
                fontFamily: "Playball",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "68px",
                lineHeight: "80px",
                color: "#EFEFEF",
              }}
            >
              Contacts
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "40px" }}>
              <img
                src="./image/footerSvg/mdi_map-marker-outline.svg"
                alt="asd"
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                Dnipro, Korobova Street 24
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginBottom: "40px" }}>
              <img
                src="./image/footerSvg/ic_round-mail-outline.svg"
                alt="asd"
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                gordey@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginBottom: "40px" }}>
              <img src="./image/footerSvg/phone.svg" alt="asd" />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                +38 (067) 640 04 27
              </Typography>
            </Box>
            <Box>
              <img src="./image/footerSvg/Vector.svg" alt="asd" />
              <img src="./image/footerSvg/Vector 2.svg" alt="asd" />
              <img src="./image/footerSvg/Vector 3.svg" alt="asd" />
              <img src="./image/footerSvg/Vector 4.svg" alt="asd" />
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
export default FooterContext;
