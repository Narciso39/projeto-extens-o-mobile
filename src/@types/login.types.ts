export type AuthState = {
    isAuthenticated: boolean;
    token?: string | null;
  };

export type User = {
    // id: string ;
    // name: string;
    email: string;
    password: string;
}