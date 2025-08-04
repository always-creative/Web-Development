let istatus = document.querySelector("h5");
let btn = document.getElementById("add");
let check = 0;
btn.addEventListener("click", () => {
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove";
        check = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "black";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
})
