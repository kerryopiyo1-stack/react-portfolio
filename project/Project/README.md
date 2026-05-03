# Creative Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS 

## Features

- Fully responsive (mobile, tablet, desktop)
- Search functionality for projects
- Add new projects dynamically
- Social media integration
- Fast and optimized with Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Build for Production

To create an optimized production build:

```bash
npm run build
```


## Project Structure

```
Project/
├── src/
│   ├── components/          # All UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── SearchBar.jsx    # Search input
│   │   ├── ProjectGrid.jsx  # Projects grid container
│   │   ├── ProjectCard.jsx  # Individual project card
│   │   ├── PlaceholderImage.jsx # Fallback image
│   │   ├── EmptyState.jsx   # No results message
│   │   ├── AddProjectForm.jsx # Add project form
│   │   ├── ContactSection.jsx # Social links
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── data.js              # Project and social media data
│   ├── icons.jsx            # Reusable icon components
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## Customization

### Update Your Projects

Edit `src/data.js` and modify the `PROJECTS` array with your own projects.

### Update Social Links

Edit `src/data.js` and modify the `SOCIAL_LINKS` array with your social media profiles.

### Change Colors

The main gradient colors are in `src/App.jsx`. Look for:
- `from-cyan-400` / `to-teal-400` (text gradients)
- `from-cyan-500` / `to-teal-500` (button gradients)
- Background gradient in the main div

#
## Technologies Used

- React 1
- Vite
- Tailwind CSS
- Modern JavaScript (ES6+)

## License

Free to use for personal and educational purposes.
