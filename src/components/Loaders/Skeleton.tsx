import { Box, Skeleton } from "@mui/material";
import { SkeletonBoxProps } from "./types";

const SkeletonBox = ({ height, width, style }: SkeletonBoxProps) => {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" width={width} height={height} style={{ ...style }} />
    </Box>
  );
};

export default SkeletonBox;
