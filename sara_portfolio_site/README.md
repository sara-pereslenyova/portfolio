# Sara's one-page portfolio website

A beginner-friendly portfolio starter built with:

- HTML
- CSS
- vanilla JavaScript

No React, no npm, no build process.

## Folder structure

```text
sara_portfolio_site/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── hero-object.svg
    ├── project-01.svg
    ├── project-02.svg
    ├── project-03.svg
    ├── project-04.svg
    ├── project-05.svg
    └── project-06.svg
```

## How to run it

Simplest:

1. Open `index.html` in your browser.

For a better development experience, install VS Code and use the "Live Server" extension.

## What to change first

### 1. Your name
In `index.html`, search for:

`SARA`

and change it if needed.

### 2. Hero text
Find:

`Designing worlds, ideas and experiences.`

and replace the heading/introduction with your preferred text.

### 3. Your projects
Every project card has:

- title
- description
- disciplines
- image
- project link

Replace the placeholders with your real work.

### 4. Project images
Replace the SVG files in `assets/` with JPG/PNG/WebP images.

For example:

```html
<img src="assets/my-project.jpg" alt="Description of my project">
```

The `alt` text is important for accessibility.

### 5. Project filtering
Each card has:

```html
data-disciplines="concept 3d visual game"
```

The available filters are:

- concept
- 3d
- ux
- visual
- illustration
- game

You can give a project more than one discipline.

### 6. Contact links
Search for:

`hello@example.com`

and replace it with your email.

Do the same with the LinkedIn and Behance URLs.

### 7. CV
The navigation expects:

`assets/Sara-CV.pdf`

Put your CV PDF there or change the link in `index.html`.

## How the animations work

The site uses `IntersectionObserver` in `script.js`.

As elements enter the viewport, JavaScript adds:

```text
is-visible
```

The CSS then changes their opacity and position.

To make the animation faster/slower, edit:

```css
transition: opacity 700ms ease,
            transform 700ms cubic-bezier(...);
```

in `style.css`.

## How the discipline filter works

Each project card has a list:

```html
data-disciplines="concept 3d visual"
```

The filter button has:

```html
data-filter="3d"
```

JavaScript compares the two.

You can therefore add/remove disciplines without changing the filtering code.

## Adding a new project

Copy one entire:

```html
<article class="project-card ...">
```

block, then change:

- `data-disciplines`
- title
- description
- image
- project link
- number

## Optional future 3D

This version deliberately uses a normal image for the 3D hero.

That is the easiest option.

Later, if you want an interactive GLB model, you can consider Google's `<model-viewer>` web component.

I would only add that after the rest of the website already works.

## Design principle

Keep the site visually unusual but technically boring.

The idea is:

- simple code
- strong art direction
- meaningful interactions
- very good project presentation

The website should demonstrate your design thinking, not your ability to build a complicated frontend.
