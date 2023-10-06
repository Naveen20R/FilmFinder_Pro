//* select the tag for add the content:
let div = document.querySelector('.movie-child')
let userData = document.getElementById('userData');
let footer = document.querySelector('.footer');


//* fetch the data:
async function demo(e) {
    
    try {
        footer.innerHTML = '';
        footer.style.border = 'none';
        let user = userData.value;
       div.innerHTML = '';
        e.preventDefault();     
        
        let movie = await fetch(`https://www.omdbapi.com/?s=${user}&apikey=d198c434`)
        let modb = await movie.json();
        console.log(modb);
        modb.Search == undefined?  div.innerHTML +=` <h2 class='error'>Movie not found!</h2> ` : null;
        modb.Search.map(({ Title, Poster, Year }) => {
            div.innerHTML += `
        <div class="col content-child">
        <div class="card image">
            <img src="${Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${Title}</h5>
              <p class="card-text">Year : ${Year}</p>
            </div>
          </div>
          </div>`
        })
    } catch (err) {
        console.log(err);
    }
}


let dafaultData = [
    {
        img: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        Title: 'Friends',
        year: '1994–2004'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg',
        Title: 'Just Friends',
        year: '2005'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BMjY0MzFmMDgtY2ZiOC00M2QyLWFmOWMtOTBmZWY4OWE2YTYzXkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg',
        Title: 'How to Lose Friends & Alienate People',
        year: '2008'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BODI0MzdhODAtNDMwNi00NGZlLTg1Y2YtN2M5ZGFmOThkZGM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        Title: 'Friends: The Reunion',
        year: '2021'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BMjIyMDI5ODkzNl5BMl5BanBnXkFtZTcwMTE4MzQzNw@@._V1_SX300.jpg',
        Title: 'Friends with Kids',
        year: '2011'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BMjE2NjIxODUxNF5BMl5BanBnXkFtZTgwMjI1MzM1NjE@._V1_SX300.jpg',
        Title: 'We Are Your Friends',
        year: '2015'
    }, {
        img: 'https://m.media-amazon.com/images/M/MV5BMjE3Mjc3NjQ5NV5BMl5BanBnXkFtZTYwMjY5MjE3._V1_SX300.jpg',
        Title: 'Friends with Money',
        year: '2006'
    },
]

function movieDefaultData(parameters) {
    dafaultData.map(({ Title, img, year }) => {
        div.innerHTML += `
        <div class="col content-child">
        <div class="card image">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${Title}</h5>
              <p class="card-text">Year : ${year}</p>
            </div>
          </div>
          </div>`
    })
}

movieDefaultData();