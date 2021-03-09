import { CustomError } from '@common/types';
import middy from '@middy/core';

export const errorHandler = {
  onError: (handler: middy.HandlerLambda, next: middy.NextFunction) => {
    if ((handler.error as CustomError).status) {
      handler.response = {
        statusCode: (handler.error as CustomError).status,
        body: JSON.stringify({
          code: handler.error.name,
          message: handler.error.message
        })
      };

      // eslint-disable-next-line no-console
      console.log({
        message: 'An error has occurred',
        details: {
          errorCode: (handler.error as CustomError).name,
          errorMessage: (handler.error as CustomError).message,
          errorStatus: (handler.error as CustomError).status,
          errorStack: (handler.error as CustomError).stack
        }
      });

      return next();
    }

    handler.response = {
      statusCode: 500,
      body: JSON.stringify({ message: handler.error.message })
    };

    return next();
  }
};
