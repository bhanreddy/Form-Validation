let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message"); 
let emptyFields = document.querySelectorAll(".empty-field")
let firstName, lastName , email , password;
let showPasswordBtn = document.querySelector(".btn");

let field;
let fnTarget,lnTarget,emailTarget,passwordTarget;
let fnFlag, lnFlag ,eFlag,pFlag;
let nameRegex= /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/;


for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let emptyField of emptyFields){
    emptyField.classList.add("d-none");
}

formData.addEventListener("keyup",(event)=>{
    event.preventDefault();
    field = event.target.dataset.key;
    switch (field){
        case "firstName":
            firstName = event.target.value;
            fnTarget=event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget =event.target;
            break;
        case "password":
            password = event.target.value;
            passwordTarget =event.target;
            break;
        default:
            firstName=lastName=email=password = "";
    }
    
})

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        emptyFields[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag = false;
        }else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag = true;
        }
    }else{
        emptyFields[0].classList.remove("d-none");
    }
    if(lastName){
        emptyFields[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag = true;
        }
    }else{
        emptyFields[1].classList.remove("d-none");
    }
    if(email){
        
        emptyFields[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            eFlag = false;
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");

        }else{
            eFlag = true;
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
        }
    }else{
        emptyFields[2].classList.remove("d-none");
    }
    if(password){
        emptyFields[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            pFlag = false;
            passwordTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
        }else{
            pFlag = true;
            passwordTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
        }
    }else{
        emptyFields[3].classList.remove("d-none");
    }

    if(fnFlag && lnFlag && eFlag && pFlag){
        window.location.href = "/success.html";
    }
});


showPasswordBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (passwordTarget.getAttribute("type") === "text") {
        passwordTarget.setAttribute("type", "password");
    } else {
        passwordTarget.setAttribute("type", "text");
    }
});
