let isClockwise = true

function rotateImage(image, direction) {
  // Remove rotation classes from the image
  image.classList.remove('rotating-clockwise', 'rotating-counterclockwise')

  // Apply the appropriate rotation class
  if (direction === 'clockwise') {
    image.classList.add('rotating-clockwise')
  } else {
    image.classList.add('rotating-counterclockwise')
  }
}

function rotateRandomImages() {
  const elements = document.querySelectorAll('img, div.sprite_div_margin')
  const elementArray = Array.from(elements)

  // Select 3 random elements
  const selectedElements = []
  for (let i = 0; i < 15; i++) {
    if (elementArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * elementArray.length)
      const randomElement = elementArray.splice(randomIndex, 1)[0]
      selectedElements.push(randomElement)
    }
  }

  // Rotate each element with a delay of 1 second between each
  selectedElements.forEach((element, index) => {
    setTimeout(() => {
      rotateImage(element, isClockwise ? 'clockwise' : 'counterclockwise')
      isClockwise = !isClockwise // Toggle direction for next rotation
    }, index * 1000)
  })

  // Schedule the next rotation sequence after the last element has finished rotating
  setTimeout(rotateRandomImages, selectedElements.length * 1000)
}

// Start the rotation sequence
rotateRandomImages()
