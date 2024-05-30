import React from "react";
import { Header } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={["left", "right"]}>
      <Header
        backgroundColor="#65451F"
        leftComponent={
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <Feather
            name="share"
            size={24}
            color="white"
            onPress={() => navigation.navigate("ProfileSettings")}
          />
        }
      />
    </SafeAreaView>
  );
};


export default CustomHeader;
