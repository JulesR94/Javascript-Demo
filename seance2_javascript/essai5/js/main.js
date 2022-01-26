let element = document.getElementById('clickme');
let i = 0;

element.style.borderRadius = "10px";
element.style.backgroundColor = "yellow"

function change(){
    element.innerHTML = i++;
}

element.addEventListener('click', function(){
    // alert('Vous avez cliqué !');
    element.style.backgroundColor = "red";
let interval = setInterval (function(){
    if (i > 10){
        clearInterval(interval);
    }
    else{
        element.innerHTML = i++;
    }
},1000);   
},false);

element.addEventListener('dbclick', function(){
    if (i > 20){
        clearInterval(interval);
    }
    else{
        innerHTML = i++;
    }
},1000);

/* element.addEventListener('mouseover', function(){
    // alert('Vous avez cliqué !');
    element.style.backgroundColor = "blue"
},false);

element.addEventListener('mouseout', function(){
    // alert('Vous avez cliqué !');
    element.style.backgroundColor = "orange"
},false); */
