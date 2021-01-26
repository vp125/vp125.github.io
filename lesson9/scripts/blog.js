let urlToDo = 'https://jsonplaceholder.typicode.com/todos/';
let urlUser = 'https://jsonplaceholder.typicode.com/users/';
let urlPost = 'https://jsonplaceholder.typicode.com/posts';
let urlComment = 'https://jsonplaceholder.typicode.com/comments'

window.onload = function(){
    let btnGo = document.getElementById("btn_go");
    btnGo.onclick = getUserInfo;
    //document.getElementById("user_info").style.visibility = 'hidden';
    //document.getElementById("user_posts").style.visibility = 'hidden';
}

function getUserInfo(){
    let userid = document.getElementById("user_id").value;    
    if(userid == "" || isNaN(parseInt(userid))){
        alert("Input user id is empty or not a number!");
        return;
    }
    // display user info
    let myurl = urlUser + userid;
    fetch(myurl)    
        .then(response => response.json())
        .then(json_data => displayUserInfo(json_data));

    // display user post    
    myurl = urlPost;
    fetch(myurl)    
        .then(response => response.json())
        .then(json_data => displayUserPost(json_data,userid));
}

function displayUserInfo(json_data){
    let userInfo = json_data;
    if(userInfo == {}) return;

    let divUserInfo = document.getElementById("user_info");
    //divUserInfo.style.visibility = 'visible';

    divUserInfo.innerHTML  = `
        <h2>User Info</h2>
        <p><strong>Name: </strong>${userInfo.name}</p>
        <p><strong>Username: </strong>${userInfo.username}</p>
        <p><strong>Email: </strong>${userInfo.email}</p>
        <p><strong>Address: </strong>${userInfo.address.street} St. ${userInfo.address.city} City</p>`;
}

function displayUserPost(json_data,userid){
    let userPosts = json_data;
    if(userPosts == {}) return;    
    let divUserPost = document.getElementById("user_posts");
    //divUserPost.style.visibility = 'visible';

    divUserPost.innerHTML = "<h2>User Post</h2>";
    for(let userPost of userPosts ){
        if(userPost.userId != userid) continue;
        divUserPost.innerHTML  += `
        <div id="user_post_${userPost.id}">
            <p id="post_title"><strong>${userPost.id}. ${userPost.title}</strong></p>
            <div class="post_body_container">
                <p id="post_body"><em>${userPost.body}</em></p>
                <button class="btn_comment" id="btn_comment_${userPost.id}" data-pid="${userPost.id}">View Comments</button>
                <div id="post_${userPost.id}_comments"></div>
            </div>
        </div>`;
    }    

    let btns = document.getElementsByClassName("btn_comment");
    for(let btn of btns){
        btn.onclick = viewUserComment;
    }            
}

function viewUserComment(){        
    fetch(urlComment)
        .then(response => response.json())
        .then(json_data => updateUserComment(json_data,this.dataset.pid));
}

function updateUserComment(json_data,post_id){
    let userComments = json_data;
    let div_comments = document.getElementById(`post_${post_id}_comments`);
    div_comments.innerHTML = ``;
    for(let comment of userComments){
        if(comment.postId != post_id) continue;
        div_comments.innerHTML += `
            <div class="post_comment">
                <p><strong>name: ${comment.name} - email: ${comment.email}</strong></p>
                <p><em>${comment.body}</p>
            </div>`;
    }
}