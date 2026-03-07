# Ragav Portfolio

A personal portfolio website built with **React.js**. All content is driven by a single JSON file (`public/resumeData.json`), so most edits require no code changes—just update the JSON.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Application Data Flow](#application-data-flow)
6. [Editing Content — resumeData.json](#editing-content--resumedatajson)
   - [Main / Personal Info](#1-main--personal-info)
   - [Social Links](#2-social-links)
   - [Resume — Education](#3-resume--education)
   - [Resume — Work Experience](#4-resume--work-experience)
   - [Resume — Skills](#5-resume--skills)
   - [Portfolio Projects](#6-portfolio-projects)
   - [NPM Packages](#7-npm-packages)
   - [Testimonials](#8-testimonials)
7. [Component Reference](#component-reference)
8. [Adding or Removing a Section](#adding-or-removing-a-section)
9. [Replacing the Profile Picture or Resume PDF](#replacing-the-profile-picture-or-resume-pdf)
10. [Adding a Portfolio Image](#adding-a-portfolio-image)
11. [Styling Customisation](#styling-customisation)
12. [Deployment](#deployment)

---

## Project Overview

This is a single-page portfolio site for **Nirmal Ragavan**. The page contains the following sections rendered top-to-bottom:

| # | Section | Description |
|---|---------|-------------|
| 1 | **Header** | Hero banner with name, occupation, city, and social icons |
| 2 | **About** | Profile photo, bio paragraph, contact details, resume download |
| 3 | **Resume** | Education, work experience, and skill proficiency bars |
| 4 | **Portfolio** | Grid of featured projects with images and links |
| 5 | **NPM Packages** | Open-source packages published to npmjs.com |
| 6 | **Testimonials** | Rotating client testimonials |
| 7 | **Contact** | Contact form (opens mailto) plus address sidebar |
| 8 | **Footer** | Social links and back-to-top button |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 16 (class & functional components) |
| Build Tool | Create React App (react-scripts 5) |
| Bundler | Webpack 5 |
| Transpiler | Babel |
| Analytics | react-ga |
| DOM Utils | jQuery (AJAX data fetch only) |
| Icons | Font Awesome 4, Fontello |
| CSS | Custom CSS grid, media queries |
| Deployment | GitHub Pages (gh-pages) |

---

## Getting Started

### Prerequisites

- Node.js ≥ 14
- npm ≥ 6

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

### Build for production

```bash
npm run build
```

Output is placed in the `build/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first, then pushes the `build/` folder to the `gh-pages` branch.

---

## Project Structure

```
ragav-portfolio/
├── public/
│   ├── resumeData.json        ← ALL editable content lives here
│   ├── resume_0512.pdf        ← Resume PDF for download
│   ├── images/
│   │   ├── ragavan.jpg        ← Profile picture
│   │   └── portfolio/         ← Project thumbnail images
│   │       ├── bus.jpg
│   │       ├── excel.png
│   │       ├── population.jpeg
│   │       └── powerbi.png
│   ├── css/                   ← Stylesheets (layout, fonts, icons)
│   ├── js/                    ← jQuery and UI plugins
│   └── index.html             ← HTML shell; mounts React at <div id="root">
│
├── src/
│   ├── App.js                 ← Root component; fetches resumeData.json
│   ├── Components/
│   │   ├── Header.js          ← Nav bar + hero banner
│   │   ├── About.js           ← Bio + contact details
│   │   ├── Resume.js          ← Education, work, skills
│   │   ├── Portfolio.js       ← Project grid
│   │   ├── package.js         ← NPM packages showcase
│   │   ├── Testimonials.js    ← Client testimonials
│   │   ├── Contact.js         ← Contact form
│   │   └── Footer.js          ← Social links + back-to-top
│   ├── index.js               ← React entry point
│   └── index.css              ← Global styles
│
└── package.json
```

---

## Application Data Flow

```
public/resumeData.json
        │
        │  jQuery $.ajax (in App.js componentDidMount)
        ▼
    App component  (this.state.resumeData)
        │
        ├─ resumeData.main        → Header, About, Contact, Footer
        ├─ resumeData.resume      → Resume
        ├─ resumeData.portfolio   → Portfolio
        ├─ resumeData.npm         → Package (NPM section)
        └─ resumeData.testimonials → Testimonials
```

`App.js` fetches `/resumeData.json` once on mount and stores the result in component state. It then passes the relevant sub-object to each section component via **props**. No backend or database is involved.

---

## Editing Content — resumeData.json

All content changes are made in **`public/resumeData.json`**. The file has five top-level keys: `main`, `resume`, `npm`, `portfolio`, and `testimonials`.

---

### 1. Main / Personal Info

```json
"main": {
  "name": "Nirmal Ragavan",
  "occupation": "Full stack javascript & java developer",
  "description": "Full Stack Developer by Day, Founder && Freelancer by Night.",
  "image": "ragavan.jpg",
  "bio": "My name is Nirmal...",
  "contactmessage": "Get in touch with me to receive further details",
  "email": "ragavan.rs12@gmail.com",
  "phone": "+91 9840841887",
  "address": {
    "street": "4/670 A, Mahalakshmi Nagar 2nd street,",
    "city": "Padiyanallur",
    "state": "India",
    "zip": "600052"
  },
  "resumedownload": "resume_0512.pdf",
  "social": [ ... ]
}
```

| Field | Where it appears | Notes |
|-------|-----------------|-------|
| `name` | Header hero (`I'm <name>`), About section, Contact sidebar | |
| `occupation` | Header hero subtitle | |
| `description` | Header hero subtitle (after occupation) | |
| `image` | About section profile photo | Filename relative to `public/images/` |
| `bio` | About section paragraph | |
| `contactmessage` | Contact section lead text | |
| `email` | About section contact details | |
| `phone` | About section contact details, Contact sidebar | |
| `address.*` | About section contact details, Contact sidebar | |
| `resumedownload` | "Download Resume" button in About | Filename relative to `public/` |

---

### 2. Social Links

Social links are an array inside `main.social`. Each entry renders as an icon in the Header and Footer.

```json
"social": [
  {
    "name": "linkedin",
    "url": "https://www.linkedin.com/in/yourprofile",
    "className": "fa fa-linkedin"
  },
  {
    "name": "github",
    "url": "https://github.com/yourusername",
    "className": "fa fa-github"
  }
]
```

| Field | Purpose |
|-------|---------|
| `name` | React list key (must be unique) |
| `url` | Link destination |
| `className` | Font Awesome icon class (e.g. `fa fa-twitter`, `fa fa-youtube`) |

**To add a social link:** append a new object to the array.  
**To remove a social link:** delete its object from the array.

Available Font Awesome icon names: [fontawesome.com/v4/icons](https://fontawesome.com/v4/icons/)

---

### 3. Resume — Education

```json
"resume": {
  "education": [
    {
      "school": "University of Madras",
      "degree": "MBA Finance",
      "graduated": "Jan 2022",
      "description": "Completed with a cumulative GPA of 7.1"
    }
  ]
}
```

| Field | Displayed as |
|-------|-------------|
| `school` | `<h3>` heading |
| `degree` | Info line (bold) |
| `graduated` | Info line (italic date) |
| `description` | Paragraph below |

**To add a school:** append a new object to the `education` array.  
**To remove a school:** delete its object from the array.

---

### 4. Resume — Work Experience

```json
"work": [
  {
    "company": "BI-Worldwide",
    "title": "Software Engineer",
    "years": "Feb 2023 - Present",
    "description": "Led the migration of 16 services..."
  }
]
```

| Field | Displayed as |
|-------|-------------|
| `company` | `<h3>` heading |
| `title` | Info line (bold) |
| `years` | Info line (italic date range) |
| `description` | Paragraph below |

**To add a job:** append a new object to the `work` array.  
**To remove a job:** delete its object from the array.

---

### 5. Resume — Skills

```json
"skills": [
  { "name": "Node",    "level": "100%" },
  { "name": "ReactJs", "level": "90%"  }
]
```

| Field | Displayed as |
|-------|-------------|
| `name` | Label beneath the bar |
| `level` | Width of the filled portion of the bar (CSS `width` value) |

`level` accepts any valid CSS width: `"85%"`, `"70%"`, etc.

**To add a skill:** append a new object.  
**To remove a skill:** delete its object.

> **Note:** The CSS class applied to each skill bar is derived from `name.toLowerCase()` (e.g. skill name `"Node"` → class `bar-expand node`). If you need a custom colour, add a rule in `public/css/default.css`.

---

### 6. Portfolio Projects

```json
"portfolio": {
  "projects": [
    {
      "title": "Bus ticket management",
      "category": "Bus Ticket Management System using AngularJS...",
      "image": "bus.jpg",
      "url": "https://github.com/Ragavanrs/bus-ticket"
    }
  ]
}
```

| Field | Displayed as |
|-------|-------------|
| `title` | Overlay title on hover + `alt` text |
| `category` | Overlay subtitle on hover |
| `image` | Thumbnail — filename relative to `public/images/portfolio/` |
| `url` | Link when clicking the project card |

**To add a project:**
1. Place the thumbnail image in `public/images/portfolio/`.
2. Append a new object to the `projects` array referencing the filename.

**To remove a project:** delete its object from the array.

---

### 7. NPM Packages

```json
"npm": {
  "package": [
    {
      "title": "react native image placeholder",
      "description": "The image component that supports...",
      "link": "https://www.npmjs.com/package/react-native-img-placeholder"
    }
  ]
}
```

| Field | Displayed as |
|-------|-------------|
| `title` | Clickable `<h3>` link |
| `description` | Paragraph below the title |
| `link` | `href` on the title link |

**To add a package:** append a new object.  
**To remove a package:** delete its object.

---

### 8. Testimonials

```json
"testimonials": {
  "testimonials": [
    {
      "text": "Nirmal did an amazing job...",
      "user": "wesley - Fiverr"
    }
  ]
}
```

| Field | Displayed as |
|-------|-------------|
| `text` | Quote body inside `<blockquote>` |
| `user` | Attribution (`<cite>`) |

**To add a testimonial:** append a new object.  
**To remove a testimonial:** delete its object.

---

## Component Reference

| Component | File | Receives prop | Key data used |
|-----------|------|---------------|---------------|
| `Header` | `src/Components/Header.js` | `data` = `main` | `name`, `occupation`, `description`, `address.city`, `social` |
| `About` | `src/Components/About.js` | `data` = `main` | `name`, `image`, `bio`, `address`, `phone`, `email`, `resumedownload` |
| `Resume` | `src/Components/Resume.js` | `data` = `resume` | `education[]`, `work[]`, `skills[]`, `skillmessage` |
| `Portfolio` | `src/Components/Portfolio.js` | `data` = `portfolio` | `projects[]` |
| `Package` | `src/Components/package.js` | `data` = `npm` | `package[]` |
| `Testimonials` | `src/Components/Testimonials.js` | `data` = `testimonials` | `testimonials[]` |
| `Contact` | `src/Components/Contact.js` | `data` = `main` | `name`, `address`, `phone` |
| `Footer` | `src/Components/Footer.js` | `data` = `main` | `social` |

All components guard against an undefined prop with `if(this.props.data)` (or optional chaining `data?.field` in the functional `Contact` component) so the page renders safely while the JSON is loading.

---

## Adding or Removing a Section

### To remove a section

1. Delete the `<ComponentName ... />` line from `App.js`.
2. Remove the corresponding `<li>` navigation link from `Header.js`.

Example — remove the Testimonials section:

**`src/App.js`** — delete:
```jsx
<Testimonials data={this.state.resumeData.testimonials}/>
```

**`src/Components/Header.js`** — delete:
```jsx
<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
```

### To add a new section

1. Create a new component file in `src/Components/`, e.g. `Blog.js`.
2. Add the corresponding data key to `resumeData.json`.
3. Import and render the component in `App.js`, passing the relevant data slice.
4. Add a navigation `<li>` entry in `Header.js`.

---

## Replacing the Profile Picture or Resume PDF

### Profile picture

1. Add the new image to `public/images/` (e.g. `myphoto.jpg`).
2. In `resumeData.json`, update `main.image`:
   ```json
   "image": "myphoto.jpg"
   ```

### Resume PDF

1. Add the PDF to `public/` (e.g. `my_resume.pdf`).
2. In `resumeData.json`, update `main.resumedownload`:
   ```json
   "resumedownload": "my_resume.pdf"
   ```

---

## Adding a Portfolio Image

Portfolio thumbnails must be placed in **`public/images/portfolio/`** and referenced by filename in `resumeData.json`:

```json
{
  "title": "My New Project",
  "category": "Short description",
  "image": "myproject.png",
  "url": "https://github.com/yourrepo"
}
```

Recommended image dimensions: **400 × 300 px** (landscape, same aspect ratio as existing thumbnails).

---

## Styling Customisation

| File | Purpose |
|------|---------|
| `public/css/default.css` | Colours, typography, skill bar colours |
| `public/css/layout.css` | Section layout and spacing |
| `public/css/media-queries.css` | Responsive breakpoints |
| `src/App.css` | React-level overrides |
| `src/index.css` | Global body/root styles |

**To change the hero background image:** replace `public/images/header-background.jpg` (keep the same filename) or update the CSS rule in `layout.css` that references it.

**To change a skill bar colour:** add a rule targeting the generated class. For example, to colour the "Node" skill bar green:
```css
.bar-expand.node { background: #6db33f; }
```

---

## Deployment

The site is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

This command:
1. Runs `npm run build` to produce a production build in `build/`.
2. Pushes the `build/` folder to the `gh-pages` branch of the repository.

The live URL is determined by the repository's GitHub Pages settings (typically `https://<username>.github.io/<repo-name>/`).

> **Note:** The `homepage` field in `package.json` should match your GitHub Pages URL if the site is served from a subdirectory. Add or update it if links appear broken after deployment:
> ```json
> "homepage": "https://ragavanrs.github.io/ragav-portfolio"
> ```
