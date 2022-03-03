const APIimg = document.getElementById(`lista`)

const urlAPI = `https://jsonplaceholder.typicode.com/photos`

fetch(urlAPI)
    .then(Response => Response.json())
    .then(data => {
        data.forEach(element => {
            const {url, albumId, id, thumbnailUrl} = element
            const div = document.createElement(`div`)
            div.className = `col-md-3`
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${thumbnailUrl}" alt="">

                <div class="card-body">
                    <p class="card-text">Álbum n°: ${albumId}</p>
                    <p>Foto n°: ${id}</p>
                </div>
                </div>
            `

            APIimg.appendChild(div)
        });
    })
    .catch(error => console.log(error))