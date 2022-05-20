import { Platform, StyleSheet, TextStyle } from "react-native"

//! iOS 설정시, font family name 말고,
//! Android 때 처럼 file name 으로 해도 적용 잘 된다 :)

export const NOTO: TextStyle = {
  fontFamily: Platform.select({
    ios: "NotoSansKR-Regular", // The font family name
    android: "NotoSansKR-Regular", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
}

export const NOTO_B: TextStyle = {
  fontFamily: Platform.select({
    ios: "NotoSansKR-Bold", // The font family name
    android: "NotoSansKR-Bold", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
  // fontWeight: "bold",
}

export const PRETENDARD: TextStyle = {
  fontFamily: Platform.select({
    ios: "Pretendard-Regular", // The font family name
    android: "Pretendard-Regular", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
}

export const PRETENDARD_B: TextStyle = {
  fontFamily: Platform.select({
    ios: "Pretendard-Bold", // The font family name
    android: "Pretendard-Bold", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
  fontWeight: "bold",
}

export const POPPINS: TextStyle = {
  fontFamily: Platform.select({
    ios: "Poppins", // The font family name
    android: "Poppins-Regular", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
}

export const POPPINS_I: TextStyle = {
  fontFamily: Platform.select({
    ios: "Poppins-MediumItalic", // The font family name
    android: "Poppins-MediumItalic", // The file name
  }),
  fontSize: 24,
  color: "black",
  includeFontPadding: false,
  // textAlignVertical: "center",
}

const styles = StyleSheet.create({
  root: {
    // padding: 10,
    backgroundColor: "#B1C9DE",
  },
  textBox: {
    backgroundColor: "yellow",
    height: "auto",
    justifyContent: "center",
    margin: 1,
    // borderWidth: 1,
    // borderColor: "lightgrey",
  },
  fontViewsRoot: {
    backgroundColor: "black",
    flexDirection: "row",
    width: "100%",
    // height: 30,
    marginVertical: 10,
  },
})

export default styles
