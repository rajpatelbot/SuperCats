import { styled } from "@mui/material";

const ImageListWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "15px",
  width: "100%",
  margin: "20px 0",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

export { ImageListWrapper };
