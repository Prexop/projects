let movies = [
  {
    name: "Avengers Endgame",
    poster:
      "https://artofthemovies.co.uk/cdn/shop/products/Avengers_Endgame_OneSheet_2_framed-222012.jpg?v=1611687759",
    rating: 8.7,
  },
  {
    name: "Top Gun Maverick",
    poster:
      "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f676b5811234c887ca62_top%20gun%20maverick-min.png",
    rating: 9.6,
  },
  {
    name: "Joker",
    poster:
      "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587.jpg?v=1579504979",
    rating: 8.9,
  },

  {
    name: "John Wick Chapter 4",
    poster:
      "https://imgc.allpostersimages.com/img/posters/john-wick_u-L-F7SH250.jpg",
    rating: 9.1,
  },

  {
    name: "Avatar",
    poster: "https://i.ebayimg.com/images/g/aZEAAOSw8uNjHFAC/s-l1200.jpg",
    rating: 9.5,
  },
  {
    name: "Spider-Man: Far From Home",
    poster: "https://i.pinimg.com/474x/4d/8e/ef/4d8eef71c4b70dcfdf2abeaca6e7f9c4.jpg",
    rating: 8.8,
  },
  {
    name: "Oppenheimer",
    poster: "https://i.ebayimg.com/images/g/CBkAAOSwDXJksxqv/s-l1200.jpg",
    rating: 9.0,
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ce75266-f939-47b3-a590-80b1285c0365/dg7h0sh-7d3ddc1b-2958-4a9d-8eb3-c71df28d94fa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljZTc1MjY2LWY5MzktNDdiMy1hNTkwLTgwYjEyODVjMDM2NVwvZGc3aDBzaC03ZDNkZGMxYi0yOTU4LTRhOWQtOGViMy1jNzFkZjI4ZDk0ZmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BqxBMug4DbZcTNEwcJwLoxPgTaL6yj1ONRnOoA0Cxz8",
    rating: 7.8,
  },
  {
    name: "LEO",
    poster: "https://static.moviecrow.com/gallery/20230921/221109-Leo%20Vijay%20Sanjay%20Dutt%20Poster.jpg", 
    rating: 9.0,
  }
];

function searchMovie()
{
  let movieName = document.getElementById("search").value;
  
  if(movieName!=="")
  {
    let result = movies.filter(function(movie)
    {
        return movie.name.toUpperCase().includes(movieName.toUpperCase())
    })
    displayMovies(result);
  }
  else{
    displayMovies(movies);
  }
}  



function displayMovies(data) 
{
//   let movie = document.createElement("div");
//   movie.classList.add("movie");

//   let overlay = document.createElement("div");
//   overlay.classList.add("overlay");

//   movie.appendChild(overlay);  


//   console.log(movie);
          
 

    document.getElementById("movies").innerHTML="";
                


    let htmlString = ``;    
    
    for(let i=0;i<data.length;i++)
    {
        htmlString=htmlString+`
        <div class="movie">

            <div class="overlay">

                <div class="video">

                </div>

                <div class="details">
                    
                    <h1>${data[i].name}</h1>
                    <h2>IMBD : ${data[i].rating}</h2>
                    <p>Keanu Reeves . Ian McShane . Lance Reddick . Laurence Fishburne </p>

                </div>
 
            </div>

            <img class="poster" src="${data[i].poster}" alt="poster">

        </div>`
    }

    console.log(htmlString);
    document.getElementById("movies").innerHTML=htmlString;
}

displayMovies(movies);
