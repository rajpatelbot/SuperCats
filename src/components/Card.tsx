import { useState } from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { CatResponseType } from "../pages/Cats/types";
import SkeletonBox from "./Loaders/Skeleton";

const ImgCards = ({ cat }: { cat: CatResponseType }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <ImageListItem
      key={cat?.id}
      style={{ height: "100%", borderRadius: "6px", overflow: "hidden" }}
      sx={{ position: "relative", cursor: "pointer" }}
    >
      {!isLoaded && <SkeletonBox width={"100%"} height={"100%"} style={{ position: "absolute", top: 0, left: 0 }} />}

      <img
        srcSet={`${cat?.url}?w=${cat?.width}&fit=crop&auto=format&dpr=3 2x`}
        src={`${cat?.url}?w=${cat?.width}&fit=crop&auto=format`}
        alt={"cat"}
        loading="lazy"
        style={{ height: "220px" }}
        onLoad={() => setIsLoaded(true)}
      />
      <ImageListItemBar subtitle={`@${cat?.id}`} />
    </ImageListItem>
  );
};

export default ImgCards;
