# Speaker Showcase Carousel

A responsive web application that showcases featured speakers for an event with an interactive carousel and detailed speaker information cards.

## 📌 Features

- **Interactive Carousel**: Smooth-scrolling carousel with navigation arrows
- **Speaker Cards**: Clean, visually appealing cards displaying speaker information
- **Detailed View**: Expandable detailed view for each speaker with additional information
- **Responsive Design**: Fully responsive layout that works across all device sizes
- **Social Media Integration**: Built-in social media links for speakers
- **Program Section**: Quick access to the event program

## 🛠️ Technologies Used

- HTML5
- CSS3 (with SCSS)
- Vanilla JavaScript
- Responsive Design
- CSS Flexbox
- CSS Grid

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Rohit27698/SpecbeeAssingment.git
```

2. Navigate to the project directory
```bash
cd SpecbeeAssingment
```

3. Open the `index.html` file in your browser or use a local development server

## 💻 Usage

### Basic Structure

The project consists of three main components:

1. **Header Section**
   - Title
   - Subtitle with company highlight

2. **Carousel Section**
   - Navigation arrows
   - Speaker cards
   - Smooth scrolling functionality

3. **Detailed View**
   - Expanded speaker information
   - Social media links
   - Detailed description
   - Close button

### Adding New Speakers

To add new speakers, modify the `cardData` array in `index.js`:

```javascript
const cardData = [
  {
    name: "Speaker Name",
    title: "Job Title",
    company: "Company Name",
    image: "./images/speaker-image.jpeg"
  },
  // Add more speakers...
];
```

## 📱 Responsive Design

The application is responsive across multiple breakpoints:

- Desktop (> 1080px)
- Tablet (780px - 1080px)
- Mobile (< 780px)

## 🎨 Customization

### Colors

Main colors used in the project:
- Primary Blue: `#003fb4`
- White: `#ffffff`
- Text Gray: `#6B6B6B`
- Border Gray: `#DADADA`

### Typography

- Primary Font: Arial, sans-serif
- Secondary Font: Lora (for detailed content)
- Work Sans (for program section)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 🙏 Acknowledgments

- Design inspiration from modern event websites
- Icons from various free icon libraries
- Sample images used for demonstration purposes
