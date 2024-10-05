document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('jobTable');
    const rows = table.getElementsByTagName('tr');
    
    filteredCount.textContent = rows.length - 1;
});

function filterJobs() {
    const jobCategory = document.getElementById('jobCategory').value.toLowerCase();
    const productionTeam = document.getElementById('productionTeam').value.toLowerCase();
    const officeLocation = document.getElementById('officeLocation').value.toLowerCase();

    const table = document.getElementById('jobTable');
    const rows = table.getElementsByTagName('tr');
    let visible = 0;
    // Loop through all rows (except the header)
    for (let i = 1; i < rows.length; i++) {
        const category = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        const team = rows[i].getElementsByTagName('td')[2].textContent.toLowerCase();
        const location = rows[i].getElementsByTagName('td')[3].textContent.toLowerCase();
        
        if ((jobCategory === '' || category === jobCategory) &&
        (productionTeam === '' || team === productionTeam) &&
        (officeLocation === '' || location === officeLocation)) {
            rows[i].style.display = '';
            visible++;
        } else {
            rows[i].style.display = 'none';
        }
    }
    filteredCount.textContent = visible;
}