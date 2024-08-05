/*
function gradingSystem(){
    let marks = prompt('Enter your grade')

    if( marks >= 80 && marks <= 100) {
        alert('Your Grade is A*')
    }
    else if( marks > 60 && marks < 80 ){
        alert('Your Grade is A')
    }

    else if( marks > 44 && marks < 51 ){ 
        alert(' Your Grade is D')

    }
    else if (marks > 50 && marks < 61){ 
        alert(' Your Grade is C')

    }
    else if (marks > 100){
         alert(' Error')

    }
    else {
         alert(' Your Grade is Ungraded')

    }
}
// created a dictonary of users 

const users ={
    user1:{
        username :'a1',
        password :'a1password'
    },
    user2:{
        username :'b2',
        password :'b2password'
},
    user3:{
        username :'c3',
        password :'c3password'
    }
 }

 /*
 //This function compares username and password to the dictonary
function loginForm(){
    let usernameValue = document.getElementById('username').Value;
    let passwordValue = document.getElementById('password').value;

    let inputvalue = {
        username : `${usernameValue}`,
        password : `${passwordValue}`
    }
    if( inputvalue['username'] == "" || inputvalue['password'] == ""){
        alert('Login first')
    }
     else{
        try { 
        for(let user in users){
            if(users[user]['username'] == inputvalue['username'] && users[user]['password'] == inputvalue['password']){
                alert(`welcome ${usernameValue}`)
            }
            else if(users[user]['username'] != inputvalue['username'] || users[user]['password'] != inputvalue['password']){
                alert('Username or Password is incorrect')
            }
        }
    }
    catch(err){
        alert(`${usernameValue}`)
    }
        
    }
    
    return false
} 
console.warn('code not working')
console.debug()



function loginForm(){
    let passwordValue = document.getElementById("password").value;
    let usernameValue = document.getElementById("username").value; 

    let inputValue = {username: `${usernameValue}`,
     password: `${passwordValue}`}
   
    if(inputValue["username"] == '' || inputValue["password"] == ''){
     alert("Kindly login first")
    }
     else{
        for(let user in users){
            if(users[user]["username"] == inputValue["password"]  && users[user]["password"] == inputValue["password"]){
            alert(`Welcome ${usernameValue}`)
        }
            
             else if(users[user]["username"] != inputValue["username"] || users[user]["password"] != inputValue["password"]){
            
            alert("Incorrect username or password")
            }
        }
    }
return false;
}
*/

let userName = ['morgan','fiona','kristoffer','stella']

for(let i = 0; i < userName.length; i++ ){
    console.log(userName[i])
}

let myAge = 13
while(myAge < 18){
    console.log('you need parental consent')
    myAge++
}

let drinks =['sprite','fanta','tea','milk',]
for(drink of drinks){
   console.log(drink)
    }


let videosContainer = document.getElementsByClassName("videos");
console.log(videosContainer[1])
for(i = 0;i < videosContainer.length;i++){
    console.log(videosContainer[i])
    console.log(videosContainer[i].children)
    console.log(videosContainer[i].firstElementChild)
}

let gif = document.getElementById('gifvideo');
console.log(gif)
console.log(gif.nextElementSibling)

let allGif = document.getElementsByTagName('iframe');
console.log(allGif)

let htmlContainer = document.getElementById('view')
let jsContainer = document.createElement('div');
console.log(jsContainer)
jsContainer.innerHTML = 'hey i am here';
//jsContainer.textContent = 'hey i am also here';
//jsContainer.innerText = 'hiiiiii'
htmlContainer.appendChild(jsContainer)




let my_list = document.getElementById('mylist')
let add1 = document.createElement('li')
add1.innerHTML = 'i am in the list'
my_list.appendChild(add1)

let test5 = document.getElementById('test5')
test5.innerHTML = 'i adjfkajdkfjsa here'
test5.remove()



