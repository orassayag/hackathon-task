# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/hackathon-task/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Your environment details (OS, browser, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React** (functional components with hooks)
- **React Bootstrap** for UI components
- **React Router** for navigation
- **ESLint** for code quality (extends react-app)

Before submitting:
```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Start development server to verify changes
npm start
```

### Coding Standards

1. **Functional Components**: Use functional components with React hooks
2. **Props Destructuring**: Destructure props at the component level
3. **Naming Conventions**: 
   - Components: PascalCase (e.g., `ForumCard`, `DropDown`)
   - Functions: camelCase (e.g., `handleSelectClick`)
   - Files: Match component names
4. **Event Handlers**: Prefix with `handle` (e.g., `handleSelectClick`)
5. **Bootstrap Components**: Use React Bootstrap components consistently
6. **Routing**: Use React Router for navigation

### Adding New Features

When adding new features:
1. Create components in the `src/` directory
2. Update routing in `src/App.js` if needed
3. Import Bootstrap components as needed
4. Test across different screen sizes
5. Ensure proper accessibility
6. Add appropriate prop validation

### UI/UX Considerations

- Maintain Bootstrap theme consistency
- Ensure responsive design
- Test on mobile and desktop viewports
- Follow existing navigation patterns
- Keep Hebrew/English text properly formatted

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
