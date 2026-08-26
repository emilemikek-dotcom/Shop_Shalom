let panier = [];


// AJOUTER AU PANIER

function ajouterAuPanier(nom, prix) {

    panier.push({
        nom: nom,
        prix: prix
    });

    mettreAJourPanier();

    alert(nom + " a été ajouté au panier !");
}


// METTRE À JOUR LE PANIER

function mettreAJourPanier() {

    document.getElementById("cart-count").textContent = panier.length;

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    panier.forEach(function(produit, index) {

        total += produit.prix;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>${produit.nom}</span>

                <strong>
                    ${produit.prix.toLocaleString()} FC
                </strong>

                <button onclick="supprimerProduit(${index})">
                    ❌
                </button>

            </div>
        `;
    });

    document.getElementById("cart-total").textContent =
        total.toLocaleString() + " FC";
}


// SUPPRIMER

function supprimerProduit(index) {

    panier.splice(index, 1);

    mettreAJourPanier();
}


// OUVRIR PANIER

function ouvrirPanier() {

    document.getElementById("cart-modal").style.display = "block";

}


// FERMER PANIER

function fermerPanier() {

    document.getElementById("cart-modal").style.display = "none";

}


// RECHERCHER

function rechercherProduit() {

    let recherche =
        document.getElementById("search").value.toLowerCase();

    let produits =
        document.querySelectorAll(".product-card");

    produits.forEach(function(produit) {

        let nom =
            produit.querySelector("h3").textContent.toLowerCase();

        if (nom.includes(recherche)) {
            produit.style.display = "block";
        } else {
            produit.style.display = "none";
        }

    });
}


// COMMANDER

function commander() {

    if (panier.length === 0) {

        alert("Votre panier est vide.");

        return;
    }

    let message = "Bonjour Shop Shalom, je souhaite commander :%0A%0A";

    let total = 0;

    panier.forEach(function(produit) {

        message +=
            "- " +
            produit.nom +
            " : " +
            produit.prix.toLocaleString() +
            " FC%0A";

        total += produit.prix;

    });

    message +=
        "%0ATotal : " +
        total.toLocaleString() +
        " FC";

    /*
       REMPLACE 243XXXXXXXXX
       PAR LE NUMÉRO WHATSAPP DE SHOP SHALOM
    */

    let numero = "243842660469";

    window.open(
        "https://wa.me/" +243842660469+ "?text=" +243842660469,
        "_blank"
    );
}


// LIEN WHATSAPP

document.getElementById("whatsapp-link").href =
    "https://wa.me/243842660469";
