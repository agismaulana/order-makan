window.onload = function() {
	const useNode = false
	const DefaultLiffId = ""

	let myLiffId = ""

	if(!useNode) {
		myLiffId = DefaultLiffId
		initializeLiffOrDie(myLiffId)
	}

}

function initializeLiffOrDie(myLiffId) {
	if(!myLiffId){
		
	} else {
		initializeLiff(myLiffId)
	}
}
