import TextBox from "@/components/TextBox";
import colors from "@/constants/colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function VerifyPasswordScreen() {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image source={require('../../assets/passForgot.png')} style={styles.image} />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Verify Password</Text>
        <Text style={styles.subText}>
          Please enter the verification code sent to your email or mobile number.
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextBox placeholder="Verification Code" />
        
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </Pressable>

        {/* Resend Button */}
        <Pressable style={styles.resendButton}>
          <Text style={styles.resendText}>Resend</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default VerifyPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5', // Added background color for better UI
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 20, // Space between the image and text
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20, // Space between the text and input fields
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 10,
    color: '#333', // Darker color for better contrast
  },
  subText: {
    marginTop: 10,
    opacity: 0.7, // Reduced opacity for a subtle effect
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22, // Improved line spacing
    marginHorizontal: 20,
    color: '#666', // Gray color for subtext
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%', // Full width for buttons
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 15,
  },
  resendText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
