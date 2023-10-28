let btn = document.getElementById("submitBtn");
let email = document.getElementById("email");
let img = document.getElementById("img");

btn.addEventListener('click',submitClicked);
img.addEventListener('select',selectemail);
function submitClicked(e){
    console.log('submit button is clicked send information to server');

}
function selectemail(e){
    console.log("You selected some text!");
}
email.addEventListener('input' , (e) =>{
    console.log(e.target.value);
});
img.addEventListener("mouseover", (e) =>{
    img.src = "img/developer.jpg"
} );
 email.addEventListener('blur' ,(e) =>{
    alert("Input field");

 }); 