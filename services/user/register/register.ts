import api from "@/services/api";

export const userRegister = async (
  name: string,
  value: string,
  password: string
) => {
  try {
    const result = await api.post(
      "/users",
      {
        name,
        value,
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
