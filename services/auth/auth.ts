import api from "../api";

export const userLogin = async (email: string, password: string) => {
  try {
    const result = await api.post(
      "/users/auth",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //   console.log(result.data);
    return result.data;
  } catch (error) {
    console.error("Erro ao logar:", error);
    throw error;
  }
};
