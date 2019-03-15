
// You will use the following service to get all the story IDs. 

// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

// After getting all the story IDs you will use each story ID to 
// fetch the story from using the following end point.

// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

 

// (Plug in the story ID in the place of 8863 in the above example) 

 

// Display the following information about each story: 

// title 

// url 

// by 

// time (date format) 

 

// * Hacker News API Docs: 

// https://github.com/HackerNews/API 


let newsList = document.getElementById("newsList")




async function getNews(){
    try {
        let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        let json = await response.json()
        json.forEach(function(idnumber){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${idnumber}.json?print=pretty`)
            .then(function(response){
                return response.json();
            }).then(function(myJson){
                let newsItem = `<li>
                    
                    <a href="${myJson.url}">${myJson.title}</a>
                    ${Date(myJson.time * 1000)}
                </li>`
                newsList.innerHTML += newsItem
        })
        
    })
    } catch(error) {
        console.log(error)
    }
}
getNews()
// let liItems = getNews().map(function(article){
//     let 


//https://hacker-news.firebaseio.com/v0/item/${ID}.json?print=pretty
