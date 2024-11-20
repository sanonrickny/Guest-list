document.getElementById("searchBar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const names = document.querySelectorAll("#nameList li");

    names.forEach(name => {
        if (name.textContent.toLowerCase().includes(query)) {
            name.classList.remove("hidden");
        } else {
            name.classList.add("hidden");
        }
    });
});
