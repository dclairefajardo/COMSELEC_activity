 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"	

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhCbZ5IeShYGB9KHLH9wIM7Eg5oXW9pU",
  authDomain: "form-validation-99e55.firebaseapp.com",
  databaseURL: "https://form-validation-99e55-default-rtdb.firebaseio.com",
  projectId: "form-validation-99e55",
  storageBucket: "form-validation-99e55.appspot.com",
  messagingSenderId: "315431844443",
  appId: "1:315431844443:web:c54f91c9508a680a241d7e",
  measurementId: "G-JT0W46H6YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

//import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";



var stud_id1 = document.getElementById("stud_id");
var position1 = document.getElementById("position");
var fname1 = document.getElementById("fname");
var lname1 = document.getElementById("lname");
var mn1 = document.getElementById("mn");
var extension1 = document.getElementById("extension");
var course1 = document.getElementById("course");
var year1 = document.getElementById("year");
var sec1 = document.getElementById("sec");
var email1 = document.getElementById("email");
var no_yr1 = document.getElementById("no_yr");
var units1 = document.getElementById("units");
var average1 = document.getElementById("average");
var file1 = document.getElementById("file");
var submit1 = document.getElementById('submit');


//function InsertData() {
window.InsertData = function() {
	
	let stud_id = document.getElementById("stud_id").value
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let pos = document.getElementById("position").value;
	let yr = document.getElementById("year").value;
	let email = document.getElementById("email").value;
	let sec = document.getElementById("sec").value;
	let mn = document.getElementById("mn").value;
	let extension = document.getElementById("extension").value;
	let no_yr = document.getElementById("no_yr").value;
	let course = document.getElementById("course").value;
	let units = document.getElementById("units").value;
	let average = document.getElementById("average").value;
	let photo = inserted_file.files[0];
	
	var list1 = [];
	var list2 = [];
	var list3 = [];
	var list4 = [];
	var list5 = [];
	var list6 = [];
	if (stud_id != "" || fname != "" || pos != "" || yr != "" || email != "" || sec != "" || no_yr != "" || course != "" || units != ""
		|| average != ""){
			if (stud_id.length != 12){
				alert("Student ID must be 12 character length ex: TUPC-21-0136");
			} else {
				if (fname <= 1 || lname <= 1){
					alert("Required character for FirstName and LastName must be greater than or equal to one character length");
				} else {
					if (units < 15){
						alert("Current Units must not be less than 15 units during this semester");
					} else  {
						if (average > 2.50) {
							alert("Your previous average grade during last semester must be atleast 2.50");
						} else {
							if (no_yr < 1){
								alert("Years of residency in the campus must be atleast 1 academic year");
							} else {
								set(ref(db, "DATA/" + stud_id1.value), {
								StudentID: stud_id1.value,
								POSITION: position1.value,
								FirstName: fname1.value,
								LastName: lname1.value,
								MiddleName: mn1.value,
								NameExtension: extension1.value,
								COURSE: course1.value,
								YearLevel: year1.value,
								Section: sec1.value,
								Email: email1.value,
								YearsinTUPC: no_yr1.value,
								TotalNoofUnits: units1.value,
								Average: average1.value,
								Photo: file1.value,
							  })
							  .then(()=>{
								alert(`Student ${stud_id} submitted his Pre-Application Form, you may check the list of applicants for confirmation`);
							  })
							  .catch((error)=>{
								alert("Unsuccessful, error:"  + error);
							  });
								var n = 1;
								var x = 0;

								var AddRown = document.getElementById('show');
								var NewRow = AddRown.insertRow(n);

								list1[x] = stud_id;
								list2[x] = fname + " "+ mn[0] +". " + lname + " " + extension;
								list3[x] = pos;
								list4[x] = course + "-" + yr + "-" + sec;
								list5[x] = email;

								var cel1 = NewRow.insertCell(0);
								var cel2 = NewRow.insertCell(1);
								var cel3 = NewRow.insertCell(2);
								var cel4 = NewRow.insertCell(3);
								var cel5 = NewRow.insertCell(4);
								var cel6 = NewRow.insertCell(5);

								cel1.innerHTML = list1[x];
								cel2.innerHTML = list2[x];
								cel3.innerHTML = list3[x];
								cel4.innerHTML = list4[x];
								cel5.innerHTML = list5[x];
								
								var reader = new FileReader();
								reader.onload = function(e){
									var img = document.createElement("img");
									img.src = e.target.result;
									img.width = 200;
									cel6.appendChild(img);
								}
								reader.readAsDataURL(photo);

								n++;
								x++;
									
								document.getElementById("stud_id").value = "";
								document.getElementById("fname").value = "";
								document.getElementById("lname").value = "";
								document.getElementById("year").value = "";
								document.getElementById("email").value = "";
								document.getElementById("sec").value = "";
								document.getElementById("units").value="";
								document.getElementById("no_yr").value="";
								document.getElementById("average").value="";
								document.getElementById("file").src="./imgs/empty_pic.jpg";
							}
						}
					}
				}
			}
					
	} else {
		alert("Please complete the necessary information before submitting");
	}
}

submit1.addEventListener("click", InsertData);



