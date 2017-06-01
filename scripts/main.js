var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mozilla-icon.jpg') {
		console.log('chrome');
		myImage.setAttribute('src', 'images/chrome-icon.ico');
	} else {
		console.log('mozilla');
		myImage.setAttribute('src', 'images/mozilla-icon.jpg');
	}
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
	setUserName();
}