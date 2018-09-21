import '../styles/index.scss'; 
import {Soatien, bareApi} from '../scripts/boostercamp.api';
import Person from './Person';

const listNom = document.getElementById("list_id");
const nom = document.getElementById('nom_id');
const prenom = document.getElementById('prenom_id');
const matricule = document.getElementById('matricule_id');

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button[id="button_name_me_id"]').onclick=nameMeHandler;
},false);

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button[id="button_save_me_id"]').onclick=saveMeHandler;
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

getSoatienObjs().then(data => {
    listNom.innerHTML = null;

    for (let I = 0; I < data.length; I++) {
         let nameList = "<li>" + data[I].getFullName() + "</li>";
        listNom.innerHTML += nameList;
    }
}).catch(() => {
    listNom.innerHTML = 'CONNEXION ERROR';
});

function nameMeHandler() {
    if(!nom.value) {
        alert('Please tell me your name');
    } else {
        const resultText = document.getElementById('result_id');
        resultText.textContent = `Nice to meet you ${nom.value} ${prenom.value}`;     
    } 
}

function saveMeHandler() {
    bareApi.postPersons(new Person(null, 'toto', 'tata')).then(data => {
        console.log("creation : ", data);
    });
    bareApi.postSoatiens({matricule: "test"}).then(data => {
        console.log("creation : ", data);
    });
}