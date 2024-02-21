const authorSeatInput = document.getElementById('author-seat')
const timeSeatInput = document.getElementById('time-seat')
const titleSeatInput = document.getElementById('title-seat')
const releaseSeatInput = document.getElementById('release-seat')
const webSeatInput = document.getElementById('web-seat')

const authorSpan = document.getElementById('author-span')
const timeSpan = document.getElementById('time-span')
const titleSpan = document.getElementById('title-span')
const releaseSpan = document.getElementById('release-span')
const webSpan = document.getElementById('web-span')


document.addEventListener('input',(ev) => {
	switch(ev.target){
		case authorSeatInput:
			authorSpan.innerText = ev.target.value
			break;
		case timeSeatInput:
			timeSpan.innerText = ev.target.value
			break;
		case titleSeatInput:
			titleSpan.innerText = ev.target.value
			break;
		case releaseSeatInput:
			releaseSpan.innerText = ev.target.value
			break;
		case webSeatInput:
			webSpan.innerText = ev.target.value
			break;
	}
})



function renderReference(){
	
}
