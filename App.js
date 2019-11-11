import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  const alertSend = () => {
    Alert.alert(
      'Message sender'
    )
  }

  const alertFollow = () => {
    Alert.alert(
      'Followed'
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerGroup}>
        <View style={styles.imgHeader}>
          <Image
            style={styles.avatar}
            source={require('./assets/avatar.jpg')}
          />
        </View>

        <View style={styles.userInfo}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}> Viết Hải  </Text>
          <Text style={{ fontSize: 17, color: 'gray' }}>GGGGGG</Text>
          <View style={styles.boxBtn}>
            <TouchableOpacity onPress={alertFollow}  style={[styles.btnFollow, styles.btn]} >
              <Text style={{ color: 'white', fontSize: 16 }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={alertSend}  style={[styles.btnSend, styles.btn]} >
              <Ionicons name='md-send' size={20} color='white' />
            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={styles.parameterGroup} >
        <View style={styles.boxParameter}>
          <Text style={styles.textNumber}>201</Text>
          <Text style={{ color: "gray" }}>Photos</Text>
        </View>

        <View style={styles.boxParameter}>
          <Text style={styles.textNumber}>15K</Text>
          <Text style={{ color: "gray" }}>Followers</Text>
        </View>

        <View style={styles.boxParameter}>
          <Text style={styles.textNumber}>201</Text>
          <Text style={{ color: "gray" }}>Following</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.imgGroup} >
          <View>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.imgage} />;
            })}
          </View>
          <View style={{ marginLeft: 10 }}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.imgage} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 0,


  },
  headerGroup: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  imgHeader: {
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  userInfo: {
    flex: 1.5,
  },
  boxBtn: {
    flexDirection: "row",
    marginTop: 15,
  },
  btn: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  btnFollow: {
    backgroundColor: FOLLOW_COLOR,
    width: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnSend: {
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
    width: 50,

  },
  parameterGroup: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  boxParameter: {
    alignItems: "center",
  },
  textNumber: {
    fontSize: 23,
    fontWeight: "400",
    marginBottom: 5,
  },

  imgGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  scrollView: {
    flex: 0.7,
    marginTop: 10,
  },
  imgage: {
    borderRadius: 10,
    marginBottom: 10,
    width: 155,
    height: 270,
  }
});
