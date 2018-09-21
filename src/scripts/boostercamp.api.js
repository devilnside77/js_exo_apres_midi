import Soatien from '../scripts/Soatien';
import xhr from '../scripts/XhrUtils';

const bareApi = {
    'getPersons' : (entity = null) => xhr('GET', 'http://localhost:3000/persons', entity, entity),
    'getSoatiens' : (entity = null) => xhr('GET', 'http://localhost:3000/soatiens', entity),
    'postPersons' : (entity) => xhr('POST', 'http://localhost:3000/persons', JSON.stringify(entity)),
    'postSoatiens' : (entity) => xhr('POST', 'http://localhost:3000/soatiens', JSON.stringify(entity))
};

export {Soatien, bareApi};