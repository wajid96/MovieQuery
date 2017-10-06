var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "The Avengers”, year: “2012", length: 158, rating: "8.1", genre: "sci-fi" }
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}

var newMovie = {title: "Baby Driver”, year: “2017", length: 119, rating: "6.9", genre: "action"};
console.log(addMovie(newMovie));

function movieByRating(){
  movieList.sort(function(a, b){
    return (b.rating)-(a.rating);
  });
  return movieList;
}

console.log(movieByRating());

function findByTitle( title ){
  var searchedMovie = [];
  movieList.map(function(movie){
    if(movie.title.toLowerCase().includes(title)){
    searchedMovie.push(movie);
    }
  });
  return searchedMovie;
}

console.log(findByTitle("matrix"));
