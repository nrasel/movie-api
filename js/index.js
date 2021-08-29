fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
.then(res=>res.json())
.then(data=>disPlayMovie(data.results))


const disPlayMovie=(movies)=>{
    const movieContainer=document.getElementById('movie-container')
    movies.forEach(movie => {
        const div=document.createElement('div')
        div.classList.add('col-md-3')
        const url=`https://image.tmdb.org/t/p/original/${movie.poster_path}`
        div.innerHTML=`
        <div class="shadow rounded p-3">
            <img class="img-fluid mb-4" src="${url}" alt="">
            <h5>${movie.title}</h5>
            <p>${movie.overview.slice(0,100)}</p>
            <button onclick="setMovieDetails(${movie.id})" class="btn btn-primary">See Details</button>
        </div>
        `
        movieContainer.appendChild(div)
    });
}

const setMovieDetails=(id)=>{
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`
    fetch(url)
    .then(res=>res.json())
    .then(data=>disPlayMovieDetails(data))
}

const disPlayMovieDetails=(movie)=>{
    console.log(movie);
    const movieDetails=document.getElementById('movie-details')
    movieDetails.textContent=''
    const div=document.createElement('div')
    div.classList.add('col-md-3')
    const url=`https://image.tmdb.org/t/p/original/${movie.poster_path}`
    div.innerHTML=`
    <div class="shadow rounded p-3">
        <img class="img-fluid mb-4" src="${url}" alt="">
        <h5>${movie.title}</h5>
        <p>${movie.overview.slice(0,100)}</p>
        <p>${movie.original_title}</p>
        <p>${movie.release_date}</p>
    </div>
    `
    movieDetails.appendChild(div)
    
}