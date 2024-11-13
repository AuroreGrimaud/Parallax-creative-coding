// eslint-disable-next-line
import Atropos from 'https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs';
import AtroposComponent from '../../build/atropos-element.mjs';

customElements.define('atropos-component', AtroposComponent);

// pour avoir acces aux descriptions
function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

// Fonction pour fermer la modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Fermer la modal si on clique en dehors du contenu de la modal
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// fin pour avoir acces aux descriptions
