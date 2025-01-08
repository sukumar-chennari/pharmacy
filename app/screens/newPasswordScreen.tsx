import TextBox from "@/components/TextBox";
import colors from "@/constants/colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function NewPasswordScreen() {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image source={require('../../assets/passForgot.png')} style={styles.image} />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create New Password</Text>
        <Text style={styles.subText}>
        Your new password must different from previous used password
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextBox placeholder="New Password" isPassword={true} />
        <TextBox placeholder="Confirm Password" isPassword={true}  />
        
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>


      </View>
    </View>
  );
}

export default NewPasswordScreen;

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
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '96%', // Full width for buttons
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
