export type AddContactResponse = {
  status: AddContactStatus;
  message: string;
};

export type AddContactStatus = 200 | 400 | 409 | 500;
