import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  salary_range?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  salary_range?: string;
}
