import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  contract_duration: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
}
