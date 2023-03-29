document.getElementById("submitbtn").addEventListener("click", function(e){
    const name = document.getElementById("username").value;
    const email= document.getElementById("email").value;
    const phone= document.getElementById("number").value;
    const password= document.getElementById("password").value;

    if(name==="" || email==="" || phone==="" || password===""){
        alert("Please fill in all fields");
        e.preventDefault();
    } else{
        alert("Form has been submitted successfully");
    }
}
)