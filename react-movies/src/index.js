import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/UpcomingMovies";
import PopularMoviesPage from "./pages/PopularMoviesPage.js";
import TrendingMoviesPage from './pages/TrendingMoviesPage.js';
import ActorsPage from "./pages/actorsPage.js";
import ActorDetailsPage from "./pages/actorDetailsPage.js";
import MovieDetailsPage from "./pages/movieDetailsPage.js";
import NowplayingMoviesPage from "./pages/NowPlayingMoviesPage.js";
import WatchListPage from "./pages/WatchListPage.js";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/UpcomingMovies" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />          
            <Route path="/movies/NowPlaying" element={<NowplayingMoviesPage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/people" element={<ActorsPage />} />
            <Route path="/actors/:id" element={<ActorDetailsPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/movies/watchlist" element={<WatchListPage />} />



          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
