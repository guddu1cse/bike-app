const nav = document.querySelector('.navbar');
fetch('/Admin/admin.html')
.then(res => res.text())
.then(data =>{
    nav.innerHTML=data;
})