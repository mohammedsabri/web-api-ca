import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchlist = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
    context.RemoveFromWatchlist(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromWatchlist}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchlist;