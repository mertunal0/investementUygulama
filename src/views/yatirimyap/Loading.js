import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Picker,
  Text,
} from 'react-native';
import {Button} from '../../components/Button';
import PortfolioAlloc from 'portfolio-allocation';
import { Icon } from 'react-native-elements'
import Firebase from 'firebase'


export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userMiktar: this.props.navigation.getParam("miktarUser"),
          userKazanc: this.props.navigation.getParam("kazancOraniUser"),
          userRisk: this.props.navigation.getParam("riskTercihiUser"),

          enflasyon: 0.15, // yıllık enflasyon bilgisi.

          yatirimAraclari: [],
          yatirimAraclariEliminated: [],

          results: 0
        }
    }

    NLPOptimisation(tempYatirimAraclari) {
        var dizitempEliminated = []
        var dumbreactnativeDizi = []
        for(var i = 0; i<tempYatirimAraclari.length; i++) {
            if (tempYatirimAraclari[i].ortalamaGetiri > this.state.enflasyon + this.state.userRisk / 1000) {
                this.state.yatirimAraclariEliminated.push(tempYatirimAraclari[i]);
                dizitempEliminated.push(tempYatirimAraclari[i]);
                this.setState({yatirimAraclariEliminated: dizitempEliminated});
            }
        }
        console.log(this.state.yatirimAraclariEliminated)
        
        var dizitempEliminated2 = []
        if(this.state.yatirimAraclariEliminated.length < 3) {
            tempYatirimAraclari.sort(function(a, b) {
              return parseFloat(b.standartSapma) - parseFloat(a.standartSapma)
            });
            dizitempEliminated2 = tempYatirimAraclari.slice(28,32);
            dumbreactnativeDizi = dizitempEliminated2;
        }
        else if(this.state.yatirimAraclariEliminated.length < 6) {
            dumbreactnativeDizi = this.state.yatirimAraclariEliminated;
        }
        else if(this.state.yatirimAraclariEliminated.length < 6 + this.state.userRisk) {
            var kesmeNoktasi = this.state.yatirimAraclariEliminated.length * this.state.userRisk / 10
            if (this.state.yatirimAraclariEliminated.length - kesmeNoktasi < 3.5) {
                var eliminated1 = this.state.yatirimAraclariEliminated.slice(this.state.yatirimAraclariEliminated.length-5, this.state.yatirimAraclariEliminated.length-1)
                dumbreactnativeDizi = eliminated1;
            }
            else{
                kesmeNoktasi = Math.floor(kesmeNoktasi);
                var eliminated2 = this.state.yatirimAraclariEliminated.slice(kesmeNoktasi - 1, kesmeNoktasi + 3)
                dumbreactnativeDizi = eliminated2;
            }
        }
        else{
            tempYatirimAraclari.sort(function(a, b) {
              return parseFloat(b.standartSapma) - parseFloat(a.standartSapma)
            });

            var eliminated3 = this.state.yatirimAraclariEliminated.slice(Math.abs(this.state.userRisk-1) , Math.abs(this.state.userRisk+3));
            dumbreactnativeDizi = eliminated3;
        }

        var ArraysForNlpOpt= [];
        var cov = require( 'compute-covariance' );

        var dizi2 = []
        //bize lazım olan, elde kalan yatırım araçlarının içindeki 20'lik 2 diziyi birlestireceğiz ve dizi2'yi elde edeceğiz.
        for(var i = 0; i < dumbreactnativeDizi.length; i++) {
          dizi2.push( dumbreactnativeDizi[i].gecmisDegisim.concat(dumbreactnativeDizi[i].gelecekTahmin) )
        }
        //nlp optimization işlemi için dizimiz hazır.
        ArraysForNlpOpt = dizi2;
        
        var covarianceMatrix = [];
        //koveryans matrisini yaratıyoruz.
        covarianceMatrix = cov(ArraysForNlpOpt);

        //minimizasyon yapıyoruz.
        var sonuc = PortfolioAlloc.equalRiskContributionWeights(covarianceMatrix);
        //sonuçları state'e yazalım.
        this.setState({results: sonuc});

        //navigate oluyoruz işlemler bitince.
        this.props.navigation.navigate('Sonuc', {
          results: sonuc, 
          miktarUser: this.state.userMiktar, 
          kalanAraclar: dumbreactnativeDizi
        }); 
    }


    componentDidMount() {
      var database = Firebase.database();
      var ref = database.ref('/')

      ref.on('value', gotData.bind(this), errData);
      
      function gotData(data) {
        //databaseden veriyi çektik. bunu yatirimAraclari'na attık.
        var yatirimAraclari = data.val()
        //isimler dbdeki key'ler oldu.
        var isimler = Object.keys(yatirimAraclari);
        
        //asıl kullanacağımız cinste olan diziye tempYatirimAraclari dedik.
        var tempYatirimAraclari = new Array(32)
        for(let i = 0; i < 32; i++) {
          //istediğimiz formata dönüştürüyoruz.
          tempYatirimAraclari[i] = {};
        }
        
        //sonra istediğimiz dataları istediğimiz variable isimleriyle pushluyoruz.
        //ilk olarak isimler
        for(let i = 0; i < 32; i++) {
          tempYatirimAraclari[i].isim = isimler[i];
        }

        //ortalama getirileri çekiyoruz. bunu da pushluyoruz.
        var ortalamaGetiriler = []
        for(let i=0; i<32 ; i++) {
          ortalamaGetiriler[i] = yatirimAraclari[isimler[i]].Getiri;
        }
        //push
        for(let i = 0; i < 32; i++) {
          tempYatirimAraclari[i].ortalamaGetiri = ortalamaGetiriler[i];
          tempYatirimAraclari[i].ortalamaGetiri = tempYatirimAraclari[i].ortalamaGetiri[0];
        }

        //standart sapmayı çekiyoruz ve pushluyoruz.
        var standartSapmalar = []
        for(let i=0; i<32; i++) {
          standartSapmalar[i] = yatirimAraclari[isimler[i]].Sapma;
        }
        //push
        for(let i = 0; i < 32; i++) {
          tempYatirimAraclari[i].standartSapma = standartSapmalar[i];
          tempYatirimAraclari[i].standartSapma = tempYatirimAraclari[i].standartSapma[0];
        }

        //LSTM çıktısını çekip pushluyoruz.
        var gelecekTahminler = []
        for(let i = 0; i< 32; i++) {
          gelecekTahminler[i] = yatirimAraclari[isimler[i]].Dizi
        }
        //push
        for(let i = 0; i <32 ; i++) {
          tempYatirimAraclari[i].gelecekTahmin = gelecekTahminler[i];
        }

        //Investing verisini çekip pushluyoruz.
        var gecmisDegisimler = []
        for(let i = 0; i < 32; i++) {
          gecmisDegisimler[i] = yatirimAraclari[isimler[i]].Change
        }
        //bunlar 0,1,2 indexlerle değil, başka key'lerle tanımlanmış. tarihler key olarak kullanılmı.
        //bu keylerden kurtulmak için şu işlemleri yapıyoruz.
        var tempGecmisDegisimler = []
        for(let i = 0; i < 32; i++) {
          tempGecmisDegisimler[i] = Object.values(gecmisDegisimler[i])
        }
        gecmisDegisimler = tempGecmisDegisimler
        //Push
        for(let i = 0; i<32; i++) {
          tempYatirimAraclari[i].gecmisDegisim = gecmisDegisimler[i];
        }
        
        // böylece veriyi tamamen istediğimiz formata sokmuş olduk. artık state'e pushlayabiliriz:
        this.setState({yatirimAraclari: tempYatirimAraclari});

        this.NLPOptimisation(tempYatirimAraclari);
      }
  
      function errData(error) {
        console.log(error)
      }
    }



    static navigationOptions = { 
      header: null,
    }


  render() {
    return (
      <View style={styles.container}>
        <Icon name={"loading1"} size={40} type={"antdesign"} color={"#3dd3fc"}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS == 'ios' ? 21:0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center"
  },
});