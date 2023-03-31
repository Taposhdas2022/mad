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



const AcademicCalenderScreen= (props) =>{


 
    
    return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
          <Text style={{ fontSize: 20}}>Spring 2023 Trimester 
          (Undergraduate Programs)
(BBA, BBA in AIS, BSECO, BSCSE & BSEEE)
Jan 23 – 25, 2023	Mon – Wed	Course Advising & Registration
Jan 25, 2023	Wed	 
Last day of Course Advising & Registration without Fine
		Last day to drop course(s) with 100% adjustable refund only
Jan 26, 2023	Thu	Saraswati Puja: There will be no academic activities
Jan 28, 2023	Sat	Classes Begin
Feb 3, 2023	Fri	Orientation Program: All Undergraduate & Graduate Programs at 3:00 PM
Feb 5, 2023	Sun	Last day to apply for Grade Change of a course (if any) of Fall 2022 Trimester.
Note: No application will be considered after the deadline.
Feb 12, 2023	Sun	Last day of Course Advising & Registration with a Fine of
Tk. 1,000/-
		Last day of Grade Submission of Incomplete Grades of Fall 2022 Trimester by concerned Department/Program Office.
Feb 13, 2023	Mon	Make-up class: Regular Tuesday Classes
Feb 19, 2023	Sun	1st installment: A fine of Tk. 1,000/- will be imposed if 40% Tuition Fee and Trimester Fee is not paid within this date.
Feb 20, 2023	Mon	Make-up class: Regular Wednesday Classes
Feb 21, 2023	Tue	Holiday: International Mother Language Day
Mar 6, 2023	Mon	Make-up class: Regular Sunday Classes
Mar 8, 2023	Wed	Holiday: *Shab-e-Barat
Mar 11 – 18, 2023	Sat – Sat	Mid-Term Exam
Mar 15, 2023	Wed	2nd installment:  A fine of Tk. 1,000/- will be imposed if 70% Tuition Fee and Trimester Fee is not paid within this date.
Mar 17, 2023	Fri	Holiday: Birthday of Father of the Nation Bangabandhu Sheikh Mujibur Rahman
Mar 20, 2023	Mon	Make-up class: Regular Saturday Classes
Mar 26, 2023	Sun	Holiday: Independence Day
Mar 29, 2023	Wed	Last Day of Course Withdrawal
Apr 3, 2023	Mon	Make-up class: Regular Wednesday Classes
Apr 12, 2023	Wed	3rd installment:  A fine of Tk. 1,000/- will be imposed if 100% Tuition Fee and Trimester Fee is not paid within this date.
Apr 14, 2023	Fri	Holiday: Bangla New Year
Apr 19, 2023	Wed	Holiday: *Shab-e-Qad’r
Apr 20 – 27, 2023	Thu – Thu	Holiday: *Eid-ul-Fit’r
May 1, 2023	Mon	Holiday: May Day
May 4, 2023	Thu	Holiday: *Buddha Purnima
May 4 – 6, 2023	Thu – Sat	Classes will remain suspended
May 7 – 15, 2023	Sun – Mon	Final Exam
May 20, 2023	Sat	Last day of Grade Submission (including Self-Study courses)
* Subject to the appearance of the moon.
UIU will remain closed on the day(s) declared as Government Holiday by the Govt. of the People’s Republic of Bangladesh.
Classes of Summer 2023 Trimester Begin: May 27, 2023 (Sat)
Admission Test for Summer 2023 Trimester:
1st Admission Test: March 3, 2023 (Fri) – Last Date of Admission: March 15, 2023 (Wed)
2nd Admission Test: April 7, 2023 (Fri) – Last Date of Admission: April 19, 2023 (Wed)
3rd Admission Test: May 12, 2023 (Fri) – Last Date of Admission: May 21, 2023 (Sun)</Text>
        

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

  export default AcademicCalenderScreen;

  