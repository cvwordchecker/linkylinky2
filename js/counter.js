document.addEventListener('DOMContentLoaded', async function () {
  const counter = document.querySelector('.counter-number')
  async function updateCounter() {
    let response = await fetch(
      'https://kah2xbxydrth3ztimecl52rcie0lmtlx.lambda-url.us-west-1.on.aws/',
    )
    let data = await response.json()
    counter.innerHTML = `This page has had ${data} views!`
  }

  updateCounter()
})
