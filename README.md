 WEB-API-CA 2
Name: Mohammed Sabri Student Number: 20113428
Demo Video Link: 
## Features.
API Endpoints
Movies

Get Movie by ID
Endpoint: /tmdb/movie/:id
Description: Fetch details of a specific movie by its ID.
Upcoming Movies
Endpoint: /tmdb/movies/upcoming
Description: Fetch a list of upcoming movies.
Popular Movies
Endpoint: /tmdb/movies/popular
Description: Fetch a list of popular movies.
Search Movies
Endpoint: /tmdb/movies/search
Description: Search for movies based on a query.
Movies by Genre
Endpoint: /tmdb/movies/genre/:genre
Description: Fetch movies based on a specific genre.
Trending Movies
Endpoint: /tmdb/movies/trending
Description: Get a list of trending movies.
Actors

Popular Actors
Endpoint: /tmdb/movies/popular-actors
Description: Fetch a list of popular actors.
User Features
Password Validation

During user registration, passwords must meet the following criteria:

Minimum length: 8 characters.
Must include:
At least one uppercase letter.
At least one lowercase letter.
At least one digit.
At least one special character.
User Authentication

Users can:
Create accounts.
Log in to access personalized features.
Authenticated users can:
View trending movies.
Explore upcoming movies.
Discover popular movies and actors.

## Setup requirements.
To run the app locally after cloning the repository:

Install dependencies using npm install.
Set up a TMDB API key and update the configuration file with the key.
Ensure MongoDB is running.
Set up a MongoDB database and update the configuration file with the connection details.
Run the application using npm run dev.
## API Configuration
NODE_ENV=development
PORT=3000
HOST=localhost
mongoDB=MongoURL
secret=YourJWTSecret

## API Design

Movies Endpoints

Get All Movies
Endpoint: /api/movies
Method: GET
Description: Fetches a list of all movies.
Get Upcoming Movies
Endpoint: /api/movies/upcoming
Method: GET
Description: Retrieves a list of upcoming movies.
Get Trending Movies
Endpoint: /api/movies/trending
Method: GET
Description: Fetches a list of trending movies.
Get Popular Movies
Endpoint: /api/movies/popular
Method: GET
Description: Gets a list of popular movies.
Get Movie Details
Endpoint: /api/movies/{movieid}
Method: GET
Description: Retrieves details for a specific movie by its ID.
Search Movies
Endpoint: /api/movies/search?q={query}
Method: GET
Description: Searches for movies based on the provided query.
Delete a Movie
Endpoint: /api/movies/{movieid}
Method: DELETE
Description: Deletes a specific movie from the database.



## Security and Authentication
JWT-based Authentication: Secure user authentication using JSON Web Tokens.
Protected Routes:
  UpcomingMoviesPage
  TrendingMoviesPage
  PopularMoviesPage
  NowplayingMoviesPage
  SearchPage
  MovieReviewPage
  WatchListPage

 require authentication.


## Integrating with React App
Enhanced User Registration

Feature: Integrated user registration functionality.
Details:
Allows new users to create accounts.
Sends user data securely to the backe.

Routing

Feature: Implemented navigation for all features.
Details:
React Router: Used to manage client-side navigation.
Routes:
Public Routes: Home, Login, Registration.
Protected Routes: User Dashboard, Trending Movies, Upcoming Movies.


Password Validation

Feature: Enforced password criteria during registration.
Validation Rules:
Minimum length: 8 characters.
Includes:
At least one uppercase letter.
At least one lowercase letter.
At least one digit.
At least one special character

