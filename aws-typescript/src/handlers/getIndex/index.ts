import { handlerPath } from 'src/common/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'api/v1'
      }
    }
  ]
};
