import { TextFieldProps } from '@mui/material';

export declare interface IImageNext {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export declare interface ITextField<T> {
  col: { xs: number };
  textField: TextFieldProps & {
    name: typeof T;
  };
}

export interface ContactTypeRequest {
  from: string;
  to: string;
  subject: string;
  html: string;
}
