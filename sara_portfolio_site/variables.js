// Define variables for each page
const pages = {
  "ttwc.html": {
    title: "The Things We Carry - reused",
    image: "assets/",
    altText: "A warm welcome",
    content: "This is the default content for this page."
  },
  "tcr.html": {
    title: "The City Rings",
    image: "/assets/images/about.jpg",
    altText: "Our team",
    content: "Learn more about our amazing team."
  }
};

// Get the current page's filename
const currentPage = window.location.pathname.split('/').pop();
const pageData = pages[currentPage] || pages["index.html"];

// Update the HTML
document.getElementById('page-title').textContent = pageData.title;
document.getElementById('page-image').src = pageData.image;
document.getElementById('page-image').alt = pageData.altText;
document.getElementById('page-content').innerHTML = pageData.content;
