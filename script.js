let title = "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73";
let cName = "CodeWithHarry";
let views = 1200000;
let monthsOld = 2;
let duration = "10:00";
let thumbnail = "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q";
let container = document.querySelector(".container");
let button = document.querySelector("#button");

function createcard(title, cName, views, monthsOld, duration, thumbnail){
    let card = document.createElement("div");
    card.className = "card";
    
    let c1 = document.createElement("div");
    c1.className = "photo";
    let thumbnail_= document.createElement("img");
    thumbnail_.id = "image";
    thumbnail_.src = thumbnail;
    let duration_ = document.createElement("span");
    duration_.className = "dur"
    duration_.innerHTML = duration;
    c1.appendChild(thumbnail_);
    c1.appendChild(duration_);
    
    let c2 = document.createElement("div");
    c2.className = "c2";
    let c21 = document.createElement("div");
    c21.className = "c21";
    c21.innerHTML = title;
    let c22 = document.createElement("div");
    c22.className = "c22";
    if(views/1000>1 && views/1000000<1){
        views = (views/1000)+"K";
    }
    else if(views/1000000>1){
        views = (views/1000000)+"M";
    }
    c22.innerHTML = cName+" <b> .</b> "+views+" views "+" <b>.</b> "+monthsOld+" months old";
    
    c2.appendChild(c21);
    c2.appendChild(c22);
    
    card.appendChild(c1);
    card.appendChild(c2);
    container.appendChild(card);
}

button.addEventListener("click",function(){
    createcard(title, cName, views, monthsOld, duration, thumbnail);
})