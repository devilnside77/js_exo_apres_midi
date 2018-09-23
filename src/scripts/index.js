import '../styles/index.scss'; 
import {Soatien, Tool, bareApi} from './api/boostercamp.api';

const listNom = document.getElementById("list_id");
const name = document.getElementById('name_id');
const firstname = document.getElementById('firstname_id');
const license = document.getElementById('license_id');

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button[id="button_name_me_id"]').onclick=nameMeHandler;
},false);

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button[id="button_save_me_id"]').onclick=saveMeHandler;
},false);

function getObjs () {
    return new Promise((resolve, rejects) => {
        Promise.all([bareApi.getSoatiens(), bareApi.getTools()]).then(([responseSoatiens, responseTools]) => {
            let soatiensObj = [];
            let toolsObj = [];

            responseSoatiens.forEach(element => {
                soatiensObj.push(Object.assign(new Soatien, element));
            });

            responseTools.forEach(element => {
                toolsObj.push(Object.assign(new Tool, element));
            });
            
            resolve([soatiensObj, toolsObj]);
        }).catch(error => {
            console.log(error);
            rejects(error);
        });
    });
}

getObjs().then((data) => {
    let soatiens = data[0];
    let tools = data[1];

    listNom.innerHTML = null;

    for (let i = 0; i < soatiens.length; i++) {
         let nameList = `<li class="box">${soatiens[i].getFullName()}  ${tools[soatiens[i].toolid-1].getToolImg()}</li>`;
        listNom.innerHTML += nameList;
    }
}).catch((error) => {
    listNom.innerHTML = 'CONNEXION ERROR';
    console.log(error);
});

function nameMeHandler() {
    if(!name.value) {
        alert('Please tell me your name');
    } else {
        const resultText = document.getElementById('result_id');
        resultText.textContent = `Nice to meet you ${name.value} ${firstname.value}`;     
    } 
}

function saveMeHandler() {
    if(!name.value) {
        alert('Please tell me your name');
    } else {
        bareApi.postSoatiens(new Soatien(null, name.value, firstname.value, license.value, 3)).then(data => {
            console.log("creation : ", data);
        });
    }
}