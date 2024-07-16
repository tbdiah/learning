// JavaScript Document

function searchGlossary() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let dl = document.querySelector('.glossary dl');
    let dt = dl.getElementsByTagName('dt');

    for (i = 0; i < dt.length; i++) {
        let txtValue = dt[i].textContent || dt[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            dt[i].style.display = "";
        } else {
            dt[i].style.display = "none";
        }
    }
}
