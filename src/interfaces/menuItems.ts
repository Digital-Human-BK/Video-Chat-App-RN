import { ImageSourcePropType } from 'react-native';

export type MenuItems = {
  id: number;
  iconName: string;
  title: string;
  customColor?: string;
}[];

export type ContactItems = {
  type: 'contact' | 'favorites';
  name: string;
  image?: ImageSourcePropType;
}[];
