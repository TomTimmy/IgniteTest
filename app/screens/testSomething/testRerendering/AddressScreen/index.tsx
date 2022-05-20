import { View, Text, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native"
import React, { useState, useEffect } from "react"
import Button from "../Button"
import styles from "./styles"
import { JustComponent } from "../JustComponent"

// ? 내가 기억하기로는 리렌더링 조건 중에 하나가 "이전에 저장되어있던 state 값과
// ? 현재의 state 값이 서로 다를 때"라고 알고있는데..
// ? 그러면 화면 안에 있는 여러 개의 state 중 하나의 state를 변경함으로써
// ? 리렌더링되는 상황을 가정해보면, 이 과정에서 다른 state들은 변경하지 않았으니까
// ? 이전 state 값과 비교해서 변화가 없으니, 얘넨 리렌더링이 안되고, '바뀐 state 부분만 리렌더링' 되는건가??
// ? 아니면 바뀐 state를 제외하고,
// ? 나머지 state들은 이전에 저장되어 있던 값을 저장한 상태로 '화면전체를 리렌더링'하는건가?
// ? 둘 중에 뭐가 맞는건지 헷갈리네🥲

export const AddressScreen = () => {
  const [state, setState] = useState(100)
  const [anotherState, setAnotherState] = useState(-100)
  const [renderingCount, setRenderingCount] = useState(0)
  let justNumber = 0
  console.log("************************** AddressScreen **************************")
  console.log("AddressScreen: justNumber", justNumber)
  console.log("AddressScreen 렌더링횟수", renderingCount)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
    >
      <SafeAreaView>
        <ScrollView style={{ borderWidth: 4, borderColor: "red" }} bounces={false}>
          <View style={styles.root}>
            {/* //? state */}
            <View style={styles.row}>
              <Text style={styles.label}>state</Text>
              <View style={styles.textBox}>
                <Text>{state}</Text>
              </View>
            </View>

            <Button
              text="state 조작하기"
              onPress={() => {
                setState((prev) => prev + 1)
                justNumber = justNumber + 1
                setRenderingCount((prev) => prev + 1)
                console.log("************************** AddressScreen **************************")
                console.log("state 조작하기 버튼, onPress 내부: justNumber", justNumber)
              }}
            />

            <View style={styles.devideLine} />

            <View style={styles.row}>
              <Text style={styles.label}>
                justNumber (얘는 useState 로 관리되고 있지않다. 그냥 변수일 뿐, sate 가 아니다.
                따라서, Rerendering 시, 초기화 되는 값이다.)
              </Text>
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
              text="anotherState 조작하기"
              onPress={() => {
                setAnotherState((prev) => prev - 1)
                setRenderingCount((prev) => prev + 1)
              }}
            />
          </View>

          <View style={styles.strongDevideLine} />

          <JustComponent parentRenderingCount={renderingCount} />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
