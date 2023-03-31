import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Registration from "./src/screens/Registration";
import Forget_password from "./src/screens/Forget_password";
import ExamScreen from "./src/screens/ExamScreen";
import NewsFeed from "./src/screens/NewsFeed";
import AcademicCalenderScreen from "./src/screens/AcademicCalenderScreen";


const stack = createStackNavigator();

function App() {

  return(

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name ="Login" component={Login}/>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Registration" component={Registration}/>
        <stack.Screen name="Forget_password" component={Forget_password}/>
        <stack.Screen name="ExamScreen" component={ExamScreen}/>
        <stack.Screen name="NewsFeed" component={NewsFeed}/>
        <stack.Screen name="AcademicCalenderScreen" component={AcademicCalenderScreen}/>

        </stack.Navigator>
    </NavigationContainer>



  );



};
export default App;