import { Platform, StyleSheet, TextStyle } from "react-native"

export const Noto: TextStyle = {
  fontFamily: Platform.select({
    ios: "NotoSansKR", // The font family name
    android: "NotoSansKR-Regular", // The file name
  }),
  // ... whatever else
}

export const Pretendard: TextStyle = {
  fontFamily: Platform.select({
    ios: "Pretendard", // The font family name
    android: "Pretendard-Regular", // The file name
  }),
  // ... whatever else
}

export const Poppins: TextStyle = {
  fontFamily: Platform.select({
    ios: "Poppins", // The font family name
    android: "Poppins-Regular", // The file name
  }),
  // ... whatever else
}

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    // marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#ffffff",
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
  },
  textBox: {
    backgroundColor: "#ffffff",
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
    justifyContent: "center",
  },
  devideLine: {
    alignSelf: "center",
    width: "120%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
  strongDevideLine: {
    alignSelf: "center",
    width: "120%",
    height: 20,
    backgroundColor: "red",
  },
  errorLabel: {
    color: "red",
  },
})

export default styles
