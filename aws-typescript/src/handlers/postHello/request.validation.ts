import * as joi from 'joi';
import { RequestValidationParam } from '@handlers/postHello/types';
import ValidationError from '@common/errors/validation.error';

const schema = joi.object({
  firstName: joi.string().pattern(/^[a-zA-Z ]{1,40}$/),
  lastName: joi.string().pattern(/^[a-zA-Z ]{1,40}$/)
});

export const validation = async (data: RequestValidationParam) => {
  try {
    const validated = await schema.validateAsync(data);

    return validated;
  } catch (error) {
    throw new ValidationError({
      message: 'Could not validate input',
      status: 400,
      severity: 'warn'
    });
  }
};

export const middleware = {
  before: async (handler, next) => {
    handler.event.body = await validation(handler.event.body);

    return next();
  }
};
