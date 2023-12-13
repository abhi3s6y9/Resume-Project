// To go to the top when we refresh our web page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// For clearInterval function to use, we have to create interval variable in the global scope
var interval;

for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        // prevent the default behaviour of these anchor tags i.e. they take you to a particular section/id specified in the anchor tag
        event.preventDefault();

        // fetch the content of anchor tag or every list item
        // var targetSectionID = this.textContent.trim().toLowerCase();
        
        // fetch the href of anchor tag
        var targetSectionID = this.getAttribute("href").slice(1);
        var targetSection = document.getElementById(targetSectionID);

        interval = setInterval(smoothScroll, 20, targetSection); // The third argument onwards in the setInterval function are for the arguments of the function in the first argument

    });
}

// If we want to use Vertical smooth scroll in multiple places then we can use this function
function smoothScroll(targetSection){

    // As we cannot access targetSection. That's why we will get it from the argument of function
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if( targetSectionCoordinates.top <= 0 ){
        clearInterval(interval);
        return;
    }
    else if( ( window.innerHeight + Math.round(window.scrollY) + 1 ) >= document.body.offsetHeight){
        clearInterval(interval);
        return;
    }

    window.scrollBy(0, 50);
}

