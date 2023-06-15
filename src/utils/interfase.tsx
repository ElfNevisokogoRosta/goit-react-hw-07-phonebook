export interface ContactBookI {
  contacts: ContactI[];
  filter: string;
  isLoading: boolean;
  error: undefined | {};
}
export interface ContactI {
  createdAt?: string;
  id: string;
  name: string;
  number: string;
}
