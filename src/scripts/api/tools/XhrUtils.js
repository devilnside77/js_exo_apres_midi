/* global XMLHttpRequest */

export default function xhr(method, url, entity) {
  const req = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    function onLoad() {

    }

    function onProgress(event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Téléchargement : ${percentComplete}%`);
      } else {
        // Impossible de calculer la progression puisque la taille totale est inconnue
      }
    }

    function onError(event) {
      console.error(`Une erreur ${event.target.status} s'est produite au cours de la réception du document.`);
      reject(this.status);
    }

    function onLoadEnd() {
      // Cet événement est exécuté, une fois la requête terminée.
      console.log('Le transfert est terminé. (peut importe le résultat)');
    }

    req.onprogress = onProgress;
    req.onerror = onError;
    req.onload = onLoad;
    req.onloadend = onLoadEnd;

    req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  });
}
