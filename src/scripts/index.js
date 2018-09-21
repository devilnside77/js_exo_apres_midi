import '../styles/index.scss'; 
import {Soatien, bareApi} from '../scripts/boostercamp.api';

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button[id="button_nom_id"]').onclick=changeEventHandler;
},false);

function getSoatienObjs () {
    return new Promise((resolve, rejects) => {
        Promise.all([bareApi.getSoatiens(), bareApi.getPersons()]).then(([responseSoatiens, responsePersons]) => {
            let persons = responsePersons;
            let soatiens = responseSoatiens;
            
            let soatiensObj = [];
    
            for(let i=0; i<persons.length; i++) {
                for(let y = 0; y<soatiens.length; y++) {
                    let person = persons[i];
                    let soatien = soatiens[y]; 
                    if(person.id === soatien.id) {
                        const soatienObj = new Soatien(person.id, person.nom, person.prenom, soatien.matricule);
                        soatiensObj.push(soatienObj);
                    }
                }
            }
        
            resolve(soatiensObj);
        }).catch(error => rejects(error));
    });
}

const listNom = document.getElementById("list_id");
getSoatienObjs().then(data => {
    listNom.innerHTML = null;

    for (let I = 0; I < data.length; I++) {
         let nameList = "<li>" + data[I].getFullName() + "</li>";
        listNom.innerHTML += nameList;
    }
}).catch(() => {
    listNom.innerHTML = 'CONNEXION ERROR';
});;

function changeEventHandler(event) {
    const nom = document.getElementById('nom_id');
    
    listNom.innerHTML = null;
    if(!nom.value) {
        alert('Please tell me your name');
    } else {
        const resultText = document.getElementById('result_id');
        resultText.textContent = `Nice to meet you ${nom.value}`;     
    } 
}