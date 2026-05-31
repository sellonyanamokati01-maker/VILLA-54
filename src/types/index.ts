import type { ReactNode } from 'react';

export interface RoomOption {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const NSFAS_APPLY_URL =
  'https://www.nsfas.org.za/content/accomodationprovider/views/index.html#!/AccommodationProvider';

export const WHATSAPP_NUMBER = '27623926399';
