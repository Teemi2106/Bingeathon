async function movieGrid() {
  const url = "movies.json";
  const request = new Request(url);
  const response = await fetch(request);
  const movieList = await response.json();

  movies(movieList);
}

function movies(movieList) {
  const section = document.getElementById("movies");

  section.innerHTML = "";

  movieList.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movieContainer";

    const image = document.createElement("img");
    image.className = "movieImage";
    image.src = movie.Image;

    const movieName = document.createElement("h3");
    movieName.textContent = movie.Name;

    movieContainer.appendChild(image);
    movieContainer.appendChild(movieName);

    section.appendChild(movieContainer);
  });
}

movieGrid();

async function showGrid() {
  const url = "shows.json";
  const request = new Request(url);
  const response = await fetch(request);
  const showList = await response.json();

  shows(showList);
}

function shows(showList) {
  const section = document.getElementById("shows");

  section.innerHTML = "";

  showList.forEach((show) => {
    const showContainer = document.createElement("div");
    showContainer.className = "showContainer";

    const image = document.createElement("img");
    image.className = "showImage";
    image.src = show.Image;

    const showName = document.createElement("h3");
    showName.textContent = show.Name;

    showContainer.appendChild(image);
    showContainer.appendChild(showName);

    section.appendChild(showContainer);
  });
}

showGrid();
