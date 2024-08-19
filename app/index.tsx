import { Text, View } from "react-native";
import {GetStart} from "@/app/Screens/GetStart";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

export default function Index() {
  return ( 
    <View className="flex-1">
        <GetStart/>
        {/* <Login/> */}
        {/* <Signup/> */}

    </View>
  );
}
