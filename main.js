let myLibrary = [];



//Fonction qui genere l'id 
function generateId(){
  let lenLibrary = myLibrary.length
  return lenLibrary;
}

//Constructeur pour la création du livre
function Book(id, title, author, pages, status){
    this.id = id,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status

};

//L'objectif de cette fonction 
function addToLibrary(){
  
  const form = document.getElementById('form');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    //Recuperation des données du formulaire
    const title = document.getElementById('title').value;
    const aut = document.getElementById('author').value;
    const page = document.getElementById('page').value;

    //determiner la valeur du button choisie
    const checkedRadio = document.querySelector('input[name="choix"]:checked');
    let status = ''
      if (checkedRadio) {
          // Si un bouton est coché, récupérez sa valeur
          status = checkedRadio.value;
      }
      let i= generateId()
      let id = i+1;

      let addBook = new Book(id, title, aut, page, status);
      myLibrary.push(addBook);

        const section = document.querySelector(".books");
  // Créer le bouton
      const el = myLibrary[id];
    const divBook = document.createElement("div");
    divBook.className = "book";

    const tit = document.createElement('h4');
    tit.textContent = title;
    const at = document.createElement('h6')
    at.textContent = aut
    const nbr = document.createElement('h6') 
    nbr.textContent = page
    const rd = document.createElement('h6') 
    rd.textContent = status

    // Ajouter tous les <h*> dans la div
    divBook.appendChild(tit);
    divBook.appendChild(at);
    divBook.appendChild(nbr);
    divBook.appendChild(rd);

    //creation du boutton delete
    const dBtn = document.createElement('button');
    dBtn.className = 'delete'
    dBtn.textContent= 'Delete'
    divBook.appendChild(dBtn);

    //creation de licone
    const img = document.createElement("img");

    // Définir ses attributs
    img.src = "./assets/icon/delete_24dp_FFFF.png"; // URL de l'image
    img.alt = "Icone Supprimer";
    img.width = 24; // largeur en pixels
    img.height = 24; // hauteur en pixels

    // Ajouter l'image dans le DOM
    dBtn.appendChild(img)
    section.appendChild(divBook);

    dBtn.addEventListener('click', () =>{
      divBook.remove()
    })

  })
 
}
addToLibrary();



const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addbtn ");

const closeButton = document.querySelector(".submit");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {

  dialog.close();
});

