var butterflyEffect = document.querySelector(".butterfly-effect");
var lesIntouchables = document.querySelector(".les-intouchables");
var littleMissSunshine = document.querySelector(".little-miss-sunshine");
var spiritedAway = document.querySelector(".spirited-away");
var toyStory = document.querySelector(".toy-story");
var trumanShow = document.querySelector(".truman-show");

butterflyEffect.addEventListener("click", makeInfoAppear);
lesIntouchables.addEventListener("click", makeInfoAppear);
littleMissSunshine.addEventListener("click", makeInfoAppear);
spiritedAway.addEventListener("click", makeInfoAppear);
toyStory.addEventListener("click", makeInfoAppear);
trumanShow.addEventListener("click", makeInfoAppear);

function makeInfoAppear(event) {
  event.preventDefault();
  var clickedMovie = event.target;
  var movieID = clickedMovie.id
  var url = "http://omdbapi.com/?i=" + movieID;

  $.get(url, displayResults);
}

  function displayResults(results) {
    var movieTitle = document.querySelector("#movie-title");
    var movieYear = document.querySelector("#movie-year");
    var movieRating = document.querySelector("#movie-rating");
    var movieRuntime = document.querySelector("#movie-runtime");
    var moviePlot = document.querySelector("#movie-plot");

    movieTitle.textContent = results.Title;
    movieYear.textContent = results.Year;
    movieRating.textContent = results.Rated;
    movieRuntime.textContent = results.Runtime;
    moviePlot.textContent = results.Plot;
  }
