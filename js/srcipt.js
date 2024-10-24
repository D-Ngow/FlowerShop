document.querySelector('.actions button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    const searchValue = document.querySelector('.actions input[type="text"]').value;
    console.log(`Searching for: ${searchValue}`);
});

document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(`Navigating to: ${link.href}`);
    });
});

document.querySelectorAll('.products button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(`Buying product: ${button.textContent}`);
    });
});