// Burger Menu
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    document.body.classList.toggle('_lock')
}

menu.addEventListener('click', mobileMenu);



// comments about.html
let comments = [];
loadComments();

document.getElementById('comment_add_btn').onclick = function() {
    event.preventDefault();
    let commentName = document.getElementById('about_comment_name');
    let commentBody = document.getElementById('about_comment_body');

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now()/1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);

    saveComments();
    showComments();
}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.getElementById('comment_field');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="about_text_time">${timeConverter(item.time)}</p>`
        out += `<p class="about_text_name">${item.name}</p>`
        out += `<p class="about_text_body">${item.body}</p>`
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year + ' ';
    return time;
}











