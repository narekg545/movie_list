export const PORT = 'PORT';
export const saltOrRounds = 10;
export const DESCENDING_ORDER = 'desc';
export const JWT_SECRET = 'JWT_SECRET';
export const JWT_EXPIRES_TIME = '5d';
export const PASSWORD = 'password';
export const CLOUDINARY = 'Cloudinary';

export const SUCCESS_MESSAGES = {
  CREATEMESSAGE: (name: string) => `${name} has been created Successfully`,
  UPDATEMESSAGE: (name: string) => `${name} has been updated Successfully`,
  DELETEMESSAGE: (name: string) => `${name} has been deleted Successfully`,
};

export const ERROR_MESSAGES = {
  EMAIL_TAKEN: 'Email ALready Taken',
  NOT_FOUND: 'No record found for given ID',
  NOT_REGISTERED: 'You are Not Registered User',
  PASSWORD_EMAIL_INVALID: 'Email or Password is Invalid',
  SESSION_EXPIRED: 'Your Session has expired! Please sign In',
  INVALID_INPUT_VALUE: 'Invalid input value.',
  UPLOAD_IMAGE_FAILED: 'Upload Image Failed',
};

export enum HTTP_METHOD {
  POST = 'POST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  GET = 'GET',
}

export enum MODEL_NAME {
  USER = 'User',
  MOVIE = 'Movie',
}
