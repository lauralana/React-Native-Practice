import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import DisplayImages from "./src/screens/DisplayImages";
import CounterScreen from "./src/screens/CounterScreen";
import ColorSreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: DisplayImages,
    Counter: CounterScreen,
    Color: ColorSreen,
    Square: SquareScreen,
    Reducer: SquareScreenReducer,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
