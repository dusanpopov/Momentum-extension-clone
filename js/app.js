const time = document.querySelector(".time");
const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");
const focus = document.querySelector(".focus");

const displayCurrentTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if(hour >= 12)

    hour = hour
    hour = `${hour < 10 ? "0" : ""}${hour}`;
    minutes = `${minutes < 10 ? "0" : ""}${minutes}`;
    seconds = `${seconds < 10 ? "0" : ""}${seconds}`;

    let currentTime = `${hour}:${minutes}:${seconds}`;
    time.textContent = currentTime;

    setTimeout(displayCurrentTime, 1000);
}


const setBackgroundAttributes = () =>{
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

const setBackgroundAndGreet = () =>{
    let today = new Date();
    let hourOfTheDay = today.getHours();

    if (hourOfTheDay < 12){
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        setBackgroundAttributes();
        greeting.textContent = "Good morning";

    } else if (hourOfTheDay < 18){
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        setBackgroundAttributes();
        greeting.textContent = "Good afternoon";
    } else {
        document.body.style.backgroundImage = "url(../img/evening.jpg)" ;
        setBackgroundAttributes();
        greeting.textContent = "Good evening";
    }
}

const getName = () =>{
    if(localStorage.getItem("name") === null){
        name.textContent = "[Enter name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

const setName = (e) =>{
    if(e.type === "keypress"){
        if(e.keyCode === 13){
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

const getFocus = () =>{
    if(localStorage.getItem("focus") === null){
        focus.textContent = "[Enter focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

const setFocus = (e) =>{
    if(e.type === "keypress"){
        if(e.keyCode === 13){
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

displayCurrentTime();
setBackgroundAndGreet();
getName();
getFocus();
