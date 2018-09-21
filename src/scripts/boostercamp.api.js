import Soatien from '../scripts/Soatien';
import Tool from '../scripts/tool';
import xhr from '../scripts/XhrUtils';

const bareApi = {
    'getTools' : (entity = null) => xhr('GET', 'http://localhost:3000/tools', entity, entity),
    'getSoatiens' : (entity = null) => xhr('GET', 'http://localhost:3000/soatiens', entity),
    'postSoatiens' : (entity) => xhr('POST', 'http://localhost:3000/soatiens', JSON.stringify(entity))
};

export {Soatien, Tool, bareApi};