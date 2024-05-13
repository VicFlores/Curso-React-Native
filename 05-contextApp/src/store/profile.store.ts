import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;

  changeInfo: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'John Doe',
  email: 'johndoe@gmail.com',

  changeInfo: (name: string, email: string) => {
    set({name, email});
  },
}));
