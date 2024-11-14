// Tableau contenant les titres, descriptions et liens des projets
const projects = [
  {
    title: "Au Bonheur Des Dames",
    description: "Pour mon projet sur 'Au Bonheur des Dames' d'Émile Zola, j'ai créé deux rendus distincts. Tout d'abord, un 'bookster' constitué d'affiches astucieuses présentant de manière condensée et visuelle l'ensemble du livre. Chaque affiche capture des éléments clés, offrant ainsi un aperçu attractif et informatif du contenu. En parallèle, j'ai développé un site web interactif, utilisant HTML, CSS et JavaScript, pour offrir une expérience unique de lecture du livre. Ce site, au design ludique et accessible, contient le texte intégral du livre et propose une navigation plaisante grâce à des fonctionnalités interactives et des éléments visuels bien pensés, offrant ainsi une expérience de lecture dynamique et immersive.",
    link: "https://aurore.famillegrimaud.fr/bookster/"
  },
  {
    title: "Projet 2",
    description: "Description du projet 2.",
    link: "https://lienversleprojet2.com"
  },
  {
    title: "Projet 3",
    description: "Description du projet 3.",
    link: "https://lienversleprojet3.com"
  }
];

// Fonction pour ouvrir la modal et afficher les bonnes informations
function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const titleElement = document.getElementById("modalTitle");
  const descriptionElement = document.getElementById("modalDescription");

  // Mettre à jour le titre, la description et le lien en fonction de l'ID du projet
  titleElement.textContent = projects[projectId].title;
  descriptionElement.textContent = projects[projectId].description;
  titleElement.href = projects[projectId].link;  // Mettre à jour le lien de la modal

  // Afficher la modal
  modal.style.display = "block";
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

// Ajouter des écouteurs d'événements aux images pour ouvrir la modal avec les bonnes informations
const projectImages = document.querySelectorAll(".project-image");
projectImages.forEach(image => {
  image.addEventListener("click", function() {
    const projectId = this.getAttribute("data-id");
    openModal(projectId);
  });
});
