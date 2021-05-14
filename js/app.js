if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('sw register'))
        .catch((err) => console.log('sw not register'));
}


//check to see if local storage is supported
if (window.localStorage) {
    console.log("Local Storage Supported")
} else {
    console.log("Local Storage not supported in browser")
}

//select input and title
inputEmpty = document.getElementById('input-empty');
h1Tag = document.getElementById("titre")

//if storage exist
if (window.localStorage.getItem("empty")) {
    h1Tag.innerHTML = window.localStorage.getItem("empty")
    inputEmpty.value = window.localStorage.getItem("empty")
} else {
// else fill storage from default value
    window.localStorage.setItem("empty", h1Tag.innerHTML)    
}

// on change of input
inputEmpty.addEventListener('change', function () {
    console.log(this.value)
    //update title
    h1Tag.innerHTML = this.value
    //update storage
    window.localStorage.setItem("empty", this.value)
    
});





//console.log(window.localStorage.getItem("empty"))
//var myParam = location.search.split('viewid=')[1];
//if (inputEmpty) {
//    document.getElementById("input-empty-weight").setAttribute('value', parseInt(age))
//}

