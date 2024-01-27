function search() {
    var searchTerm = document.getElementById("searchInput").value; // No need for toLowerCase()
    var pages = ["Pelagonka", "Pela Rosa", "Pelisterka"];
    var searchResults = pages.filter(function(page) {
        return page.toLowerCase().includes(searchTerm.toLowerCase()); // Compare in lowercase
    });

    displayResults(searchResults);
}


function displayResults(results) {
    var dropdown = document.getElementById("searchDropdown");
    dropdown.innerHTML = ""; 

    if (results.length === 0) {
        dropdown.style.display = "none"; 
    } else {
        dropdown.style.display = "block"; 

        results.forEach(function(result) {
            var resultLink = document.createElement("div");
            resultLink.textContent = result;

            resultLink.addEventListener("click", function() {
                window.location.href = result + ".html";
              
                dropdown.style.display = "none";
            });

            dropdown.appendChild(resultLink);
        });
    }
}


document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("searchDropdown");
    if (event.target !== dropdown && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});


document.getElementById("searchDropdown").addEventListener("click", function(event) {
    event.stopPropagation();
});



function toggleReadMore(sectionId) {
    var readMoreSection = document.getElementById(sectionId);
    var readMoreContent = readMoreSection.querySelector('.read-more-content');

    // Close all other sections before opening the clicked one
    var allSections = document.querySelectorAll('.read-more-section');
    allSections.forEach(function (section) {
        if (section.id !== sectionId) {
            section.classList.remove('open');
            var content = section.querySelector('.read-more-content');
            content.style.maxHeight = 0;
        }
    });

    // Toggle the clicked section
    readMoreSection.classList.toggle('open');

    if (readMoreSection.classList.contains('open')) {
        readMoreContent.style.maxHeight = readMoreContent.scrollHeight + 'px';
    } else {
        readMoreContent.style.maxHeight = 0;
    }
}



