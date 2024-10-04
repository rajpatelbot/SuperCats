import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SkeletonBox from "../../components/Loaders/Skeleton";
import Topbar from "../../components/Topbar";
import { api } from "../../config/api";
import useFetch from "../../hooks/useFetch";
import { CatResponseType } from "./types";

const ViewCatDetails = () => {
  const { id = "" } = useParams();

  const { response, loading } = useFetch<CatResponseType>(`${api.getCatDetails}/${id}`);

  return (
    <Box component="main" sx={{ p: 3, height: "100vh", background: "#f4f4f4" }}>
      <Topbar text="View Cat Details" isIconVisible={true} />

      <Grid2 container spacing={2} sx={{ height: "calc(100vh - 180px)" }}>
        <Grid2 size={{ sm: 12, md: 6 }}>
          {loading && <SkeletonBox width={"100%"} height={"500px"} />}
          {!loading && response && (
            <img
              srcSet={`${response?.url}?fit=crop&auto=format&dpr=3 2x`}
              src={`${response?.url}?fit=crop&auto=format`}
              alt={"cat"}
              loading="lazy"
              style={{ width: "100%", height: "500px" }}
            />
          )}
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Typography gutterBottom variant="h4" component="div" textAlign={"center"}>
            Details
          </Typography>
          {response?.breeds ? (
            response.breeds?.map((breed) => {
              return (
                <Stack direction="column" gap={3} key={breed.id}>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Typography gutterBottom fontWeight={500} component="div">
                      Name
                    </Typography>
                    <Typography gutterBottom component="div">
                      {breed.name}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography gutterBottom fontWeight={500} component="div">
                      Description
                    </Typography>
                    <Typography gutterBottom component="div">
                      {breed.description}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Typography gutterBottom fontWeight={500} component="div">
                      Short legs
                    </Typography>
                    <Typography gutterBottom component="div">
                      {breed.short_legs}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Typography gutterBottom fontWeight={500} component="div">
                      Wikipedia url
                    </Typography>
                    <Typography gutterBottom component="div">
                      {breed.wikipedia_url}
                    </Typography>
                  </Stack>
                </Stack>
              );
            })
          ) : (
            <Typography gutterBottom component="div">
              No data found
            </Typography>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ViewCatDetails;
