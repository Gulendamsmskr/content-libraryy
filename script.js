function filterFiles() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    let fileItems = document.getElementsByClassName('file-item');

    for (let i = 0; i < fileItems.length; i++) {
    
        let fileName = fileItems[i].getAttribute('data-name').toLowerCase();
        
        if (fileName.includes(input)) {
            fileItems[i].style.display = "flex";
        } else {
            fileItems[i].style.display = "none"; 
        }
    }
}
