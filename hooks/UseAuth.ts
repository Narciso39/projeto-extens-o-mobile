import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { token, userId } = useSelector((state: RootState) => state.rootAuth);

  if (!token || !userId) {
    throw new Error("Usuário não autenticado");
  }

  return { token, userId };
};
