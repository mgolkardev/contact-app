export interface ContactDto {
  id: number;
  first_name: string;
  last_name: string;
  email?: string;
  gender: string;
  phone: string;
  note: string;
  telegram?: string;
  avatar: string;
  company: string;
  address: string;
  createdAt: number;
  updatedAt: number;
}
