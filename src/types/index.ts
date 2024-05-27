import { UseFormRegisterReturn } from 'react-hook-form';

export interface SelectFieldProps {
  height: string;
  error: string;
  children: string;
  placeholder: string;
  label: string;
  required: string;
  my: string;
}

export interface SignUpProps {
  label?: string;
  required?: {
    value: boolean;
    message: string;
  };
  placeholder?: string;
  bgColor?: string;
  error?: any;
  register?: UseFormRegisterReturn; 
  labelNewClasses?: string;
  type?: string;
  autocomplete?: string;
}
