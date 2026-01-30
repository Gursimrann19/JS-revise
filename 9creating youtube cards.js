function createCard(title,cname,views,monthsold,duration,thumbnail) {
    let viewsStr;
    
     if (views>=1000000){
        viewsStr = views/1000000 + "M";
    }
    else if( views>= 1000){
        viewsStr = views/1000 + "K"
    }
    else{
        viewsStr = views;
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt=""></img>
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cname} . ${viewsStr} views . ${monthsold} months ago . </p>
            </div>
        </div>`


document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;


}




createCard("Node JS|Signa Web development Course| #85","CodeWithHarry" ,560,1,"31:02","https://i.ytimg.com/vi/V4ohRrvu4Ok/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZdHYEZLdtNmPF3BF7YMiRVB2tkg")

createCard("Introduction To Express JS|Signa Web development Course| #85","CodeWithHarry" ,56000,1,"31:02","https://i.ytimg.com/vi/V4ohRrvu4Ok/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZdHYEZLdtNmPF3BF7YMiRVB2tkg")

createCard("Introduction To React|Signa Web development Course| #85","CodeWithHarry" ,56000000,1,"31:02","https://i.ytimg.com/vi/V4ohRrvu4Ok/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZdHYEZLdtNmPF3BF7YMiRVB2tkg")