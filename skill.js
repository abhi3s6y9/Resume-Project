// 1. Handle scroll event on window
// 2. Check that Skills section container is visible or not
// 3. Ensure that initial width of these colored skill divs is 0 -> initialized/reset to 0 width value
// 4. Start animation on every skill -> increase skill width from 0 to skill level at regular interval
// 5. Store skill level -> HTML with the help of data attribute

// Handle scroll event on window
window.addEventListener('scroll', checkScroll);
var progressBars = document.querySelectorAll('.skill-background > div');
var skillsContainer = document.getElementById('skills-container');
// var animationDone = false;
var animationDone = [];
for(let i=0;i<progressBars.length;i++){
    animationDone[i] = false;
}


// Commenting below lines of code as it is for Skill Container
/*
    function initialiseBars(){
        for(let bar of progressBars){
            bar.style.width = 0 + '%';
        }
    }

    initialiseBars();

    function fillBars(){

        for(let bar of progressBars){
            let targetWidth = bar.getAttribute('data-bar-width');
            let currentWidth = 0;
            let interval = setInterval(function(){
                if(currentWidth > targetWidth){
                    clearInterval(interval);
                    return;
                }
                bar.style.width = currentWidth + '%';
                currentWidth++;
            }, 8);
        }

    }
*/

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

function initialiseBar(bar){
    bar.style.width = 0 + '%';
}

function fillBar(bar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(currentWidth > targetWidth){
            clearInterval(interval);
            return;
        }
        bar.style.width = currentWidth + '%';
        currentWidth++;
    }, 8);
}

function checkScroll(){
    let i = 0;
    for(let bar of progressBars){
        let coordinates = bar.getBoundingClientRect();
        if(!animationDone[i] && coordinates.top <= window.innerHeight){
            animationDone[i] = true;
            fillBar(bar);
        }
        else if(coordinates.top > window.innerHeight){
            animationDone[i] = false;
            initialiseBar(bar);
        }

        i++;
    }

    // You have to check whether skill container is visible
    /*
        var coordinates = skillsContainer.getBoundingClientRect();
        if(!animationDone && coordinates.top <= window.innerHeight){
            animationDone = true;
            fillBars();
        }
        else if(coordinates.top > window.innerHeight){
            animationDone = false;
            initialiseBars();
        }
    */

}



