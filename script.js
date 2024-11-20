document.getElementById("searchBar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const tables = document.querySelectorAll("#nameList h2, #nameList ul");

    tables.forEach((table, index) => {
        const listItems = table.tagName === "UL" ? table.querySelectorAll("li") : [];
        let hasVisibleItem = false;

        listItems.forEach(name => {
            if (name.textContent.toLowerCase().includes(query)) {
                name.classList.remove("hidden");
                hasVisibleItem = true;
            } else {
                name.classList.add("hidden");
            }
        });

        // Hide the table's heading and list if no visible items
        if (table.tagName === "UL" && listItems.length > 0) {
            const heading = tables[index - 1]; // Get the corresponding <h2>
            if (hasVisibleItem) {
                heading.classList.remove("hidden");
                table.classList.remove("hidden");
            } else {
                heading.classList.add("hidden");
                table.classList.add("hidden");
            }
        }
    });
});
