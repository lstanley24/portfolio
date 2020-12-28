
// sub-menu functionality

let filterButtonContainer = document.getElementById("filter-buttons");

let filterButton = filterButtonContainer.getElementsByClassName("sort-button");

for (let i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



$("#load-more-features-button").on("click", function () {

  $(".load-more-features").show();
  $("#flex-rows").css('display', 'flex');
  $("#load-more-features-button").hide();
})  

$("#load-more-reviews-button").on("click", function () {

  $(".load-more-reviews").show();
  $("#flex-rows").css('display', 'flex');
  $("#load-more-reviews-button").hide();
})  

$("#features-sort").on("click", function () {

  $("#reviews").hide();
  $(".load-more-reviews").hide();
  $(".load-more-reviews-button").hide();
  $("#features").show();
  $("#load-more-features-button").show();
})  

$("#reviews-sort").on("click", function () {

  $("#features").hide();
  $(".load-more-features").hide();
  $("#load-more-features-button").hide();
  $("#reviews").show();
  $("#load-more-reviews-button").show();
})  
