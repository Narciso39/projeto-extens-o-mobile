import Routes from "@/src/routes";
import { store } from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

export default function HomeScreen() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </GestureHandlerRootView>
    </>
  );
}
