function filtrarPaginas() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let titulo = card.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
