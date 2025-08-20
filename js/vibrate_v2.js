function rotateRandomImages() {
  const images = document.querySelectorAll('img')
  const imageArray = Array.from(images)

  // Remove rotation from all images
  imageArray.forEach((img) => img.classList.remove('rotating'))

  // Select 3 random images
  for (let i = 0; i < 3; i++) {
    if (imageArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * imageArray.length)
      const randomImage = imageArray.splice(randomIndex, 1)[0]
      randomImage.classList.add('rotating')

      // Remove the class after animation completes
      setTimeout(() => {
        randomImage.classList.remove('rotating')
      }, 1000)
    }
  }
}

// Run the rotation effect every second
setInterval(rotateRandomImages, 1000)
