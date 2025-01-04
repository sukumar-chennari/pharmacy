import Address from "@/components/address"
import CustomCarousel from "@/components/carousel"
import Features from "@/components/features"
import WelcomeUser from "@/components/welcomeUser"
import { FlatList, StyleSheet } from "react-native"
import { View } from "react-native"


function HomeScreen(){
    return <View style={styles.container}>
        <Address/>
        <View style={styles.innerContainer}>
        <WelcomeUser/>
        <CustomCarousel/>
        <Features/>
        </View>

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