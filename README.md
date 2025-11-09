# Personal Website 🌟

A modern, responsive personal website built with React, TypeScript, and Vite. This project showcases a clean, professional design with interactive elements and smooth animations.

## 🚀 Live Demo

Visit the live website: [yansun0419-ux.github.io](https://yansun0419-ux.github.io/yansun0419-ux.github.io/)

## ✨ Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Click counter demonstrating React state management
- **Beautiful UI**: Gradient backgrounds, smooth animations, and clean typography
- **Fast Performance**: Optimized with Vite's lightning-fast build system
- **Type Safety**: Full TypeScript support for better development experience
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Deployment**: GitHub Pages
- **Code Quality**: ESLint for code linting

## 📁 Project Structure

```text
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yansun0419-ux/yansun0419-ux.github.io.git
   cd yansun0419-ux.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173/yansun0419-ux.github.io/` to see your website

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Updating Content

1. **Change the main content** in `src/App.tsx`:
   - Update the header title and description
   - Modify the hero section text
   - Add new sections or components

2. **Modify styles** in `src/App.css`:
   - Change colors, fonts, and layout
   - Update the gradient background
   - Adjust responsive breakpoints

3. **Update metadata** in `index.html`:
   - Change the page title
   - Update meta descriptions
   - Add favicon

### Adding New Features

- **New Components**: Create new `.tsx` files in the `src/` directory
- **Additional Pages**: Use React Router for multi-page functionality
- **Animations**: Add CSS animations or use libraries like Framer Motion
- **Icons**: Integrate icon libraries like React Icons or Lucide React

## 🚀 Deployment

### Deploy to GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy your site
   - Visit your site at: `https://yourusername.github.io/repository-name/`

#### Troubleshooting MIME Type Issues:

If you encounter the error: "Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of 'application/octet-stream'", this project includes fixes:

- ✅ `.nojekyll` file to prevent Jekyll processing
- ✅ Proper Vite configuration for GitHub Pages
- ✅ GitHub Actions workflow with correct permissions
- ✅ Proper asset naming for MIME type detection

### Deploy to Other Platforms

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3**: Upload the `dist` folder contents to an S3 bucket

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file is configured for GitHub Pages deployment:

- Base path is set to match the repository name
- React plugin is enabled for JSX support
- Build output goes to the `dist` directory

### TypeScript Configuration

Two TypeScript config files are included:

- `tsconfig.json` - Main app configuration
- `tsconfig.node.json` - Node.js tools configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

### yansun0419-ux

- GitHub: [@yansun0419-ux](https://github.com/yansun0419-ux)
- Website: [yansun0419-ux.github.io](https://yansun0419-ux.github.io/yansun0419-ux.github.io/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [GitHub Pages](https://pages.github.com/) - Free hosting for static sites

---

⭐ If you found this project helpful, please give it a star on GitHub!
