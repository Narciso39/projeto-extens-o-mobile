import api from "@/services/api";

export const postExpense = async (name: string, value: number, description: string) => {
    try {
        const result = await api.post(
          "/users",
          {
            name,
            value,
            description,
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
}