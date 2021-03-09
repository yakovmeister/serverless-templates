import { ErrorParams } from '@handlers/postHello/types';

export default class ValidationError extends Error {
  public id: string;
  public status: number;
  public name: string;
  public message: string;
  public severity: string;

  constructor(opts: ErrorParams) {
    super();

    this.name       = 'ValidationError';
    this.message    = opts.message;
    this.status     = opts.status;
    this.severity   = opts.severity;

    Error.captureStackTrace(this, ValidationError);
  }
}
