if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('sw register'))
        .catch((err) => console.log('sw not register'));
}