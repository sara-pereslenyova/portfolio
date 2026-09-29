/*
  ============================================
  SIMPLE PORTFOLIO INTERACTIONS
  ============================================

  This file does two main things:

  1. Reveals sections gently as you scroll.
  2. Filters your project cards by discipline.

  It intentionally uses vanilla JavaScript so you can learn what is happening
  without needing React, npm, a build system, etc.
*/

document.documentElement.classList.add("js-ready");

/* --------------------------------------------
   1. CURRENT YEAR
   -------------------------------------------- */
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* --------------------------------------------
   2. SCROLL REVEAL
   --------------------------------------------
   IntersectionObserver watches for elements entering
   the screen.

   You can change the animation itself in style.css.
*/
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");

      // Once an element has appeared, stop watching it.
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3
  }
);

revealItems.forEach((item) => revealObserver.observe(item));


/* --------------------------------------------
   3. PROJECT FILTER
   -------------------------------------------- */
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.querySelector("#filter-empty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Update which button looks active.
    filterButtons.forEach((otherButton) => {
      const isActive = otherButton === button;

      otherButton.classList.toggle("is-active", isActive);
      otherButton.setAttribute("aria-pressed", String(isActive));
    });

    let visibleProjects = 0;

    projectCards.forEach((card) => {
      const disciplines = card.dataset.disciplines.split(" ");

      // "all" shows everything.
      // Otherwise, we check whether the card contains the selected discipline.
      const shouldShow =
        selectedFilter === "all" ||
        disciplines.includes(selectedFilter);

      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleProjects += 1;
      }
    });

    // A small fallback message if a category has no work yet.
    if (emptyMessage) {
      emptyMessage.hidden = visibleProjects !== 0;
    }
  });
});

/* --------------------------------------------
   4. PROJECT VIEW PAGE INTERACTIONS
   -------------------------------------------- */
// Simple JavaScript for the "Go Back" button on the project view page
function goBack() {
  window.history.back();
}

// Optional: Add smooth scrolling or other interactions here
document.addEventListener('DOMContentLoaded', function() {
  // Example: Add a subtle fade-in animation for media items on the project view page
  const mediaItems = document.querySelectorAll('.media-item');

  mediaItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
});