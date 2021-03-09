
export type RequestValidationParam = {
  firstName: string;
  lastName: string;
};

export type ErrorParams = {
  name?: string;
  message?: string;
  severity?: string;
  status?: number;
};
