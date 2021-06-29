const getStartedBtn = document.querySelector(".mainCopyAndCta button")
const copyAndCta = document.querySelector(".mainCopyAndCta")
const hero = document.getElementById("hero")
const navToggle = document.querySelector(".showNav")
const mobileLinks = document.querySelector(".mobile-links")
const closeNav = document.querySelector(".closeNav")


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDGr1iRf7qIA07NraPO46cPR55KJCIP_bM",
    authDomain: "landingpage-cf490.firebaseapp.com",
    projectId: "landingpage-cf490",
    storageBucket: "landingpage-cf490.appspot.com",
    messagingSenderId: "844044880650",
    appId: "1:844044880650:web:58950e72cc8710be0e48f3",
    measurementId: "G-SV4E0R1TYL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();


getStartedBtn.addEventListener("click", e =>{
    copyAndCta.remove()
    hero.insertAdjacentHTML('afterbegin',
     `<form action="#" id="form">
    <div class="userName">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div class="userEmail">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
    </div>
   
    <button type="submit">Submit</button>
</form>`);
let form = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault()
    getInput();
    
    clearInputFields();
    setTimeout(removeSuccess, 3000)
    
})
})


const getInput = () =>{
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let nameInput = userName.value;
    let emailInput = userEmail.value;

    
    db.collection("Entries").add({
        name: nameInput,
        email: emailInput
    })
    .then((docRef) => {
        success()
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

clearInputFields = ()=>{
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    
    userName.value = "";
    userEmail.value = "";
}

const success = ()=>{
    form.insertAdjacentHTML("afterbegin",
    `<p class="success">Information Successfully Sent</p>`)
}

const removeSuccess = ()=>{
    successIndicator = document.querySelector(".success")
    successIndicator.remove()
}


navToggle.addEventListener("click", ()=>{
    mobileLinks.style.display = "flex";
    navToggle.style.display = "none";
    closeNav.style.display = "flex";
})

closeNav.addEventListener("click", e=>{
    mobileLinks.style.display = "none";
    navToggle.style.display = "flex";
    closeNav.style.display = "none";
})













    









