var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("resume-icon");
var modalImg = document.getElementById("img01");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};
