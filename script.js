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

// Set Selected Work as the default filter on page load.
const defaultFilter = document.querySelector(
  '.filter-button[data-filter="selected"]'
);

if (defaultFilter) {
  defaultFilter.click();
}

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

/* HEADER CHANGE*/

const header = document.querySelector(".site-header");
const SCROLL_TRESHOLD = 30;

document.addEventListener("scroll", () => {
  const top = document.documentElement.scrollTop;
  if (top > SCROLL_TRESHOLD) {
    // add the static class
    header.classList.add ("static");
   } else {
    //remove the static class
    header.classList.remove ("static");
  } 
});


/*parallax images*/

/*const backLayer = document.querySelector('.hero-back');
const frontLayer = document.querySelector('.hero-front');
const middleLayer = document.querySelector('.hero-middle');

function updateParallax() {
    const scrollY = window.scrollY;

    backLayer.style.transform = `translateY(${scrollY * 0.8}px)`;
    frontLayer.style.transform = `translateY(${scrollY * 0.6}px)`;
    middleLayer.style.transform = `translateY(${scrollY * 0.3}px)`;

    /*
    if (scrollY > 30) {
    // add the static class
    
   } else {
    //remove the static class
    middleLayer.style.transform = `scale(${scrollY * 0.001})`
  } */
    /*requestAnimationFrame(updateParallax);
}

requestAnimationFrame(updateParallax); */


const hero = document.querySelector('.hero');

const backLayer = document.querySelector('.hero-back');
const frontLayer = document.querySelector('.hero-front');
const middleLayer = document.querySelector('.hero-middle');

const layers = [backLayer, frontLayer, middleLayer];

if (hero && layers.every(layer => layer)) {

    let heroVisible = false;
    let animationFrame = null;

    // Update parallax positions
    function updateParallax() {
        animationFrame = null;

        if (!heroVisible) return;

        const scrollY = window.scrollY;

        backLayer.style.transform = `translate3d(0, ${scrollY * 0.8}px, 0)`;
        frontLayer.style.transform = `translate3d(0, ${scrollY * 0.6}px, 0)`;
        middleLayer.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
    }

    // Only schedule one animation frame at a time
    function requestUpdate() {
        if (!heroVisible || animationFrame !== null) return;

        animationFrame = requestAnimationFrame(updateParallax);
    }

    // Detect whether the hero is visible
    const observer = new IntersectionObserver((entries) => {
        heroVisible = entries[0].isIntersecting;

    // Toggle will-change only while hero is visible
    layers.forEach(layer => {
        layer.classList.toggle('parallax-active', heroVisible);
    });

        if (heroVisible) {
            requestUpdate();
        } else if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }

    }, {
        threshold: 0,
        rootMargin: '100px 0px'
    });

    observer.observe(hero);

    // Listen for scrolling
    window.addEventListener('scroll', requestUpdate, { passive: true });

    // Recalculate when viewport changes
    window.addEventListener('resize', requestUpdate, { passive: true });

}


/* CURSOR CHANGE*/

const cursor = document.querySelector(".custom-cursor");

const hasMouse = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
);

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (cursor && hasMouse.matches && !reducedMotion.matches) {

    let mouseX = 0;
    let mouseY = 0;
    let ticking = false;

    // Mouse tracking
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!ticking) {
            requestAnimationFrame(() => {
                cursor.style.left = "0px";
                cursor.style.top = "0px";

                cursor.style.transform =
                    `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

                ticking = false;
            });

            ticking = true;
        }
    });

    // Hover expansion
    const hoverElements = document.querySelectorAll(
        "a, button, .project-card, [role='button']"
    );

    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });
    });
}