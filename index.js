let counter = document.getElementById("counter");//selectionne le span avec l'id counter
let count = localStorage.getItem("visitCount");// Recupére la valeur de dans le localStorage
function compteur(){
  if (count === null) {
    count = 0;
  }
  
  
  count++;//Incrémenttion 
  localStorage.setItem("visitCount", count);//Mes en place la valeur count incrementer a chaque chagement 
  counter.innerHTML = count;//Remplace le contenu du texte de ce span par la valeur récupéré
  
}
compteur()

