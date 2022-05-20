import { View, Text, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import Button from "../Button"

export const JustComponent = ({ parentRenderingCount }) => {
  const [state, setState] = useState(200)
  const [anotherState, setAnotherState] = useState(-200)
  const [renderingCount, setRenderingCount] = useState(0)
  let justNumber = 0
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@ JustComponent @@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log("JustComponent: JustComponent - justNumber", justNumber)
  console.log("JustComponent 렌더링횟수", renderingCount + parentRenderingCount)

  return (
    <View style={styles.root}>
      {/* //? state */}
      <View style={styles.row}>
        <Text style={styles.label}>state</Text>
        <View style={styles.textBox}>
          <Text>{state}</Text>
        </View>
      </View>

      <Button
        text="JustComponent: state 조작하기"
        onPress={() => {
          setState((prev) => prev + 1)
          justNumber = justNumber + 1
          setRenderingCount((prev) => prev + 1)
          console.log("state 조작하기 버튼, onPress 내부: justNumber", justNumber)
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@ JustComponent @@@@@@@@@@@@@@@@@@@@@@@@@@")
        }}
        containerStyles={{ backgroundColor: "olive", borderColor: "darkgreen" }}
      />

      <View style={styles.devideLine} />

      <View style={styles.row}>
        <Text style={styles.label}>JustComponent - justNumber</Text>
        <View style={styles.textBox}>
          <Text>{justNumber}</Text>
        </View>
      </View>

      <View style={styles.devideLine} />

      {/* //? anotherState */}
      <View style={styles.row}>
        <Text style={styles.label}>anotherState state</Text>
        <View style={styles.textBox}>
          <Text>{anotherState}</Text>
        </View>
      </View>

      <Button
        text="JustComponent: anotherState 조작하기"
        onPress={() => {
          setAnotherState((prev) => prev - 1)
          setRenderingCount((prev) => prev + 1)
        }}
        containerStyles={{ backgroundColor: "olive", borderColor: "darkgreen" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: "khaki",
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

  errorLabel: {
    color: "red",
  },
})

export default styles
