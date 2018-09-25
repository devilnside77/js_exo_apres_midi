import Soatien from './entities/Soatien';
import Tool from './entities/Tool';
import xhr from './tools/xhrUtils';

const bareApi = {
  getTools: () => xhr('GET', 'http://localhost:3000/tools', null),
  getSoatiens: () => xhr('GET', 'http://localhost:3000/soatiens', null),
  postSoatiens: entity => xhr('POST', 'http://localhost:3000/soatiens', JSON.stringify(entity)),
};

export { Soatien, Tool, bareApi };
