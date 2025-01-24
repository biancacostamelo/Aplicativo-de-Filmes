import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>Filmes</Text>
      <View style={style.areaFilme}>
        <ImageBackground
          style={style.imgFilmeArea}
          source={require('./assets/images/carol.jpg')}
          imageStyle={style.imgFilme}></ImageBackground>
        <View style={style.areaText}>
          <Text style={style.filmeTitulo}>Carol</Text>
          <Text style={style.descricao} numberOfLines={4}>
            Carol (2015) é um drama romântico ambientado na década de 1950, que
            segue o relacionamento entre Therese, uma jovem tímida que trabalha
            em uma loja de departamentos, e Carol, uma mulher mais velha,
            sofisticada e casada. Quando elas se conhecem, surgem sentimentos
            profundos entre elas, mas o contexto social da época e os obstáculos
            pessoais tornam o romance complicado. Carol enfrenta a batalha por
            sua filha em meio a um processo de divórcio, enquanto Therese lida
            com a descoberta de sua própria identidade e desejos. O filme é uma
            reflexão sensível sobre o amor, a repressão e a busca por liberdade
            em uma sociedade conservadora, e é amplamente reconhecido pela
            profundidade emocional, atuações excepcionais e direção cuidadosa.
          </Text>
          <View style={style.areaGenero}>
            <View style={style.genero}>
              <Text numberOfLines={1} style= {style.textGenero}>Romance</Text>
            </View>
            <View style={style.genero}>
              <Text numberOfLines={1} style= {style.textGenero}>Drama</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#232323',
    paddingTop: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 500,
    color: '#fff',
  },
  areaFilme: {
    backgroundColor: '#fff',
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  imgFilmeArea: {
    width: '30%',
    height: '100%',
    backgroundColor: '#695930',
  },
  areaText: {
    width: '70%',
    backgroundColor: '#342098',
    padding: 10,
    justifyContent: 'space-between'
  },
  filmeTitulo: {
    color: '#fff',
  },
  imgFilme: {
    width: '100%',
    resizeMode: 'cover',
  },
  descricao: {
    maxHeight: 55,
    overflow: 'scroll',
  },
  genero: {
    height: 30,
    width: 65,
    borderRadius: 10,
    backgroundColor: '#587533',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGenero: {
    color: 'white',
    fontSize: 11
  },
  areaGenero: {
    gap: 8,
    flexDirection: 'row'
  }
});
