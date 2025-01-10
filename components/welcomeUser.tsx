import colors from "@/constants/colors"
import { StyleSheet, Text, View } from "react-native"



function WelcomeUser(){
    return <View style={styles.container}>
        <Text style={[styles.userText,styles.text]}>Hi, {"User Name"}</Text>
        <Text style={styles.text}>Welcome back to MedleyMed</Text>
    </View>
}
export default WelcomeUser

const styles=StyleSheet.create({
    container:{
        paddingTop:5,
        marginVertical:10
    },
    text:{
    fontSize:20,
    lineHeight:30,
    fontWeight:"bold"
    },
    userText:{
        color:colors.primary
    },
})