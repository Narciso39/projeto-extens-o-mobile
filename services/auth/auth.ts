import api from "@/services/api";

interface UserAuth {
  id: string;
  name: string;
  email: string;
}

interface ApiLoginResponse {
  userAuth: UserAuth;
  token: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const userLogin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await api.post<ApiLoginResponse>("/users/auth", {
      email,
      password,
    });

    if (!response.data?.token || !response.data?.userAuth?.id) {
      console.error("Estrutura de dados incompleta:", response.data);
      throw new Error(
        "A resposta da API não contém todos os dados necessários"
      );
    }

    return {
      token: response.data.token,
      user: {
        id: response.data.userAuth.id,
        name: response.data.userAuth.name,
        email: response.data.userAuth.email,
      },
    };
  } catch (error) {
    console.error("Erro detalhado na autenticação:", {
      error: error || error,
      request: { email },
    });
    throw new Error("Falha no login. Verifique suas credenciais.");
  }
};
