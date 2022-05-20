
// fnction

function myData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}


function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => showcomment(json))
}

function showcomment(json){
    const ul = document.getElementById('commentlist');
    for (const comment of json) {
        const li = document.createElement('li');
        li.textContent = comment.email;
        ul.appendChild(li);
    }

}


function commentData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => showcommentData(json))
}
commentData();

function showcommentData(commentsData){
    const sectionContainer = document.getElementById('datas');
    for(const comment of commentsData){
        const div = document.createElement('div');
        div.innerHTML = `
        
        <h3>${comment.name}</h3>
        <p>${comment.email}</p>
        <p>${comment.body}</p>

        `;
        sectionContainer.appendChild(div);
    }

}