function akanGhanaNaming() {
    let inputDate = document.getElementById("birthDate").value;
    let gender = document.getElementsByName("gender");
    let date = new Date(inputDate);
    let birthDate = date.getDay();
     

    // storing the names in an array format


    let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    
    // implementing the control flow

    
    if (document.getElementById("genderMale").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML =
         "In accordance to your dob and gender, your name is: " + "<em>" +
         maleAkan[birthDate] + "</em>";

        }
    else if(document.getElementById("genderFemale").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML = 
        "In accordance to your dob and gender, your name is: " + "<em>" +
         femaleAkan[birthDate] + "</em>";

        }

}
    

