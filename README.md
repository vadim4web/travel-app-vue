# Travel App Vue

[![Travel App Vue Screenshot](https://github.com/1abcdesign/travel-app-vue/blob/main/screenshot.png)](https://1abcdesign.github.io/travel-app-vue/)

## Overview

This is a travel web application built with Vue.js. It allows users to explore various travel destinations and view details and experiences related to those destinations. You can use it to plan your next vacation or simply explore beautiful places from around the world.

## Features

- View a list of travel destinations.
- Click on a destination to view more details.
- Explore different experiences related to each destination.
- Navigate between destinations and experiences with ease.

## Tools Used

- Vue.js: A popular JavaScript framework for building user interfaces.
- Vue Router: A routing library for Vue.js to handle navigation between pages.
- Gh-pages: Used for deploying the app to GitHub Pages.

## Project Structure
```
travel-app-vue/
├── .git/                     # Git version control directory
├── .gitignore                # Specifies files ignored by Git
├── babel.config.js           # Babel configuration for JavaScript transpiling
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Exact dependency versions for reproducible builds
├── README.md                 # Project documentation
├── dist/                     # Production build output
├── jsconfig.json             # JavaScript configuration for editor support
├── public/                   # Static assets and entry HTML file
├── vue.config.js             # Vue CLI configuration
├── screenshot.png            # Screenshot for documentation
└── src/                      # Source code folder
    ├── App.vue               # Main application component
    ├── assets/               # Static images and other media files
    │   ├── blue-mountain.jpg
    │   ├── hawaii.jpg
    │   ├── kilauea-volcano.jpg
    │   └── ...               # Additional images used in the app
    ├── components/           # Reusable UI components
    │   ├── GoBack.vue        # Component for navigation back button
    │   ├── HelloWorld.vue    # Example component
    │   └── TheNavigation.vue # Main navigation component
    ├── main.js               # Application entry point and initialization
    ├── router/               # Vue Router configuration
    │   └── index.js          # Router setup and routes definition
    ├── store.js              # Vuex state management setup
    └── views/                # Main page components for routing
        ├── DestinationDetails.vue  # Page for destination details
        ├── ExperienceDetails.vue   # Page for experience details
        ├── HomeView.vue            # Home page
        └── NotFound.vue            # 404 error page
```
## How to Run Locally

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following commands:

```bash
npm install
npm run serve
```


4. Open your browser and go to `http://localhost:8080` to view the app.

## Author

(&ccaron;) Vadym Chervoniak-Bogdanov.