
const urlParams = new URLSearchParams(window.location.search);
const quantity = urlParams.get('filteredCount');

document.getElementsByClassName('stat-number').innerText = quantity;
