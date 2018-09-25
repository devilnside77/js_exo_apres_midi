/* global document */
import '../styles/index.scss';
import { Soatien, Tool, bareApi } from './api/boostercamp.api';

const listNom = document.getElementById('list_id');
const name = document.getElementById('name_id');
const firstname = document.getElementById('firstname_id');
const license = document.getElementById('license_id');

function nameMeHandler() {
  const resultText = document.getElementById('result_id');

  if (!name.value) {
    resultText.textContent = 'What ???';

    return;
  }

  resultText.textContent = `Nice to meet you ${name.value} ${firstname.value}`;
}

function saveMeHandler() {
  const resultText = document.getElementById('result_id');

  if (!name.value) {
    resultText.textContent = 'What ???';

    return;
  }

  bareApi.postSoatiens(new Soatien(null, name.value, firstname.value, license.value, 3)).then((data) => {
    console.log(`creation : ${data}}`);
  });
}

function listenerForClick() {
  document.querySelector('button[id="button_name_me_id"]').addEventListener('click', nameMeHandler, false);
  document.querySelector('button[id="button_save_me_id"]').addEventListener('click', saveMeHandler, false);
}
document.addEventListener('DOMContentLoaded', listenerForClick, false);

function getObjs() {
  return new Promise((resolve, reject) => {
    Promise.all([bareApi.getSoatiens(), bareApi.getTools()]).then(([responseSoatiens, responseTools]) => {
      const soatiensObj = responseSoatiens.map(element => Object.assign(new Soatien(), element));
      const toolsObj = responseTools.map(element => Object.assign(new Tool(), element));

      resolve([soatiensObj, toolsObj]);
    }).catch((error) => {
      console.log(error);
      reject(error);
    });
  });
}

getObjs().then(([soatiens, tools]) => {
  listNom.innerHTML = null;

  soatiens.forEach((soatien) => {
    const nameList = `<li class="box">${soatien.getFullName()}  ${tools[soatien.toolid - 1].getToolImg()}</li>`;
    listNom.innerHTML += nameList;
  });
}).catch((error) => {
  listNom.innerHTML = 'CONNEXION ERROR';
  console.log(error);
});
