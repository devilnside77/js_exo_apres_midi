import Soatien from '../scripts/Soatien';
import xhr from '../scripts/XhrUtils';

const bareApi = {
    'getPersons' : (entity = null) => xhr('GET', 'http://localhost:3000/persons', entity, entity),
    'getSoatiens' : (entity = null) => xhr('GET', 'http://localhost:3000/soatiens', entity)
};

export {Soatien, bareApi};