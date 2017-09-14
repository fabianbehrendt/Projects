function setHeight () {
  let iframe = document.getElementsByTagName('iframe')[0]
  let doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document

  iframe.style.visibility = 'hidden'
  iframe.style.height = getDocHeight(doc) + 4 + 'px'
  iframe.style.visibility = 'visible'
}

function getDocHeight (inputDoc) {
  let doc = inputDoc || document
  let body = doc.body
  let html = doc.documentElement

  let height = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
		)

  return height
}
