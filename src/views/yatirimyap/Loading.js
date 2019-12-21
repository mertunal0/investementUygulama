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


export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userMiktar: this.props.navigation.getParam("miktarUser"),
          userKazanc: this.props.navigation.getParam("kazancOraniUser"),
          userRisk: this.props.navigation.getParam("riskTercihiUser"),

          enflasyon: 0.15, // yıllık enflasyon bilgisi.

          yatirimAraclari: [
              {isim: "GAU", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "AA", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "BBBB", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "CCCCC", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "DDDDDD", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "EEEEE", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "FFFF", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "GGG", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "HH", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "JJJ", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "KKKK", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "LLLLL", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "MMMM", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "NNN", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "OO", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "PPPP", uuid: "348-sdlkj-23egf", ortalamaGetiri: 2, standartSapma: 0.0523543, gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
              {isim: "USD-TL", uuid: "657-esdfv-234da", ortalamaGetiri: 0.00001, standartSapma: 0.0745643*Math.sqrt(365), gecmisDegisim: [0,1,2,3,0,1], gelecekTahmin: [0,1,2,3,0,1]},
          ],
          yatirimAraclariEliminated: [],

          results: 0
        }
    }

    NLPOptimisation() {
        var dizitempEliminated = []
        var dumbreactnativeDizi = []
        for(var i = 0; i<this.state.yatirimAraclari.length; i++) {
            if (this.state.yatirimAraclari[i].ortalamaGetiri > this.state.enflasyon + this.state.userRisk / 1000) {
                this.state.yatirimAraclariEliminated.push(this.state.yatirimAraclari[i]);
                dizitempEliminated.push(this.state.yatirimAraclari[i]);
                this.setState({yatirimAraclariEliminated: dizitempEliminated});
            }
        }
        
        var dizitempEliminated2 = []
        if(this.state.yatirimAraclariEliminated.length < 3) {
            this.state.yatirimAraclari.sort(function(a, b) {
              return parseFloat(b.standartSapma) - parseFloat(a.standartSapma)
            });
            dizitempEliminated2 = this.state.yatirimAraclari.slice(28,32);
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
            this.state.yatirimAraclari.sort(function(a, b) {
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
      this.NLPOptimisation();
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