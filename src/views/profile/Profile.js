import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Firebase } from '../../components/Firebase'
import firebase from "firebase"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          records: [
            {uid: "asdasd", tarih: "01/01/2019", butce: "₺10.000", kazanc: "12%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "GRN: 20%", sonuc5: "ASL: 20%"},
            {uid: "asdasd", tarih: "02/01/2019", butce: "₺20.000", kazanc: "13%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%"},
            {uid: "asdasd", tarih: "03/01/2019", butce: "₺30.000", kazanc: "14%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "ASL: 20%"},
            {uid: "asdasd", tarih: "04/01/2019", butce: "₺40.000", kazanc: "15%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc5: "ASL: 20%"},
            {uid: "asdasd", tarih: "05/01/2019", butce: "₺50.000", kazanc: "16%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "GRN: 20%", sonuc5: "ASL: 20%"},
            {uid: "asdasd", tarih: "06/01/2019", butce: "₺60.000", kazanc: "17%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "GRN: 20%", sonuc5: "ASL: 20%"},
            {uid: "asdasd", tarih: "07/01/2019", butce: "₺70.000", kazanc: "18%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "GRN: 20%", sonuc5: "ASL: 20%"},
            {uid: "asdasd", tarih: "08/01/2019", butce: "₺80.000", kazanc: "19%", risk: "3", sonuc1: "GAU: 20%", sonuc2: "EUR: 20%", sonuc3: "USD: 20%", sonuc4: "GRN: 20%", sonuc5: "ASL: 20%"},
          ]
        }
    }

    static navigationOptions = { 
      headerStyle: {
        marginHorizontal: 10,
        elevation: 0
      },
      headerTitle: () => (
        <Text style={styles.headerTitle}>{firebase.auth().currentUser.displayName}</Text>
      ),
      headerRight: () => (
        <Icon name={"exit-to-app"} size={25} type={"material-icons"} color={"#000"} onPress={() => firebase.auth().signOut()}/>
      ),
    }


  render() {
    var recordRenderer = [];
    for(let i = 0; i < this.state.records.length; i++){
      let j = 0
      recordRenderer.push(
        <TouchableOpacity key={i} style={styles.layout}>
          <View style={{flexDirection: "row", flex: 1, paddingHorizontal: 6}}>
            <View style={{flexDirection: "column", flex: 1, borderRightColor: "#eee", borderRightWidth: 1}}>
              <View style={{flexDirection: "row", flex: 1}}>
                <Text style={{flex: 1}}>Tarih:</Text>
                <Text style={styles.tarihText}>{this.state.records[i].tarih}</Text>
              </View>
              <View style={{flexDirection: "row", flex: 1}}>
                <Text style={{flex: 1}}>Bütçe:</Text>
                <Text style={styles.tarihText}>{this.state.records[i].butce}</Text>
              </View>
              <View style={{flexDirection: "row", flex: 1}}>
                <Text style={{flex: 1}}>Kazanç Oranı:</Text>
                <Text style={styles.tarihText}>{this.state.records[i].kazanc}</Text>
              </View>
              <View style={{flexDirection: "row", flex: 1}}>
                <Text style={{flex: 1}}>Risk Tercihi:</Text>
                <Text style={styles.tarihText}>{this.state.records[i].risk}</Text>
              </View>
            </View>
            <View style={{flexDirection: "column", flex: 1, paddingLeft: 5}}>
              <Text style={{flex: 1}}>Sonuçlar:</Text>
              <View style={{flexDirection: "row", flex: 1}}>
                <View style={{flexDirection: "column", flex: 1}}>
                  <View style={{flexDirection: "row", flex: 1}}>
                    <Text style={styles.sonuclarText}>{this.state.records[i].sonuc1}</Text>
                  </View>
                  <View style={{flexDirection: "row", flex: 1}}>
                    <Text style={styles.sonuclarText}>{this.state.records[i].sonuc2}</Text>
                  </View>
                  <View style={{flexDirection: "row", flex: 1}}>
                    <Text style={styles.sonuclarText}>{this.state.records[i].sonuc3}</Text>
                  </View>
                </View>

                <View style={{flexDirection: "column", flex: 1}}>
                  <View style={{flexDirection: "row", flex: 1}}>
                    <Text style={styles.sonuclarText}>{this.state.records[i].sonuc4}</Text>
                  </View>
                  <View style={{flexDirection: "row", flex: 1}}>
                    <Text style={styles.sonuclarText}>{this.state.records[i].sonuc5}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

    return (
        <View style={styles.container}>
          <Text style={styles.gecmisAramalarText}>Geçmiş aramalar.</Text>
          <ScrollView contentContainerStyle={styles.scrollContentContainer}>
            { recordRenderer }
          </ScrollView>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS == 'ios' ? 21:0,
    flex: 1,
  },
  scrollContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  gecmisAramalarText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    borderBottomWidth: 1, 
    borderBottomColor: "#eee",
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  layout: {
    marginVertical: 5,
    paddingBottom: 5,
    width: '100%',
    borderBottomColor: "#999",
    borderBottomWidth: 1, 
  },
  tarihText: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
    marginRight: 8,
  },
  sonuclarText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    marginLeft: 8,
  }
});