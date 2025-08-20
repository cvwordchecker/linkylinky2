function vibrateRandomImages() {
  const images = document.querySelectorAll('img')
  const imageArray = Array.from(images)

  // Remove vibration from all images
  imageArray.forEach((img) => img.classList.remove('vibrating'))

  // Select 3 random images
  for (let i = 0; i < 3; i++) {
    if (imageArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * imageArray.length)
      const randomImage = imageArray.splice(randomIndex, 1)[0]
      randomImage.classList.add('vibrating')
    }
  }
}

// Run the vibration effect every 2 seconds
setInterval(vibrateRandomImages, 2000)

/*
Prompt using perplexity
How can the code at https://toplinks.info/ be modified so that 3 random images at a time appear to vibrate every two seconds? Javascript and CSS must be used.

*/
