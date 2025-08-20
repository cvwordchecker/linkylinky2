function makespritebutton(url, spritetype, spritename, category) {
  return `<div class="sprite_wrapper">
    ${category ? `<div class="category_label">${category}</div>` : ''}
    <a href="${url}" target="_blank">
      <div class='${spritetype} ${spritename}' role='button' aria-label='${spritename}'></div>
    </a>
  </div>`;
}

