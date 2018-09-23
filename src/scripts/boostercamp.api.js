import Soatien from '../scripts/Soatien';
import Tool from '../scripts/tool';
import xhr from '../scripts/XhrUtils';

const bareApi = {
    'getTools' : () => xhr('GET', 'http://localhost:3000/tools', null),
    'getSoatiens' : () => xhr('GET', 'http://localhost:3000/soatiens', null),
    'postSoatiens' : (entity) => xhr('POST', 'http://localhost:3000/soatiens', JSON.stringify(entity))
};

export {Soatien, Tool, bareApi};