import TextBox from "@/components/TextBox";
import colors from "@/constants/colors";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/passForgot.png')} style={{ height: 250, width: 250 }} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Forgot Password?</Text>
        <Text style={styles.subText}>
          Don't worry! It happens, Please enter the email address or Mobile number associated with your account to receive a Verification Code.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextBox placeholder='Email / Mobile Number'/>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20, // Added margin to create spacing between text and input fields
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 10,
  },
  subText: {
    marginTop: 10,
    opacity: 0.7, // Slightly reduced opacity for better readability
    fontSize: 15,
    textAlign: 'center', // Centered for better alignment
    lineHeight: 22, // Added line height for improved readability
    marginHorizontal: 20, // Adds padding around the text
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal:10,
    // backgroundColor:'red'
  },

  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 17, // Added margin to give spacing from text input
    // width: '90%', // Ensures button width is consistent with input fields
    margin:8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',

  }
});
