export default function xhr (method, url, entity) {
    var req = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        req.onprogress = onProgress;
        req.onerror = onError;
        req.onload = onLoad;
        req.onloadend = onLoadEnd;

        req.open( method, url );
        req.setRequestHeader('Content-type','application/json; charset=utf-8');
        req.send(entity);

        function onLoad() {
            if (this.status === 200) {
                console.log("Réponse reçue: %s", this.response);
                resolve(JSON.parse(this.response));
            } else if(this.status === 201) {
                console.log("Créé: %s", this.response);
                resolve("success");
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
                reject(this.status);
            }
            
        }

        function onProgress(event) {
            if (event.lengthComputable) {
                var percentComplete = (event.loaded / event.total)*100;
                console.log("Téléchargement: %d%%", percentComplete);
            } else {
                // Impossible de calculer la progression puisque la taille totale est inconnue
            }
        }
        
        function onError(event) {
            console.error("Une erreur " + event.target.status + " s'est produite au cours de la réception du document.");
            reject(this.status);
        }
        
        function onLoadEnd(event) {
            // Cet événement est exécuté, une fois la requête terminée.
            console.log("Le transfert est terminé. (peut importe le résultat)");
        }
    } );
};