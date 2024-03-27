/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
//	document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0px";
//	document.getElementById("main").style.marginLeft = "0px";
  }
  
  function not_available () {
	  alert("This function is not yet Available");
  }

  const dialog_form = document.getElementById("dialog_form");
  const dialogbox_candidate = document.getElementById("dialog_candidate");
  const dialog_qualification = document.getElementById("dialog_qualification");
  const dialog_mission = document.getElementById("dialog_mission");
  const dialog_vision = document.getElementById("dialog_vision");
  const dialog_about = document.getElementById("dialog_about");
  const dialog_faqs = document.getElementById("dialog_faqs");
  
  function open_form(){
      dialog_form.open = true;
  }
  function close_form(){
      dialog_form.open = false;
  }
  function open_candidate(){
      dialogbox_candidate.open = true;
  }
  function close_candidate() {
      dialogbox_candidate.open = false;
  }
  function open_qualification() {
      dialog_qualification.open = true;
  }
  function close_qualification() {
      dialog_qualification.open = false;
  }
  function open_mission() {
      dialog_mission.open = true;
  }
  function close_mission() {
      dialog_mission.open = false;
  }
  function open_vision() {
      dialog_vision.open = true;
  }
  function close_vision() {
    dialog_vision.open = false;
  }
  function open_about() {
    dialog_about.open = true;
  }
  function close_about() {
    dialog_about.open = false;
  }
  function open_faqs() {
    dialog_faqs.open = true;
  }
  function close_faqs() {
    dialog_faqs.open = false;
  }
  
  let photo = document.getElementById("profile_pic");
  let inserted_file = document.getElementById("file");
  
  inserted_file.onchange = function(){
      photo.src = URL.createObjectURL(inserted_file.files[0]);
  } 