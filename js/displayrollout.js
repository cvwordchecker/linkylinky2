// Add an event listener to the window's load event
window.addEventListener('load', function () {
  // Define an array of row selectors
  var rows = [
    '.mail-row',
    '.second-row',
    '.media-row',
    '.radio-row',
    '.ai-row',
    '.ai-creative-row',
    '.ai-extra-row',
    '.ai-extra2-row',
    '.ai-extra3-row',
    '.newspapers-row',
    '.retail-row',
    '.misc1-row',
    '.entertainment-row',
    '.america-row',
    '.musicians-row',
    '.politics-row',
    '.special-row',
    '.banks-row',
    '.football-row',
    '.women-row',
    '.business-row',
    '.foreign-row',
    '.asian-row',
    '.african-row',
    '.middle-eastern-row',
  ]

  // Wait 200ms after the page has loaded before executing the following code
  setTimeout(function () {
    // Loop through each row selector in the array
    rows.forEach(function (row, index) {
      // Wait an additional 200ms for each row (staggered animation effect)
      setTimeout(function () {
        // Get the HTML element corresponding to the current row selector
        var elem = document.querySelector(row)
        if (elem) {
          // Set the display property to 'flex' to make the row visible
          elem.style.display = 'flex'
          // Set the opacity to 0 to make the row invisible (will be animated to 1 later)
          elem.style.opacity = 0
          // Wait 200ms before animating the opacity to 1
          setTimeout(function () {
            // Animate the opacity to 1 to make the row visible
            elem.style.opacity = 1
          }, 200)
        }
      }, index * 200)
    })
  }, 100)
})

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var separators = document.querySelectorAll('.toplink_separator')
    for (var i = 0; i < separators.length; i++) {
      separators[i].style.opacity = 1
    }
  }, 2000)
})
