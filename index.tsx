import Address from "@/components/address"
import CustomCarousel from "@/components/carousel"
import Features from "@/components/features"
import WelcomeUser from "@/components/welcomeUser"
import { ScrollView, StyleSheet } from "react-native"
import { View } from "react-native"


function HomeScreen(){
    return <View style={styles.container}>
        <Address/>
        <ScrollView style={styles.innerContainer}>
        <WelcomeUser/>
        <CustomCarousel/>
        <Features/>
        </ScrollView>

    </View>
}

export default HomeScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    innerContainer:{
        paddingHorizontal:10,
    }
})