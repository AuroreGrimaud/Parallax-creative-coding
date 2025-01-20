// Tableau contenant les titres, descriptions et liens des projets
const projects = [
  {
    title: "Au Bonheur Des Dames",
    description: "Pour mon projet sur 'Au Bonheur des Dames' d'Émile Zola, j'ai créé deux rendus distincts. Tout d'abord, un 'bookster' constitué d'affiches astucieuses présentant de manière condensée et visuelle l'ensemble du livre. Chaque affiche capture des éléments clés, offrant ainsi un aperçu attractif et informatif du contenu. En parallèle, j'ai développé un site web interactif, utilisant HTML, CSS et JavaScript, pour offrir une expérience unique de lecture du livre.",
    link: "https://aurore.famillegrimaud.fr/bookster/"
  },
  {
    title: "Carte intéractive",
    description: "Ma carte interactive conçue sur Figma est une représentation détaillée des différents bâtiments bénéficiant des services offerts par Enfin Lundi, une entreprise de conciergerie d'entreprise renommée. Chaque point marquant un bâtiment affiche son adresse précise, offrant ainsi une accessibilité optimale aux utilisateurs. En outre, cette carte interactive offre une vue exhaustive des services spécifiques fournis à chaque emplacement, reflétant fidèlement la diversité des offres proposées par Enfin Lundi. Grâce à cette carte, les utilisateurs peuvent facilement localiser les services offerts par l'entreprise, renforçant ainsi l'accessibilité et la visibilité de ces services au sein des différents bâtiments.",
    link: "https://xd.adobe.com/view/23dc9c86-f044-4302-bf05-8e7ffb06c6e3-768f/?fullscreen"
  },
  {
    title: "Passwords",
    description: "Le projet visant à rendre dynamique sur téléphone le site 'The Secret Life of Passwords' du New York Times a été une aventure passionnante. Face à la tâche ardue de transformer un site initialement long et ennuyeux, j'ai entrepris de le revitaliser en intégrant des éléments interactifs captivants.J'ai cherché à créer une expérience plus engageante pour les utilisateurs. Ce travail m'a permis de repenser la manière dont l'information était présentée, transformant une expérience monotone en un parcours interactif à travers le monde complexe des mots de passe. Ce projet a été une occasion stimulante de démontrer ma créativité tout en maintenant la crédibilité et la rigueur journalistique associées au New York Times.",
    link: "https://lienversleprojet3.com"
  }
];

// Ajouter un écouteur d'événement à chaque div avec la classe .atropos-banner
document.querySelectorAll(".atropos-banner").forEach(div => {
  div.addEventListener("click", function() {
    const projectId = this.getAttribute("data-id"); // Récupère l'attribut data-id

    // Vérification et affichage pour debug
    if (projectId !== null) {
      openModal(projectId); // Appelle la fonction openModal avec projectId comme paramètre
    } else {
      console.error("Aucun ID de projet trouvé sur cet élément"); // Message d'erreur si data-id est manquant
    }
  });
});





// Fonction pour ouvrir la modal et afficher les bonnes informations
function openModal(projectId) {
  
//changer la constante en nombre
const projectIdNum = parseInt(projectId, 10);

  if (isNaN(projectIdNum)) {
    console.error("ID du projet invalide:", projectId);
    return;
  }
  const modal = document.getElementById("projectModal");
  const titleElement = document.getElementById("modalTitle");
  const descriptionElement = document.getElementById("modalDescription");

  // Vérification si le projet existe dans le tableau
  const project = projects[projectIdNum];
  if (project) {
    // Si le projet existe, on met à jour les éléments
    titleElement.textContent = project.title;
    titleElement.href = project.link;
    descriptionElement.textContent = project.description;

    // Afficher la modal
    modal.style.display = "block";
  } else {
    // Si le projet n'existe pas, affiche un message d'erreur
    console.error("Projet introuvable pour l'ID:", projectId);
  }
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

