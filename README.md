# MovieQuery
Use this movie list to complete the tasks:

```javascript
movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];
```

### Task 1
Create a function named **getMovieTitle( index )** that will return the movie title at the given index.

### Task 2
Modify the **movieList** to add a new movie of your choice.

### Task 3
Create a function named **addMovie( movie )** that will add a new movie to the movieList and return the updated movieList.

### Task 4
Create a function named **movieByRating()** that will sort the movie list by rating in descending order and return the sorted movieList.

### Task 5
Create a function named **findByTitle( title )** that will return an array of matching movies for the searched title. A partial text search is applicable, for example - findByTitle(“matrix”) should return:
```javascript
[ { title: 'The Matrix Revolutions’, year: '2003', length: 129, rating: ‘6.7', genre: 'sci-fi' },   { title: 'The Matrix Reloaded', year: ‘2003', length: 138, rating: ‘7.2', genre: 'sci-fi' } ]
```
