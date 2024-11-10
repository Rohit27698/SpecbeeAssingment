# Specbee - Featured Speakers Carousel

## Overview

Specbee is a web-based interface showcasing featured speakers for an event. It includes a carousel display for speaker cards, and a detailed popup view that appears when a speaker is selected. The project is designed with flexibility and responsiveness in mind, providing an intuitive user experience across various screen sizes.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Carousel**: A horizontal, scrollable carousel displaying speaker cards with profile details and images.
- **Interactive Pop-Up Details**: When a speaker is clicked, additional details about them are displayed in a pop-up container.
- **Responsive Design**: Built to be accessible and functional on different screen sizes, with responsive styling.
- **Smooth Navigation**: Custom navigation buttons to move through the carousel.
- **Thematic Style**: Minimalist, user-friendly UI with consistent styling.

## Technologies Used

- HTML, CSS, JavaScript
- **Sass**: For modular and maintainable CSS
- **JavaScript ES6**: For dynamic content rendering and carousel functionality
- **Font Libraries**: Fonts like Arial, sans-serif, and custom styling
- **Images**: Local images used for demo purposes (replaceable for production)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Specbee-featured-speakers.git
   cd Specbee-featured-speakers

   Install dependencies Since this project uses only vanilla HTML, CSS, and JavaScript, no additional dependencies are needed. However, you may need a live server for local development.

Open the project Open index.html in your browser or use a live server.

Usage
Carousel Navigation: Use the left (<) and right (>) arrows to navigate through speaker cards.
View Speaker Details: Click on any speaker card to open a detailed view in a pop-up window.
Close Pop-Up: Click the "X" button in the pop-up to close it and return to the carousel.
Project Structure
plaintext
Copy code
├── images                   # Images for speaker profiles and icons
├── index.html               # Main HTML file
├── sass
│   └── styles.scss          # Sass styles for the project
├── index.js                 # JavaScript for dynamic carousel and pop-up behavior
└── README.md                # Project documentation
Customization
To adjust the content or styles:

Add or Modify Speaker Data: In index.js, modify the cardData array to add new speakers or update existing ones.

javascript
Copy code
const cardData = [
  { name: "Eva Gray", title: "HR Manager", company: "FutureWorks", image: "./images/img2.jpeg" },
  ...
];
Styling Adjustments: Modify the styles.scss file for any custom styling adjustments, including colors, fonts, or layout changes.

Carousel Transition Speed: Adjust the handleCarouselMove function in index.js for smoother or faster transitions by changing the scroll distance or speed.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
