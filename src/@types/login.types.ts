export type AuthState = {
    isAuthenticated: boolean;
    token?: string | null;
    user_id: string | null;
  };

export type User = {
    // id: string ;
    // name: string;
    email: string;
    password: string;
}