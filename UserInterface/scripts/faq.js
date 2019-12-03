// Automatic Slideshow - change image every 3 seconds

let myIndex = 0;
imgscroll();

function imgscroll() {
    let i;
    let x = document.getElementsByClassName("insuranceadv");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(imgscroll, 3000);
}

//Form Validation for FAQ

function sendQuestion() {
    let status = true;
    let Name = document.getElementById("Name").value;
    let nameRGEX = /^[a-z ,.'-]+$/i;

    let Email = document.getElementById("Email").value;
    let emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let Phone = document.getElementById("Phone").value;
    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    let Question = document.getElementById("Ques").value;
    let questionRGEX = /^[a-z ,A-Z,.'-]+$/i;

    let nameresult = nameRGEX.test(Name);
    let emailresult = emailRGEX.test(Email);
    let phoneresult = phoneRGEX.test(Phone);
    let questionresult = questionRGEX.test(Question);

    if (Name == '') {
        document.getElementById("Name").style.borderColor = "red";
        status = false;
    } else if (Name != '') {
        document.getElementById("Name").style.borderColor = "white";
    }

    if (Email == '') {
        document.getElementById("Email").style.borderColor = "red";
        status = false;
    } else if (!Email.match(emailRGEX)) {
        document.getElementById("Email").style.borderColor = "red";
        document.getElementById("report_email_error").innerHTML = "Please enter valid email";
        document.getElementById("report_email_error").style.color = "red";
        status = false;
    } else if (Email != '') {
        document.getElementById("Email").style.borderColor = "white";
        document.getElementById("report_email_error").innerHTML = "";
        status = false;
    }
    if (Phone == '') {
        document.getElementById("Phone").style.borderColor = "red";
        status = false;
    } else if (!Phone.match(phoneRGEX)) {
        document.getElementById("Phone").style.borderColor = "red";
        document.getElementById("report_phone_error").innerHTML = "Please enter valid phone";
        document.getElementById("report_phone_error").style.color = "red";
        status = false;
    } else if (Phone != '') {
        document.getElementById("Phone").style.borderColor = "white";
        document.getElementById("report_phone_error").innerHTML = "";
        status = false;
    }
    if (Question == "") {
        document.getElementById("Quest").style.borderColor = "red";
        status = false;
    } else if (Question != "") {
        document.getElementById("Ques").style.borderColor = "white";
    }

}

//Form Validation for Contact us

function sendContact() {
    let status = true;
    let Name = document.getElementById("Name").value;
    let nameRGEX = /^[a-z ,.'-]+$/i;

    let Email = document.getElementById("Email").value;
    let emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let Phone = document.getElementById("Phone").value;
    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    let Message = document.getElementById("Msg").value;
    let messageRGEX = /^[a-z ,A-Z,.'-]+$/i;

    let nameresult = nameRGEX.test(Name);
    let emailresult = emailRGEX.test(Email);
    let phoneresult = phoneRGEX.test(Phone);
    let messageresult = messageRGEX.test(Message);

    if (Name == '') {
        document.getElementById("Name").style.borderColor = "red";
        status = false;
    } else if (!Name.match(nameRGEX)) {
        document.getElementById("Name").style.borderColor = "red";
        document.getElementById("report_name_error").innerHTML = "Please enter valid name";
        document.getElementById("report_name_error").style.color = "red";
        status = false;
    } else if (Name != '') {
        document.getElementById("Name").style.borderColor = "white";
        document.getElementById("report_name_error").innerHTML = "";
        status = false;
    }


    if (Email == '') {
        document.getElementById("Email").style.borderColor = "red";
        status = false;
    } else if (!Email.match(emailRGEX)) {
        document.getElementById("Email").style.borderColor = "red";
        document.getElementById("report_email_error").innerHTML = "Please enter valid email";
        document.getElementById("report_email_error").style.color = "red";
        status = false;
    } else if (Email != '') {
        document.getElementById("Email").style.borderColor = "white";
        document.getElementById("report_email_error").innerHTML = "";
        status = false;
    }
    if (Phone == '') {
        document.getElementById("Phone").style.borderColor = "red";
        status = false;
    } else if (!Phone.match(phoneRGEX)) {
        document.getElementById("Phone").style.borderColor = "red";
        document.getElementById("report_phone_error").innerHTML = "Please enter valid phone";
        document.getElementById("report_phone_error").style.color = "red";
        status = false;
    } else if (Phone != '') {
        document.getElementById("Phone").style.borderColor = "white";
        document.getElementById("report_phone_error").innerHTML = "";
        status = false;
    }
    if (Message == "") {
        document.getElementById("Msg").style.borderColor = "red";
        status = false;
    } else if (Message != "") {
        document.getElementById("Msg").style.borderColor = "white";
    }

}