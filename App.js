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
    <SafeAreaView style={style.color}>
      <Text style={style.titulo}>Filmes</Text>
      <ScrollView>
        <View style={style.container}>
          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/carol.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>Carol</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Therese Belivet tem um emprego entediante em uma loja de departamentos. Um dia, ela conhece Carol, uma elegante e misteriosa cliente. Rapidamente, as duas mulheres desenvolvem um vínculo amoroso que terá consequências sérias.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Romance
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Drama
                  </Text>
                </View>
              </ScrollView>

              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>



          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/batman.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>Batman</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Ação
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Crime
                  </Text>
                </View>
              </ScrollView>
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>



          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/aLeagueofTheirOwn.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>A League of Their Own</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Em 1943, Carson Shaw vai até Chicago para fazer um teste para a Liga de Beisebol Profissional All-American Girls. Lá, conhece uma mulher que também sonha em jogar profissionalmente e pessoas que expandem seu mundo.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Romance
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Comédia
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Drama
                  </Text>
                </View>
              </ScrollView >
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>


          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/aMeninaQueRoubavaLivros.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>A Menina Que Roubava Livros</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Durante a Segunda Guerra Mundial, uma jovem garota chamada Liesel Meminger sobrevive fora de Munique lendo os livros que ela rouba. Ajudada por seu pai adotivo, ela aprende a ler e partilhar livros com seus amigos, incluindo um judeu que vive na clandestinidade em sua casa. Enquanto não está lendo ou estudando, ela faz algumas tarefas para a mãe e brinca com o amigo Rudy.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Guerra
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Drama
                  </Text>
                </View>
              </ScrollView >
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>



          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/visavis.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>Vis a Vis</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Manipulada pelo homem por quem se apaixonou, Macarena comete um crime e é condenada à prisão. Assim, ela precisa aprender a sobreviver em um novo e violento mundo.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Thriller
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Ação
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Drama
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Ação
                  </Text>
                </View>
              </ScrollView>
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>



          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/joker2.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>Coringa</Text>
              <Text style={style.descricao} numberOfLines={4}>
                Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Thriller
                  </Text>
                </View>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Crime
                  </Text>
                </View>
              </ScrollView>
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>


          <View style={style.areaFilme}>
            <ImageBackground
              style={style.imgFilmeArea}
              source={require('./assets/images/aindaEstouAqui.jpg')}
              imageStyle={style.imgFilme}></ImageBackground>
            <View style={style.areaText}>
              <Text style={style.filmeTitulo}>Ainda Estou Aqui</Text>
              <Text style={style.descricao} numberOfLines={4}>
                No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece.
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.genero}>
                  <Text numberOfLines={1} style={style.textGenero}>
                    Drama
                  </Text>
                </View>
              </ScrollView>
              <View style={style.play}>
                <Text style={style.textPlay}>Assista Agora</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#10112a',
    paddingTop: 20,
    gap: 12,
    marginBottom: 40
  },
  color: {
    alignItems: 'center',
    backgroundColor: '#10112a',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 500,
    color: '#fff',
  },
  areaFilme: {
    backgroundColor: '#c5c5c515',
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    padding: 9,
    borderRadius: 10,
  },
  imgFilmeArea: {
    width: '34%',
    height: '100%',
  },
  areaText: {
    width: '66%',
    padding: 10,
    justifyContent: 'space-between',
    gap: 10
  },
  filmeTitulo: {
    color: '#fff',
  },
  imgFilme: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  descricao: {
    maxHeight: 55,
    overflow: 'scroll',
    color: 'white',
    fontWeight: 300,
  },
  genero: {
    height: 30,
    width: 65,
    borderRadius: 10,
    backgroundColor: '#c5c5c515',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textGenero: {
    color: 'white',
    fontSize: 11,
  },
  play: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#691616',
    padding: 5,
    borderRadius: 5,
    width: '100%'
  },
  textPlay: {
    color: 'white',
    fontWeight: 500
  }
});
