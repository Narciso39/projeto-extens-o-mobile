import api from "@/services/api";

export const postExpense = async (
  name: string,
  value: number,
  description: string,
  userId: string
) => {
  const response = await api.post("/expenses", {
    name,
    valueExpense: value,
    description,
    user_id: userId,
  });

  return response.data;
};
