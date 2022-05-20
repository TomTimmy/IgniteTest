import { View, Text, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native"
import React, { useState, useEffect } from "react"
import styles from "./styles"
import { NOTO, NOTO_B, PRETENDARD, PRETENDARD_B, POPPINS, POPPINS_I } from "./styles"
export const TestFontScreen = () => {
  // const [state, setState] = useState(100)
  // const [anotherState, setAnotherState] = useState(-100)
  // const [renderingCount, setRenderingCount] = useState(0)
  // let justNumber = 0
  // console.log("************************** TestFontScreen **************************")
  // console.log("TestFontScreen: justNumber", justNumber)
  // console.log("TestFontScreen 렌더링횟수", renderingCount)

  return (
    <SafeAreaView>
      <ScrollView style={styles.root} bounces={false}>
        <View
          style={{
            marginVertical: 30,
            backgroundColor: "black",
            width: "100%",
            height: 30,
            alignSelf: "center",
          }}
        />
        <Text>폰트 크기 20px 동일 {"\n"}</Text>

        <Text>기본 배열 </Text>
        <Text> : 폰트별 기본 상하 padding 값을 볼 수 있다</Text>
        <View style={styles.fontViewsRoot}>
          <View style={[styles.textBox, { backgroundColor: "lightgreen" }]}>
            <Text style={PRETENDARD}>Pret1모</Text>
          </View>

          <View style={styles.textBox}>
            <Text style={NOTO}>Noto1모</Text>
          </View>

          <View style={[styles.textBox, { backgroundColor: "pink" }]}>
            <Text style={POPPINS}>Popp1모</Text>
          </View>

          <View style={[styles.textBox, { backgroundColor: "olive" }]}>
            <Text style={{ fontSize: 24, color: "black" }}>Dflt1모</Text>
          </View>
        </View>

        <View style={[styles.textBox, { backgroundColor: "olive" }]}>
          <Text style={{ fontSize: 24, color: "black" }}>Default 기본폰트 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "lightgreen" }]}>
          <Text style={PRETENDARD}>Pretendard 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={NOTO}>Noto Sans KR 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "pink" }]}>
          <Text style={POPPINS}>Poppins 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "olive" }]}>
          <Text style={{ fontSize: 24, color: "black" }}>Default 기본폰트 1234 모든인간 ㅎ 한</Text>
        </View>

        <View
          style={{
            marginVertical: 30,
            backgroundColor: "black",
            width: "100%",
            height: 30,
            alignSelf: "center",
          }}
        />

        <Text>justifyContent: "center" 버전</Text>
        <Text>: 상하 기준 중앙정렬. code 상으로는 중앙정렬이지만,</Text>
        <Text>폰트 자체의 상하 padding 값 차이로 인해, 완벽하게 중앙정렬이 되지 않는다.</Text>
        <View style={styles.fontViewsRoot}>
          <View
            style={[styles.textBox, { backgroundColor: "lightgreen", justifyContent: "center" }]}
          >
            <Text style={PRETENDARD}>Pret1모</Text>
          </View>

          <View style={styles.textBox}>
            <Text style={NOTO}>Noto1모</Text>
          </View>

          <View style={[styles.textBox, { backgroundColor: "pink", justifyContent: "center" }]}>
            <Text style={POPPINS}>Popp1모</Text>
          </View>

          <View style={[styles.textBox, { backgroundColor: "olive", justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, color: "black" }}>Dflt1모</Text>
          </View>
        </View>

        <View style={[styles.textBox, { backgroundColor: "olive", justifyContent: "center" }]}>
          <Text style={{ fontSize: 24, color: "black" }}>Default 기본폰트 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "lightgreen", justifyContent: "center" }]}>
          <Text style={PRETENDARD}>Pretendard 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={NOTO}>Noto Sans KR 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "pink", justifyContent: "center" }]}>
          <Text style={POPPINS}>Poppins 1234 모든인간 ㅎ 한</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: "olive", justifyContent: "center" }]}>
          <Text style={{ fontSize: 24, color: "black" }}>Default 기본폰트 1234 모든인간 ㅎ 한</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
