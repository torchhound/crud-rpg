//require('es6-promise').polyfill();
//require('isomorphic-fetch'); TODO: add requirejs
 
function getCharacter() {
	fetch('http//:localhost:3000/api/character', {
		method: 'GET'
	})
    	.then(function(response) {
        	if (response.status >= 400) {
            	throw new Error("Bad response from server");
        	}
        	return response.json();
   		})
    	.then(function(character) {
        	document.getElementById("json").textContent=character;
    	})
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
};