const searchInput = document.getElementById('searchInput');
const resultArtist = document.getElementById('resultArtist')
const resultPlaylist = document.getElementById('resultPlaylist')

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden')
  const artistName = document.getElementById('artistName')
  const artistImg = document.getElementById('artistImg')

  result.forEach(element => {
    artistName.innerText = element.name;
    artistImg.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden')
}

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;
  }
    requestApi(searchTerm);
});