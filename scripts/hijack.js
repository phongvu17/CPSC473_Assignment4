var allLink = document.querySelectorAll('a');
var allLinkArray = [].slice.call(allLink);

function addClickHandler(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
        //console.log('you clicked!');
        //console.log(link);
    });
}
allLinkArray.forEach(addClickHandler);
