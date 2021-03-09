import { handlerPath } from 'src/common/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'api/v1/hello',
        response: {
          headers: {
            'Content-Type': '\'application/json\''
          }
        }
      }
    }
  ],
};
