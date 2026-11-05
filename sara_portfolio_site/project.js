// project.js

/*
  This page needs very little JavaScript.

  The only functionality here is a small scroll-reveal effect
  and automatic copyright year.

  The actual media layout is handled by CSS.
*/


/* =========================
   YEAR
   ========================= */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================
   SIMPLE SCROLL REVEAL
   ========================= */

document.documentElement.classList.add("js-ready");

const mediaItems = document.querySelectorAll(
  ".media-block, .project-heading, .back-wrap, .project-footer"
);

const observer = new IntersectionObserver(
  (entries, currentObserver) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");

      /*
        Once an element has appeared,
        we do not need to observe it anymore.
      */
      currentObserver.unobserve(entry.target);
    });

  },
  {
    threshold: 0.02
  }
);


mediaItems.forEach((item) => {
  observer.observe(item);
});

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