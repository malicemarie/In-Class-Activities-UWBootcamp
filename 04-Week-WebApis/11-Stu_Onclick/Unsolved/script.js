var decrementButton = document.querySelector('#decrement');
var incrementButton = document.querySelector('#increment');
var countClick = document.querySelector('#count');

var count = 0;

incrementButton.addEventListener('click', function (){
    count++;
    countClick.textContent = count;

});

decrementButton.addEventListener('click', function (){
    if (count !== 0) { 
        count--;
        countClick.textContent = count;
    }
});


    

}