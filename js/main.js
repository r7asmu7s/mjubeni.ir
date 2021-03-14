const textEl = document.getElementById('text')
const text = 'I am an English Teacher.'
let idx = 1

writeText()

function writeText() {
	textEl.innerText = text.slice(0, idx)

	idx++

	if (idx > text.length) {
		idx = 1
	}

	setTimeout(writeText, 200)
}
// Get the current year for the copyright
$('#year').text(new Date().getFullYear())
