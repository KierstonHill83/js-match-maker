var studentArray = [];
//var totNumStudents = prompt("What is the total number of students learning Javascript?");
  // if(totNumStudents > 0) {
  //   for(i = 0; i < totNumStudents; i++){
    function studentInfo () {
      var studentName = prompt("Please enter your full name.");
      var phoneNumber = "";
      while (phoneNumber.length < 10) {
       phoneNumber = prompt("Pleae enter your phone number.");
        if(phoneNumber.length < 10) {
          alert("Phone number is not valid.");
        }
      }
      var newStudentPhoneNum = phoneNumber.substr(0,3) + "-" + phoneNumber.substr(3,3) + "-" + phoneNumber.substr(6);
      var city = prompt("What city are you from?");
        studentArray.push({
          name: studentName,
          phone_number: newStudentPhoneNum,
          city: city
        });
  //   }
  // }
      // if(totNumStudents < 1) {
      //   alert("There are no students!");
      // }
    }
      studentInfo();
        while (confirm("Would you like to add another student?")) {
          studentInfo();
        }


var mentorArray = [];
// var totNumMentors = prompt("What is the total number of mentors?");
//   if(totNumMentors > 0) {
//     for(i = 0; i < totNumMentors; i++){
    function mentorInfo () {
      var mentorName = prompt("Please enter your name?");
      var mentorPhoneNumber = "";
      while (mentorPhoneNumber.length < 10) {
       mentorPhoneNumber = prompt("Pleae enter your phone number.");
        if(mentorPhoneNumber.length < 10) {
          alert("Phone number is not valid.");
        }
      }
      var newMentorPhoneNumber = mentorPhoneNumber.substr(0,3) + "-" + mentorPhoneNumber.substr(3,3) + "-" + mentorPhoneNumber.substr(6);
      var mentorCity = prompt("What city are you from?");
      mentorArray.push({
          name: mentorName,
          phone_number: newMentorPhoneNumber,
          city: mentorCity
      });
  //   }
  // }
  //     if(totNumMentors < 1) {
  //       alert("There are no mentors!");
  //     }
    }
     mentorInfo();
      while (confirm("Would you like to add another mentor?")) {
          mentorInfo();
      }


  alert("There are " + studentArray.length + " students.");
  for(j = 0; j < studentArray.length; j++) {
    alert("Student" + "\n" + "Name: " + studentArray[j].name  + "\n" + "Phone Number: " + studentArray[j].phone_number + "\n" + "City: "  + studentArray[j].city);
  }


  alert("There are " + mentorArray.length + " mentors.");
  for(x = 0; x < mentorArray.length; x++) {
    alert("Mentor" + "\n" + "Name: " + mentorArray[x].name  + "\n" + "Phone Number: " + mentorArray[x].phone_number + "\n" + "City: "  + mentorArray[x].city);
  }

  var matchCity = prompt("Please give a city name.");
    for(x = 0; x < mentorArray.length; x++) {
      if(matchCity === mentorArray[x].city) {
        alert("Mentor" + "\n" + "Name: " + mentorArray[x].name  + "\n" + "Phone Number: " + mentorArray[x].phone_number + "\n" + "City: "  + mentorArray[x].city);
      }
    }









