import { errorHandler } from '@common/middlewares/errorHandler.middleware';
import { middleware } from '@handlers/postHello/request.validation';
import { wrap } from '@common/lambda/wrap';

const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      test: 'ok',
      test2: process.env.HELLO_TEST_2
    })
  };
};

export const main = wrap(handler)
  .use(middleware)
  .use(errorHandler);
