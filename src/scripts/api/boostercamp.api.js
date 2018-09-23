import Soatien from '../api/entities/Soatien';
import Tool from '../api/entities/tool';
import xhr from '../api/tools/XhrUtils';

const bareApi = {
    'getTools' : () => xhr('GET', 'http://localhost:3000/tools', null),
    'getSoatiens' : () => xhr('GET', 'http://localhost:3000/soatiens', null),
    'postSoatiens' : (entity) => xhr('POST', 'http://localhost:3000/soatiens', JSON.stringify(entity))
};

export {Soatien, Tool, bareApi};