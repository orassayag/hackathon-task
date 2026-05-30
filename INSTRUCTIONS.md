# Setup and Usage Instructions

**Version**: 1.0.0  
**Last Updated**: May 30, 2026

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Extending the Application](#extending-the-application)
5. [Development Tips](#development-tips)
6. [Troubleshooting](#troubleshooting)
7. [External Resources](#external-resources)

## Prerequisites

### System Requirements

- **Node.js**: Version 10 or higher
- **Package Manager**: npm or yarn
- **Memory**: 2GB RAM minimum
- **Disk Space**: 500MB for application and dependencies

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
hackathon-task/
├── public/              # Static files
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
├── src/
│   ├── App.js           # Main app component with routing
│   ├── index.js         # Entry point
│   ├── Home.js          # Navigation bar component
│   ├── Welcoming.js     # Landing page component
│   ├── Login.js         # Login form
│   ├── Signup.js        # Registration form
│   ├── ForumCard.js     # Study group card component
│   ├── DropDown.js      # Dropdown navigation component
│   ├── Person.js        # Example person component
│   └── index.css        # Global styles
└── package.json         # Project dependencies
```

## Available Scripts

### `npm start`

Runs the app in development mode.

- Opens [http://localhost:3000](http://localhost:3000)
- Page reloads on edits
- Lint errors appear in console

### `npm test`

Launches the test runner in interactive watch mode.

- Uses Jest and React Testing Library
- Runs tests matching `*.test.js` patterns

### `npm run build`

Builds the app for production to the `build/` folder.

- Optimizes React for production
- Minifies code
- Includes hashes in filenames
- Ready for deployment

### `npm run eject`

⚠️ **Note: This is a one-way operation!**

Exposes webpack configuration and build scripts.

- Only use if you need custom configuration
- Cannot be reversed

## Available Commands

### Development Commands

```bash
# Start development server
npm start

# Run tests
npm test
```

### Running Scripts

```bash
# Build for production
npm run build

# Eject configuration
npm run eject
```

## Application Routes

The application uses React Router with the following routes:

| Route      | Component                          | Description                       |
| ---------- | ---------------------------------- | --------------------------------- |
| `/`        | `Home` + `Welcoming`               | Landing page with welcome message |
| `/login`   | `Home` + `Login`                   | User login form                   |
| `/signup`  | `Home` + `Signup`                  | User registration form            |
| `/forming` | `Home` + `DropDown` + `ForumCard`s | Find study buddies page           |

## Components Overview

### Navigation (`Home.js`)

- Bootstrap Navbar with dark theme
- Links to all major sections
- Sign In / Sign Up buttons

### Landing Page (`Welcoming.js`)

- Jumbotron with StudyBuddy branding
- Call-to-action button
- Hero image

### Authentication

- **Login.js**: Email/password login form
- **Signup.js**: User registration form
- Both use Bootstrap Form components

### Study Buddy Features

- **ForumCard.js**: Displays study group requests (Hebrew content)
- **DropDown.js**: Dropdown navigation for filtering study groups
- **Person.js**: Example component demonstrating props

## Customization

### Styling

- Uses Bootstrap 4.5.2 for styling
- React Bootstrap 1.3.0 for components
- Custom CSS in `src/index.css`

### Adding New Routes

1. Import component in `App.js`
2. Add `<Route>` inside `<Switch>`:
   ```jsx
   <Route path='/your-path'>
     <Home />
     <YourComponent />
   </Route>
   ```

### Adding New Components

1. Create component file in `src/`
2. Import React and necessary Bootstrap components
3. Export as default
4. Import and use in `App.js` or other components

## Extending the Application

To extend the functionality of the StudyBuddy platform:

1. **Add New Features**: Create components in `src/` that handle specific logic (e.g., messaging, profile management).
2. **Enhance UI**: Use `react-bootstrap` components to maintain a consistent look and feel.
3. **Update Routing**: Register new paths in `App.js` to make them accessible to users.
4. **Improve State**: Implement complex state management if the application grows beyond simple component state.

## Browser Support

Supports modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Production build targets:

- > 0.2% market share
- Not dead browsers
- Not Opera Mini

## Development Tips

1. **Hot Reload**: Changes automatically refresh the browser
2. **Error Overlay**: Development errors appear as overlay
3. **Console**: Check browser console for warnings/errors
4. **React DevTools**: Install React DevTools browser extension for debugging

## Best Practices

- **Component Reuse**: Break down UI into small, reusable components.
- **State Management**: Keep state as local as possible; lift up only when necessary.
- **Accessibility**: Use semantic HTML and ensure proper contrast ratios.
- **Performance**: Avoid unnecessary re-renders using `React.memo` or `useMemo` where appropriate.
- **Code Quality**: Follow the project's ESLint and Prettier configurations.
- **Documentation**: Comment complex logic and keep README/INSTRUCTIONS up to date.

## Deployment

The app can be deployed to various platforms:

- **GitHub Pages**: Follow [Create React App deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect GitHub repository
- **Heroku**: Use Node.js buildpack

Build first:

```bash
npm run build
```

Then deploy the `build/` folder.

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

- Kill the process using port 3000
- Or set a different port: `PORT=3001 npm start`

### Dependencies Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

- Check Node version (requires Node 10+)
- Ensure all dependencies are installed
- Check for TypeScript/linting errors

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

## External Resources

- [React Bootstrap Components](https://react-bootstrap.github.io/components/alerts)
- [React Router Web Documentation](https://reactrouter.com/web/guides/quick-start)
- [Bootstrap 4 Layout Guide](https://getbootstrap.com/docs/4.5/layout/overview/)
- [Mermaid.js Diagrams](https://mermaid-js.github.io/mermaid/#/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [React Router Documentation](https://reactrouter.com/)

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
