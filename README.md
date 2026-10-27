# Student Portfolio — React + Vite

A responsive, single-page student portfolio built with React functional components, Vite, and standard CSS. It includes a profile, education, skills, projects, achievements, a light/dark theme switch, and a client-side validated contact form.

> **Make it yours:** the portfolio currently uses fictional sample details forveera  Mehta. Update `src/data/portfolio.js` with your own accurate information, links, and project images before publishing.

## 1. Check Node.js and npm

Install a current Node.js LTS release from [nodejs.org](https://nodejs.org/) if needed. npm is included with Node.js. Open a terminal in VS Code and check:

```powershell
node --version
npm --version
```

Both commands should print version numbers. If PowerShell says a command is not recognized, restart VS Code after installing Node.js and check again.

## 2. Create a React project with Vite

For a new project, run these commands in PowerShell:

```powershell
npm create vite@latest student-portfolio -- --template react
cd student-portfolio
npm install
code .
```

If `code .` is not recognized, open VS Code and select **File → Open Folder…**, then choose the `student-portfolio` folder.

This repository is already a Vite React project. To use the finished version here, open its folder in VS Code and keep the existing `package.json`; the implementation below replaces or adds files under `src/` and updates the root `README.md` and `index.html`.

Create the two source folders if they do not already exist:

```powershell
New-Item -ItemType Directory -Force src\components, src\data
```

Copy the files in this repository into the matching locations in your new Vite project. Do not copy `node_modules`; run `npm install` in the new project's folder instead.

## 3. Project structure

```text
student-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── components/
    │   └── PortfolioSections.jsx
    └── data/
        └── portfolio.js
```

- `index.html` is the browser document Vite serves and builds. Its `#root` element is where React mounts.
- `package.json` lists dependencies and commands such as `npm run dev` and `npm run build`.
- `vite.config.js` configures the Vite development server and build.
- `public/` contains static files served as-is, such as a favicon.
- `src/main.jsx` starts the React app and renders `<App />` inside `#root`.
- `src/App.jsx` assembles the page and owns the light/dark theme state.
- `src/data/portfolio.js` is the editable source for profile, education, skills, projects, and highlights.
- `src/components/PortfolioSections.jsx` defines reusable components and the contact form.
- `src/index.css` contains global styles and browser defaults; `src/App.css` contains the portfolio layout and responsive styles.

## 4. How the React pieces work

- **JSX and functional components:** components such as `Hero`, `Education`, and `ProjectCard` are JavaScript functions that return JSX markup. `App` composes them into the page.
- **Props:** `App` passes values down, for example `<Hero student={portfolio} />` and `<Projects projects={portfolio.projects} />`. The components display that data without owning a second copy.
- **Lists and keys:** education, skills, projects, and social links use `.map()`. Each repeated item has a stable, meaningful `key`, such as `project.title`.
- **State and events:** `useState` keeps the theme, mobile-menu visibility, and form values in React state. Click handlers toggle the theme/menu; `onChange` updates fields; `onSubmit` validates the form.
- **Reusable components:** the navigation, section heading, education list, skills, project card/list, contact form, and footer each have a focused job.
- **CSS:** `App.css` uses CSS variables for the theme, grid/flexbox for layout, and media queries for smaller screens. The theme button changes the `data-theme` attribute, which switches the variables.

The contact form checks that all fields are filled and the email looks valid. It **does not send or store a message**: a real inbox requires a backend/API or a connected form service. The success feedback explicitly reminds visitors that this is a demo.

## 5. Run the application

From the project directory:

```powershell
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Keep the terminal running while you work; Vite refreshes the browser when you save a file. Stop the server with `Ctrl+C`.

## 6. Make the portfolio yours

Edit `src/data/portfolio.js`:

1. Replace the sample name, email, phone, location, introduction, and objective.
2. Replace the sample LinkedIn and GitHub URLs with your profile URLs.
3. Update college, university, degree, dates, grades, and achievements.
4. Add or remove skills and projects. Use images you own or have permission to use, with useful `imageAlt` descriptions.
5. Add real repository and deployed-demo links. Remove a demo URL if a project has no live version.

Keep the object property names intact unless you also update the components that read them.

## 7. Build for production

Run the production build and optionally preview it locally:

```powershell
npm run build
npm run preview
```

Vite writes the optimized site to `dist/`. Deploy that folder to a static host such as GitHub Pages, Netlify, or Vercel. For a real contact form, connect a backend or a form service and replace the demo-only submission behavior.

## 8. Common issues

- **`node` or `npm` is not recognized:** install Node.js LTS, restart the terminal/VS Code, and rerun the version checks.
- **`npm run dev` says there is no script:** make sure the terminal is in the project folder containing `package.json`.
- **A dependency or Vite command is missing:** run `npm install` in that same folder, then retry.
- **A page is blank or a module cannot be found:** check the spelling and capitalization of the file path and import. For example, `src/data/portfolio.js` must match its import exactly.
- **Changes do not appear:** save the file, check the terminal for Vite errors, and refresh the browser. Restart the dev server if it stopped.
- **Images do not load:** the sample images are remote URLs and require an internet connection. Replace them with your own images in `public/` and use paths such as `/images/my-project.jpg`.
- **`code .` is not recognized:** open the project folder using VS Code's **File → Open Folder…** menu.
- **The contact form says it is a demo:** that is expected. Client-side JavaScript cannot deliver email by itself; add a backend or form provider to receive submissions.

## 9. Practical exercises

Each exercise includes a prompt, expected result, hint, and a solution. Make changes in `src/data/portfolio.js` unless a different file is named.

### Exercise 1 — Add a skill

**Question:** Add `TypeScript` to the Development skills.

**Expected output:** A `TypeScript` badge appears with the other Development skills.

**Hint:** The skill badges are rendered from the `skills` array in the matching group.

**Solution:** Add the string to the Development group's `skills` array:

```js
skills: ['JavaScript', 'React', 'HTML & CSS', 'Git & GitHub', 'REST APIs', 'TypeScript'],
```

### Exercise 2 — Add a project card

**Question:** Add a project named `Weather Notes`.

**Expected output:** A project card appears with an image, description, technology badges, GitHub link, and optional live-demo link.

**Hint:** Add an object to `portfolio.projects`; `Projects` maps over this array to create a `ProjectCard` for each object.

**Solution:** Add a new object to the `projects` array. Use your actual links and an image URL you have permission to use:

```js
{
  title: 'Weather Notes',
  category: 'A forecast with a personal touch',
  description: 'A small weather dashboard for saving notes about favorite places.',
  technologies: ['React', 'CSS', 'Weather API'],
  image: '/images/weather-notes.jpg',
  imageAlt: 'Weather dashboard preview',
  repository: 'https://github.com/YOUR-USERNAME/weather-notes',
  demo: '',
  accent: 'mint',
},
```

Place the image at `public/images/weather-notes.jpg`. An empty `demo` hides the Live demo link.

### Exercise 3 — Update profile details using props

**Question:** Change the name and introduction, then find how those values reach the profile component.

**Expected output:** The hero greeting and navigation wordmark use the updated name; the introduction changes in the hero.

**Hint:** `App.jsx` passes the whole data object to `Hero` as the `student` prop and the name to `Navbar` as `name`.

**Solution:** Update `name` and `introduction` in `portfolio.js`. The existing JSX already passes the props:

```jsx
<Navbar name={portfolio.name} onThemeToggle={toggleTheme} theme={theme} />
<Hero student={portfolio} />
```

Inside `Hero`, `student.name` and `student.introduction` read those prop values.

### Exercise 4 — Create a dark/light theme toggle

**Question:** Add a button that switches between light and dark colors.

**Expected output:** Clicking the navigation theme button changes the page colors; clicking again restores them.

**Hint:** Keep the current mode in `useState`, toggle it in an event handler, and select CSS variables with a data attribute.

**Solution:** This is already implemented. In `App.jsx`, the state and handler are:

```jsx
const [theme, setTheme] = useState('light')
function toggleTheme() {
  setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
}
```

The outer element uses `<div className="portfolio" data-theme={theme}>`; `App.css` defines the alternate variables in `.portfolio[data-theme='dark']`. The `Navbar` calls the handler from its theme button.

### Exercise 5 — Validate the contact form

**Question:** Try to submit empty fields, an invalid email, and then valid-looking details.

**Expected output:** Empty fields and invalid email get an error message. Valid details get a clear demo success message; no email is sent.

**Hint:** Inspect `Contact` in `src/components/PortfolioSections.jsx`: it stores the fields with `useState` and checks them in `handleSubmit`.

**Solution:** The existing handler prevents the browser's default submission, trims values, rejects empty fields, and checks the email with `/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`. A valid submission sets a success message that explains the need for a backend or form service. For actual delivery, submit the values to a server endpoint or a form provider rather than displaying a success message alone.

### Exercise 6 — Make the portfolio responsive

**Question:** Adjust the layout so the project cards stack on narrow mobile screens.

**Expected output:** On screens 640px wide or smaller, project cards display in one column; wider screens retain the multi-column layout.

**Hint:** Check the `@media (max-width: 640px)` rule in `src/App.css`.

**Solution:** The mobile breakpoint already sets:

```css
.skills-grid,
.projects-grid,
.highlights-grid {
  grid-template-columns: 1fr;
}
```

To try a different breakpoint, change `640px` carefully and preview the page at both mobile and desktop widths using browser developer tools.

### Exercise 7 — Deploy the website

**Question:** Publish your portfolio using a static hosting service.

**Expected output:** A public URL loads the production website.

**Hint:** Build first, then configure the hosting provider to deploy the `dist/` output folder. Keep your GitHub repository and live-demo links pointed at real projects.

**Solution:**

1. Add your finished project to a Git repository and push it to GitHub.
2. Run `npm run build` locally and check that `dist/` is created.
3. Import the repository in a host such as Netlify or Vercel. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy and open the generated URL. If you use GitHub Pages, configure the Vite `base` path for the repository name before building.
5. Test the live page on mobile and desktop. Connect a backend/form service before promising that the contact form delivers messages.
#   k i t - p o r t f o l i o  
 