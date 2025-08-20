// Display a row of html
function displayToplinkRow(url, image, height, alt, row) {
  const html = `<div>
                    <a href="${url}"  target=\"_blank\" ">
                      <img src="toplink_images/${image}.webp" width="200" height="${height}" alt="${alt}" >
                    </a>
                  </div>`

  // Append the HTML content to the specified row element
  const rowadd = document.querySelector(row)
  rowadd.innerHTML += html
}

function displayToplinkRowShort(url, img, height, row) {
  const html = `<div>
                      <a href="${url}" target="_blank" >
                        <img src="toplink_images/${img}.webp" width="200" height="${height}" alt="${img}" >
                      </a>
                    </div>`

  // Append the HTML content to the specified row element
  const rowaddshort = document.querySelector(row)
  rowaddshort.innerHTML += html
}
