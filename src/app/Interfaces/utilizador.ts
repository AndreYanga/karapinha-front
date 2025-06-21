export interface Utilizador {

  id: number;
  nomeCompleto: string;
  email: string;
  telemovel: string;
  foto?: string;
  bi?: string;
  userName: string;
  password: string;
  perfilId: number;
  ativo: boolean;
  status: boolean;
}
