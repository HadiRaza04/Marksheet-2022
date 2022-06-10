var a = "This is for Science Group";
alert(a);

var name1 = prompt("Enter your name").toLocaleUpperCase();
document.getElementById("userName").innerText = name1;

var name2 = prompt("Enter your Father name").toLocaleUpperCase();
document.getElementById("userName2").innerText = name2;

var name3 = prompt("Enter your Roll no");
document.getElementById("rollno").innerText = name3;

var name4 = prompt("Enter your Date of Birth");
document.getElementById("dateOfBirth").innerText = name4;

var name5 = prompt("Enter your Annual Examination Year");
document.getElementById("annual").innerText = name5;

var name6 = prompt("Enter your School name").toLocaleUpperCase();
document.getElementById("school").innerText = name6;

var name7 = prompt("Enter your Sindhi marks, Max-marks is 75");
document.getElementById("sindhimarks").innerText = name7;
document.getElementById("sindhimarks2").innerText = name7;

var name8 = prompt("Enter your Urdu marks, Max-marks is 75");
document.getElementById("urdumarks").innerText = name8;
document.getElementById("urdumarks2").innerText = name8;

var name9 = prompt("Enter your English I marks, Max-marks is 75");
document.getElementById("englishImarks").innerText = name9;
document.getElementById("englishImarks2").innerText = name9;

var name10 = prompt("Enter your English II marks, Max-marks is 75");
document.getElementById("englishIImarks").innerText = name10;
document.getElementById("englishIImarks2").innerText = name10;

var name11 = prompt("Enter your Pakistan Studies marks, Max-marks is 75");
document.getElementById("pstmarks").innerText = name11;
document.getElementById("pstmarks2").innerText = name11;

var name12 = prompt("Enter your Islamiat Studies marks, Max-marks is 75");
document.getElementById("islmarks").innerText = name12;
document.getElementById("islmarks2").innerText = name12;

var name19 = prompt("Enter your Mathematics marks, Max-marks is 100");
document.getElementById("mathsmarks").innerText = name19;
document.getElementById("mathsmarks2").innerText = name19;

var name13 = prompt("Enter your Computer marks, Max-marks is 75");
document.getElementById("computermarks").innerText = name13;

var name14 = prompt("Enter your Computer Practical marks, Max-marks is 25");
document.getElementById("computerpracmarks").innerText = name14;

var computerTotal = parseInt(name13) + parseInt(name14);
document.getElementById("comptotalmarks").innerText = computerTotal;

var name15 = prompt("Enter your Chemistry marks, Max-marks is 85");
document.getElementById("chemistrymarks").innerText = name15;

var name16 = prompt("Enter your Chemistry Practical marks, Max-marks is 15");
document.getElementById("chemistrypracmarks").innerText = name16;

var chemistryTotal = parseInt(name15) + parseInt(name16);
document.getElementById("chemtotalmarks").innerText = chemistryTotal;

var name17 = prompt("Enter your Physics marks, Max-marks is 85");
document.getElementById("physicsmarks").innerText = name17;

var name18 = prompt("Enter your Physics Practical marks, Max-marks is 15");
document.getElementById("physicspracmarks").innerText = name18;

var physicsTotal = parseInt(name17) + parseInt(name18);
document.getElementById("phytotalmarks").innerText = physicsTotal;

var addTotalNumber = parseInt(name7) + parseInt(name8) + parseInt(name9) + parseInt(name10) + parseInt(name11) + parseInt(name12) + parseInt(name13) + parseInt(name14) + parseInt(name15) + parseInt(name16) + parseInt(name17) + parseInt(name18) + parseInt(name19);
document.getElementById("TotalMarks").innerText = addTotalNumber;

if(addTotalNumber > 680) {
    document.getElementById("gradeyouget").innerText = "A+";
}
else if (addTotalNumber < 680 && addTotalNumber > 595 ){
    document.getElementById("gradeyouget").innerText = "A";
} 
else if (addTotalNumber < 595 && addTotalNumber > 510){
    document.getElementById("gradeyouget").innerText = "B";
}
else if (addTotalNumber < 510 && addTotalNumber > 425){
    document.getElementById("gradeyouget").innerText = "C";
}
else if (addTotalNumber < 425 && addTotalNumber > 340){
    document.getElementById("gradeyouget").innerText = "D";
}
else if (addTotalNumber < 340 && addTotalNumber > 255){
    document.getElementById("gradeyouget").innerText = "E";
}
else {
    document.getElementById("gradeyouget").innerText = "Fail";
}


document.getElementById("dateofissue").innerHTML = Date();



