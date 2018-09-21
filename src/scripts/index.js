import '../styles/index.scss'; 
import {Soatien, Tool, bareApi} from '../scripts/boostercamp.api';

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
        Promise.all([bareApi.getSoatiens(), bareApi.getTools()]).then(([responseSoatiens, responsetools]) => {
            let tools = responsetools;
            let soatiens = responseSoatiens;

            let soatiensObj = [];
            let toolsObj =[];
    
            for(let i = 0; i<soatiens.length; i++) {
                let soatien = soatiens[i]; 
                const soatienObj = new Soatien(soatien.id, soatien.name, soatien.firstname, soatien.license, soatien.toolid);
                soatiensObj.push(soatienObj);
            }
            
            for(let i = 0; i<tools.length; i++) {
                let tool = tools[i];
                const toolObj = new Tool(tool.id, tool.name, tool.htmlcode);
                toolsObj.push(toolObj);
            }
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

    for (let I = 0; I < soatiens.length; I++) {
         let nameList = `<li>${soatiens[I].getFullName()}  ${tools[soatiens[I].toolid-1].getToolImg()}</li>`;
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