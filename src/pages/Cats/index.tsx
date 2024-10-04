import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ImgCards from "../../components/Card";
import SkeletonBox from "../../components/Loaders/Skeleton";
import Topbar from "../../components/Topbar";
import { api } from "../../config/api";
import useFetch from "../../hooks/useFetch";
import { CatResponseType } from "./types";
import { useDebouncedFn } from "classic-react-hooks";

const Cats = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const {
    response,
    loading,
    fetchApi: fetchNewCats,
  } = useFetch<CatResponseType[]>(`${api.getCatDetails}/search?page=${page}&limit=${10}`);

  const handleSearch = useDebouncedFn((value: string) => {
    fetchNewCats(`${api.getCatDetails}/search?page=${page}&limit=${10}&search=${value}`);
  });

  const handleImageClick = (cat: CatResponseType) => {
    navigate(`/view/breed/${cat.id}`);
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    fetchNewCats();
  };

  return (
    <Box component="main" sx={{ p: 3, height: "100vh", background: "#f4f4f4" }}>
      <Topbar text="All Cats" onSearch={handleSearch} />

      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          height: "calc(100vh - 250px)",
          overflowY: "auto",
          px: "10px",
        }}
      >
        <>
          {(loading ? Array.from(new Array(10)) : response)?.map((cat, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              height={"220px"}
              key={idx}
              onClick={() => handleImageClick(cat)}
            >
              {cat ? (
                <ImgCards cat={cat} />
              ) : (
                <SkeletonBox key={idx} width={"100%"} height={"220px"} style={{ borderRadius: "6px" }} />
              )}
            </Grid>
          ))}
        </>
      </Grid>

      <Box display={"flex"} mt={3} justifyContent={"center"} alignItems={"center"}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Cats;
