// Add JavaScript to toggle the menu sheet on click
const hamburgerButton = document.querySelector('.hamburger-button')
const menuSheet = document.querySelector('.menu-sheet')
const topOfPageElements = document.querySelectorAll('.top-of-page-element')

hamburgerButton.addEventListener('click', () => {
  // Get the element with the class 'top_line_holder'
  const topLineHolder = document.querySelector('.top_line_holder')

  // Toggle the 'margin: auto' style on the element
  topLineHolder.style.margin = 'auto'
  menuSheet.classList.toggle('active')
  document.body.classList.toggle('menu-open')
  // Centers the top line for mobile devices
  if (window.innerWidth < 500) {
    topOfPageElements.forEach((element) => {
      element.style.justifyContent = 'center'
    })
  } else {
    topOfPageElements.forEach((element) => {
      element.style.justifyContent = '' // or set it to its original value
    })
  }

  show_all_rows()
})

function hideElements(classes) {
  classes.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`)
    elements.forEach((element) => {
      element.style.display = 'none'
    })
  })
}

function removeRowTitles() {
  const selectedRows = document.querySelectorAll('.selected-row')
  selectedRows.forEach((row) => {
    row.remove()
  })
}

function showElements(classes) {
  classes.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`)
    elements.forEach((element) => {
      element.style.display = 'flex'
    })
  })
}

function make_row_title_disappear() {
  var separators = document.querySelectorAll('.toplink_separator')
  for (var i = 0; i < separators.length; i++) {
    separators[i].style.display = 'none'
  }
}

function make_row_title_appear() {
  var separators = document.querySelectorAll('.toplink_separator')
  for (var i = 0; i < separators.length; i++) {
    separators[i].style.display = 'block'
  }
}
function clear_all_rows() {
  hideElements([
    'top_links',
    'second-row',
    'media-row',
    'radio-row',
    'ai-row',
    'ai-creative-row',
    'ai-extra-row',
    'ai-extra2-row',
    'ai-extra3-row',
    'misc1-row',
    'newspapers-row',
    'retail-row',
    'entertainment-row',
    'america-row',
    'politics-row',
    'football-row',
    'special-row',
    'mail-row',
    'musicians-row',
    'banks-row',
    'women-row',
    'business-row',
    'foreign-row',
    'asian-row',
    'african-row',
    'middle-eastern-row',
  ])
  menuSheet.classList.remove('active')
  document.body.classList.remove('menu-open')
  make_row_title_disappear()
  removeRowTitles()
}

function show_all_rows() {
  showElements([
    'top_links',
    'second-row',
    'media-row',
    'radio-row',
    'ai-row',
    'ai-creative-row',
    'ai-extra-row',
    'ai-extra2-row',
    'ai-extra3-row',
    'misc1-row',
    'newspapers-row',
    'retail-row',
    'entertainment-row',
    'america-row',
    'politics-row',
    'football-row',
    'special-row',
    'mail-row',
    'musicians-row',
    'banks-row',
    'women-row',
    'business-row',
    'foreign-row',
    'asian-row',
    'african-row',
    'middle-eastern-row',
  ])
  menuSheet.classList.add('active')
  make_row_title_appear()
  removeRowTitles()
}

function insertRowTitle(rowname, rowtext) {
  let newDiv = document.createElement('div')
  newDiv.className = 'selected-row'
  newDiv.innerText = rowtext
  rowname.insertAdjacentElement('beforebegin', newDiv)
}

const misc1Link = document.querySelector(
  '.hamburger-menu ul li a[href="#.misc1"]',
)

const middle_easternLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.middle-eastern"]',
)

const africanLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.african"]',
)
const asianLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.asian"]',
)
const foreignLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.foreign"]',
)

const businessLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.business"]',
)

const womenLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.women"]',
)

const olympicsLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.olympics"]',
)
const banksLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.bank"]',
)
const footballLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.football"]',
)
const politicsLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.politics"]',
)
const radioLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.radio"]',
)
const aiLink = document.querySelector('.hamburger-menu ul li a[href="#.ai"]')

const ai_creativeLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.ai-creative"]',
)

const ai_extraLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.ai-extra"]',
)

const ai_extra2Link = document.querySelector(
  '.hamburger-menu ul li a[href="#.ai-extra2"]',
)

const ai_extra3Link = document.querySelector(
  '.hamburger-menu ul li a[href="#.ai-extra3"]',
)

const musiciansLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.musicians"]',
)
const newspapersLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.newspapers"]',
)
const retailLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.retail"]',
)
const entertainmentLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.entertainment"]',
)
const americaLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.america"]',
)
const mediaLink = document.querySelector(
  '.hamburger-menu ul li a[href="#.media"]',
)

const closeMenuLink = document.getElementById('close-menu')

closeMenuLink.addEventListener('click', () => {
  menuSheet.classList.remove('active')
  document.body.classList.remove('menu-open')
})

misc1Link.addEventListener('click', () => {
  clear_all_rows()
  const misc1Row = document.querySelector('.misc1-row')
  misc1Row.style.display = 'flex'
  insertRowTitle(misc1Row, 'Miscellaneous')
})

middle_easternLink.addEventListener('click', () => {
  clear_all_rows()
  const middle_easternRow = document.querySelector('.middle-eastern-row')
  middle_easternRow.style.display = 'flex'
  insertRowTitle(middle_easternRow, 'Middle Eastern Newspapers')
})

africanLink.addEventListener('click', () => {
  clear_all_rows()
  const africanRow = document.querySelector('.african-row')
  africanRow.style.display = 'flex'
  insertRowTitle(africanRow, 'African Newspapers')
})

asianLink.addEventListener('click', () => {
  clear_all_rows()
  const asianRow = document.querySelector('.asian-row')
  asianRow.style.display = 'flex'
  insertRowTitle(asianRow, 'Asian Newspapers')
})

foreignLink.addEventListener('click', () => {
  clear_all_rows()
  const foreignRow = document.querySelector('.foreign-row')
  foreignRow.style.display = 'flex'
  insertRowTitle(foreignRow, 'European Newspapers')
})

businessLink.addEventListener('click', () => {
  clear_all_rows()
  const businessRow = document.querySelector('.business-row')
  businessRow.style.display = 'flex'
  insertRowTitle(businessRow, 'Business')
})

womenLink.addEventListener('click', () => {
  clear_all_rows()
  const womenRow = document.querySelector('.women-row')
  womenRow.style.display = 'flex'
  insertRowTitle(womenRow, 'Magazines for Women')
})

mediaLink.addEventListener('click', () => {
  clear_all_rows()
  const mediaRow = document.querySelector('.media-row')
  mediaRow.style.display = 'flex'
  insertRowTitle(mediaRow, 'TV')
})

entertainmentLink.addEventListener('click', () => {
  clear_all_rows()
  const entertainmentRow = document.querySelector('.entertainment-row')
  entertainmentRow.style.display = 'flex'
  insertRowTitle(entertainmentRow, 'Entertainment')
})

americaLink.addEventListener('click', () => {
  clear_all_rows()
  const americaRow = document.querySelector('.america-row')
  americaRow.style.display = 'flex'
  insertRowTitle(americaRow, 'USA')
})

newspapersLink.addEventListener('click', () => {
  clear_all_rows()
  const newspapersRow = document.querySelector('.newspapers-row')
  newspapersRow.style.display = 'flex'
  insertRowTitle(newspapersRow, 'Newspapers')
})
retailLink.addEventListener('click', () => {
  clear_all_rows()
  const retailRow = document.querySelector('.retail-row')
  retailRow.style.display = 'flex'
  insertRowTitle(retailRow, 'Retail')
})

musiciansLink.addEventListener('click', () => {
  clear_all_rows()
  const musiciansRow = document.querySelector('.musicians-row')
  musiciansRow.style.display = 'flex'
  insertRowTitle(musiciansRow, 'Musicians')
})

olympicsLink.addEventListener('click', () => {
  clear_all_rows()
  const olympicsRow = document.querySelector('.special-row')
  olympicsRow.style.display = 'flex'
  insertRowTitle(olympicsRow, 'Olympics')
})

banksLink.addEventListener('click', () => {
  clear_all_rows()
  const banksRow = document.querySelector('.banks-row')
  banksRow.style.display = 'flex'
  insertRowTitle(banksRow, 'Banks')
})

footballLink.addEventListener('click', () => {
  clear_all_rows()
  const footballRow = document.querySelector('.football-row')
  footballRow.style.display = 'flex'
  insertRowTitle(footballRow, 'Football')
})

politicsLink.addEventListener('click', () => {
  clear_all_rows()
  const politicsRow = document.querySelector('.politics-row')
  politicsRow.style.display = 'flex'
  insertRowTitle(politicsRow, 'Politics')
})

radioLink.addEventListener('click', () => {
  clear_all_rows()
  const radioRow = document.querySelector('.radio-row')
  radioRow.style.display = 'flex'
  insertRowTitle(radioRow, 'Radio')
})
aiLink.addEventListener('click', () => {
  clear_all_rows()
  const aiRow = document.querySelector('.ai-row')
  aiRow.style.display = 'flex'
  insertRowTitle(aiRow, 'AI')
})

ai_creativeLink.addEventListener('click', () => {
  clear_all_rows()
  const ai_creativeRow = document.querySelector('.ai-creative-row')
  ai_creativeRow.style.display = 'flex'
  insertRowTitle(ai_creativeRow, 'AI CREATIVE')
})


ai_extraLink.addEventListener('click', () => {
  clear_all_rows()
  const ai_extraRow = document.querySelector('.ai-extra-row')
  ai_extraRow.style.display = 'flex'
  insertRowTitle(ai_extraRow, 'AI EXTRA')
})

ai_extra2Link.addEventListener('click', () => {
  clear_all_rows()
  const ai_extra2Row = document.querySelector('.ai-extra2-row')
  ai_extra2Row.style.display = 'flex'
  insertRowTitle(ai_extra2Row, 'AI EXTRA 2')
})

ai_extra3Link.addEventListener('click', () => {
  clear_all_rows()
  const ai_extra3Row = document.querySelector('.ai-extra3-row')
  ai_extra3Row.style.display = 'flex'
  insertRowTitle(ai_extra3Row, 'AI EXTRA 3')
})
