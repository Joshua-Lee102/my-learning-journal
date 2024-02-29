let barSelector = document.getElementById('bar-selector');
let navBarText = document.getElementsByClassName('nav-bar-text');
let viewMoreText = document.getElementById('view-more-text')
let viewMore = document.getElementsByClassName('view-more-hidden');
let viewLessText = document.getElementById('view-less-text');
let homeBtn = document.getElementById('nav-bar-head');
let aboutMeBtn = document.getElementById('nav-bar-about-me');
let learningJourney = document.getElementById('nav-bar-header');
let icon = document.getElementById('icon');
let mainPost = document.getElementById('main-post-container');

if (barSelector) {
       barSelector.addEventListener("click", function() {
           Array.from(navBarText).forEach(element => {
               element.style.display = element.style.display === 'block' ? 'none' : 'block';
           });
       });
   } else {
       console.error('bar-selector not found');
   }

homeBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
})

aboutMeBtn.addEventListener('click', function(){
    window.location.href = 'about_me.html';
})

learningJourney.addEventListener('click', function(){
    window.location.href = 'index.html'
})

icon.addEventListener('click', function(){
    window.location.href = 'index.html'
})

viewMoreText.addEventListener("click", function(){
    event.preventDefault();

    Array.from(viewMore).forEach(element => {
        element.style.display = 'grid';
    })
    viewMoreText.style.display = 'none';
    viewLessText.style.display = 'block';
})

viewLessText.addEventListener("click", function(){
    event.preventDefault();
    Array.from(viewMore).forEach(element => {
        element.style.display = 'none';
    })
    viewLessText.style.display = 'none';
    viewMoreText.style.display = 'block';
})

mainPost.addEventListener('click', function(){
    window.location.href = 'main_post.html';
})
