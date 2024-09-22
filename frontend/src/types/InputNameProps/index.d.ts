export interface InputNameProps {
    name: string;
    src: string;
    alt: string;
    classname?: string;
    usernameData?: (state: string) => void;
    passwordData?: (state: string) => void;
  }
  