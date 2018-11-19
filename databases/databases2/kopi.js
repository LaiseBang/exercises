window.addEventListener("load", initList);
const endpoint = "https://5bea7942b854d10013109247.mockapi.io/sm/v1/";

//let userJson;
//getData();
//getDataStatusses();
/* function getData() {
  fetch(endpoint + `/users`)
    .then(res => res.json())
    .then(displayUsers);
}
 */
function initList() {
  //try to show statusses

  //inLoggedIn?
  //yes: showStatusses
  //no: showSignInUp

  if (isLoggedIn()) {
    showStatusses();
  } else {
    showSignInUp();
  }
}

function isLoggedIn() {

  // figure out if user is logged in or not
  const loggedIn = sessionStorage.getItem('loggedin') == 'true';
  console.log(loggedIn);
  return loggedIn;
}


function showSignInUp() {
  const clone = document.querySelector("#sign_in_top").content.cloneNode(true);

  document.querySelector("header").innerHTML = "";
  document.querySelector("header").appendChild(clone);
  document.querySelector("header .sign_in").addEventListener("click", loginForm);
  document.querySelector("header .sign_up").addEventListener("click", signUpForm);

}

function hideSignInUp() {
}

function loginForm() {
}

function correctUser() {
  console.log("Correct User");
  //get value of inputname (username)
  const username = document.querySelector("#username").value;
  let user = null;

  //get user with that name from database
  fetch(endpoint + "users?search=" + username, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      // - get the list of users
      if (data.length !== 0) {
        // - loop trhough and find one with this nam
        data.forEach(aUser => {
          if (aUser.name === username) {
            console.log("Found user " + username);
            user = auser;
          }
        })
      }
      //REMEMBER: Do this AFTER looping, but inside the then....
      if (user !== null) {
        // if found: doLogin()
        doLogin();
      }
    }
    )
  // else error message
}

function doLogin() {

  //TODO Remmeber login
  sessionStorage.setItem('loggedin', 'true')


  showStatusses();
}
function signUpForm() {

}

/* function displayUsers(data) {
  console.log(data);
  data.forEach(function (user) {
    const clone = document.querySelector("#templateUser").content.cloneNode(true);
    clone.querySelector("h2").textContent = user.name;
    clone.querySelector("p").textContent = user.ID;
    document.querySelector(".userReciever").appendChild(clone);
  })
} */


//Statusses
function showStatusses() {
  fetch(endpoint + `statusses`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      data.forEach(CreateStatussesInfo)
    });
}

function CreateStatussesInfo(statusData) {
  const clone = document.querySelector("#templateStatus").content.cloneNode(true);

  //console.log(statusData);

  clone.querySelector(".status").textContent = statusData.text;
  clone.querySelector(".statusId").dataset.statusid = statusData.id;
  clone.querySelector(".userId").dataset.userid = statusData.userID;

  let userID = statusData.userID;
  //find userid for statussen fetch en user med det ID og display den
  //console.log(userID);

  fetch(endpoint + `users?search=` + userID, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.length !== 0) {
        const user = data[0];
        clone.querySelector(".userName").textContent = user.name;
      } else {
        console.log("NO USER WITH ID " + userID);
      }
      document.querySelector(".statusReciever").appendChild(clone);
    });



}


//let button = document.querySelector("button");
//button.addEventListener("click", init);
// function sends user to mockAPI when button is clicked
/*function init() {
const e = {
name: "Laise Bang",
id: "1808"
};

fetch(`https://5bea7942b854d10013109247.mockapi.io/sm/v1/users`, {
method: "post",
body: JSON.stringify(e),
headers: {
  Accept: "application/json",
  "Content-Type": "application/json"
}
})
 .then(res => res.json())
.then(d => { });
 
//}*/

// this sends a post to the mock API when button is clicked 
let button = document.querySelector("button");
button.addEventListener("click", init);
function init() {
  const e = {
    text: "Laise Bang posted this, again",
    userID: "1808"
  };

  fetch(`https://5bea7942b854d10013109247.mockapi.io/sm/v1/statusses`, {
    method: "post",
    body: JSON.stringify(e),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => { });

} 