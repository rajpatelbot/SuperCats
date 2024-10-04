import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Grid2, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BackIcon from "@mui/icons-material/ArrowBack";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import { TopbarProps } from "./types";

const Topbar = ({ text, isIconVisible = false, onSearch }: TopbarProps) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <>
      <Toolbar />

      <Grid2 container spacing={2} columns={16} sx={{ marginBottom: "20px" }}>
        <Grid2 size={12}>
          <Typography gutterBottom variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
            {isIconVisible ? (
              <div onClick={() => navigate(-1)} style={{ display: "flex", alignItems: "center" }}>
                <BackIcon sx={{ marginRight: "10px", fontSize: "20px", cursor: "pointer" }} />
              </div>
            ) : null}
            {text}
          </Typography>
        </Grid2>
        <Grid2 size={4} sx={{ textAlign: "end" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={handleSearch}
              placeholder="Search by id..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Topbar;
