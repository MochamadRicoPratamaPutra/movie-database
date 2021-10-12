<p align="center">
<image align="center" width="200" src='./src/asset/logogit.png' />
<h1 align='center'>Movie Database</h1>
</p>
<p align="center">
  <a href="https://github.com/MochamadRicoPratamaPutra/movie-database/issues">Report Bug</a>
  ·
  <a href="https://github.com/MochamadRicoPratamaPutra/movie-database/pulls">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Test Case](#test-case)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

Movie Database is a website to search information for movie that you want to watch. This project used omdb database. There's also TV-Series and Games in this database. You can input title or release year from the movie you want to search.

## Built With

[![ReactJS](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-4.1.1-green)](https://redux.js.org/)
[![Axios](https://img.shields.io/badge/Axios-0.22.0-yellow)](https://axios-http.com/)

<!-- GETTING STARTED -->

## Getting Started

1. Download this Project or you can type `git clone https://github.com/MochamadRicoPratamaPutra/movie-database.git` in your Terminal
2. Open app's directory in CMD or Terminal
3. Type `npm install` or `yarn install`
4. Go to http://www.omdbapi.com/apikey.aspx and enter the required data
5. Choose Account type FREE
6. Check your email from The OMDb API, and click activation key url
7. Add .env.local file at root folder project

```sh
REACT_APP_API_URL = "http://www.omdbapi.com/?apikey=[Your API key from OMDb API email]"
```

8. Type npm `npm run build`

<!-- TEST CASE -->
## Test Case
| Test Case ID | Test Scenario | Test Steps | Test Data | Expected Result | Actual Results | Pass/Fail |
| --- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| TU01 | Searching with keyword | 1. Run your program locally 2. Input title of the movie 3. Click Search button | title= Batman | User should get list of movie with keyword 'Batman' | As Expected | Pass
| TU02 | Searching without keyword | 1. Run your program locally 2. Click Search button | - | User should get warning and not directed to search page | As Expected | Pass
| TU03 | Searching with Keyword, type and year | 1. Run your program locally 2. Input title of the movie 3. Click More Category button 4. Choose type 5. Input year 6. Click Search button | title= Batman, type= Movie, year= 2016 | User should get list of movie with keyword 'Batman', and listed as movie and release at 2016 | As Expected | Pass
| TU04 | Infinite Scroll | 1. 1. Run your program locally 2. Input title of the movie 3. Click Search button 4. Scroll to the bottom |title= Batman | Users should get more item the more user scrolling down | As Expected | Pass
| TU05 | Detail Page | 1. 1. Run your program locally 2. Input title of the movie 3. Click Search button 4. Click the first card in the list |title= Batman| User will be directed to detail page that contain detail of the movie/series/game | As Expected | Pass

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/)

<!-- CONTACT -->
## Contact

My Email : mricopratamaputra@gmail.com