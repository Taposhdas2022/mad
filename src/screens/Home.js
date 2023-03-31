import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



const Home=(props) =>{


 
    
    return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
          <Text style={{ fontSize: 50 }}>UIU QUIZ APP</Text>
        
    


          <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("ExamScreen");}}>
            <Text style={styles.loginText}>START EXAM</Text> 
            </TouchableOpacity>  
            
            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("NewsFeed");}}>
            <Text style={styles.loginText}>NEWS FEED</Text> 
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("AcademicCalenderScreen");}}>
            <Text style={styles.loginText}>ACADEMIC CALENDAR</Text> 
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={() => {
            props.navigation.navigate("Login");}}>
            <Text style={styles.loginText}>LOGOUT</Text> 
            </TouchableOpacity> 
          



        </View> 
      );
    }

    


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#93CCED",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    create_account: {
        height: 30,
        marginBottom: 30,
      },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#4A60E9",
    },
  });

  export default Home;

  
  
