// Define variables for each page
const pages = {
  "ttwc.html": {
    //INTRODUCTION
    head_title: "The Things We Carry | Sara Pereslényová",
    title: "The Things We Carry",
    content: "This is the default content for this page.",
    category: "Concept · 3D · Storytelling",
    tools: "Blender",

    //MEDIA
    //videos
    video: "assets/",
    video1: "assets/",
    video2: "assets/",
    //images
    image: "assets/ttwc/Footer.webp",
    image1: "assets/ttwc/Footer.webp",
    image2: "assets/",
    image3: "assets/",
    image4: "assets/",
    image5: "assets/",
    image6: "assets/",
    image7: "assets/",
    image8: "assets/",

    next_project: "tcr.html",
  },

  "tcr.html": {
    head_title: "The City Rings | Sara Pereslényová",
    title: "The City Rings",
    content: "This is the default content for this page.",
    category: "Concept · UX/UI · Character Design",
    tools: "Figma",

    next_project: "ttwc.html",
  }
};

// Get the current page's filename
const currentPage = window.location.pathname.split('/').pop();
const pageData = pages[currentPage] || pages["index.html"];

// Update the HTML
document.getElementById('page-head_title').textContent = pageData.head_title;
document.getElementById('page-title').textContent = pageData.title;
document.getElementById('page-image').alt = pageData.altText;
document.getElementById('page-content').innerHTML = pageData.content;
document.getElementById('page-category').innerHTML = pageData.category;
document.getElementById('page-tools').innerHTML = pageData.tools;

document.getElementById('page-hero-image').src = pageData.hero-image;

document.getElementById('page-image').src = pageData.image;
document.getElementById('page-image1').src = pageData.image1;
document.getElementById('page-image2').src = pageData.image2;
document.getElementById('page-image3').src = pageData.image3;
document.getElementById('page-image4').src = pageData.image4;
document.getElementById('page-image5').src = pageData.image5;
document.getElementById('page-image6').src = pageData.image6;
document.getElementById('page-image7').src = pageData.image7;
document.getElementById('page-image8').src = pageData.image8;

document.getElementById('page-video').src = pageData.video;
document.getElementById('page-video1').src = pageData.video1;
document.getElementById('page-video2').src = pageData.video2;

document.getElementById('page-next_project').href = pageData.next_project;

/*generic cotent - reusable

  "ttwc.html": {
    //INTRODUCTION
    title: "Title",
    altText: "Alt Text",
    content: "This is the default content for this page."

    //MEDIA
    //videos
    video: "assets/",
    video1: "assets/",
    video2: "assets/",
    //images
    image: "assets/",
    image1: "assets/",
    image2: "assets/",
    image3: "assets/",
    image4: "assets/",
    image5: "assets/",
    image6: "assets/",
    image7: "assets/",
    image8: "assets/",
  },
  */