import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FlowProvider } from "../context/FlowContext";
import AuthNavigator from "./AuthNavigator";
import MainMenuNavigator from "./MainMenuNavigator";
import OnboardingNavigator from "./OnboardingNavigator";

const MainAppNavigator = () => {
  const { state } = useContext(AuthContext);
  const { isSignedIn, isFirstTime } = state;

  if (isFirstTime) {
    return <OnboardingNavigator />;
  } else if (isSignedIn) {
    return (
      <FlowProvider>
        <MainMenuNavigator />
      </FlowProvider>
    );
  } else {
    return <AuthNavigator />;
  }
};

export default MainAppNavigator;
