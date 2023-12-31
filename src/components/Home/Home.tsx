import React, {useState} from "react";
import {
  Animated,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Images from '../../common/Images';
import {Colors} from "../../res/styles/Colors";
import {ResponsivePixels} from "../../res/styles/ResponsivePixels";
import {HeaderView} from "../../common/HeaderView";
import {navigationConstants} from "../../constants/NavigationConstant";

const Home = (props:any) => {
  const gameList = [
    { id: 1, name: 'Cyberpunk 2077', image: Images.ic_cyberpunk },
    { id: 2, name: 'Doom Eternal', image: Images.ic_doom_internal },
    { id: 3, name: 'Predator Hunting Grounds', image: Images.ic_predator },

    { id: 4, name: 'Ghost Of Tsushima', image: Images.ic_ghost_of_tsushima },
  ]

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const translateYInterpolation = scrollY.interpolate({
    inputRange: [0, 200], // Adjust the range based on when you want the translation to occur
    outputRange: [0, -30], // Adjust the translateY value based on how much you want it to move
    extrapolate: 'clamp',
  });



  const [pressedItemIndex, setPressedItemIndex] = useState(-1);


  const navigateToGameDetails=(gameDetails:any,index:any)=>{
    setPressedItemIndex(index === pressedItemIndex ? -1 : index);
    setTimeout(()=>{
      props.navigation.navigate(navigationConstants.GAME_DETAILS, {gameDetails: gameDetails})
      setPressedItemIndex(-1);
    },300)
  }

  const renderGameItem = ({ item, index }:{ item:any, index:number }) => {
    const isPressed = index === pressedItemIndex;
    const gameItemStyle = {
      height: isPressed ? ResponsivePixels.size390 : ResponsivePixels.size400,
      margin: isPressed ? ResponsivePixels.size40 : ResponsivePixels.size25,
      marginBottom: isPressed ? ResponsivePixels.size10 : ResponsivePixels.size10,
    };
      return (
          <Animated.View
          style={{
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [5, 0, -5],
                }),
              },
            ],
          }}
          >
      <TouchableOpacity
          onPress={()=>navigateToGameDetails(item,index)}
          activeOpacity={1}
          style={gameItemStyle}>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          source={item.image}
          style={[styles.imageBackground,]}
          resizeMode={'cover'}
        >
          <View style={styles.animatedViewMain}>
            <Animated.View style={  {transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-100, 0, 100],
                    outputRange: [7,0,-7],
                  }),
                },
              ],padding:ResponsivePixels.size20}}>

              <Animated.Text style={[styles.textStyle,{
              }]}>{item.name}</Animated.Text>
              <Animated.Text style={[styles.subTextStyle,{
              }]}>Esclusive PlayStation</Animated.Text>
              <Animated.Image style={[styles.ps4Image,{

              }]} source={Images.ic_ps4}/>
            </Animated.View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
          </Animated.View>
    );
  };



  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderView/>
      <View style={styles.columnView}>
        <Text style={[styles.subTextStyle,{color:Colors.primaryColor}]}>Great Games</Text>
        <Text style={[styles.textStyle,{fontWeight:'normal',color:Colors.defaultGray}]}>Coming soon</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={gameList}
        renderItem={renderGameItem}
        onScroll={handleScroll}
        scrollEventThrottle={1000}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor:Colors.defaultWhite
  },

  gameItem:{
    height: ResponsivePixels.size400,
    margin: ResponsivePixels.size25,
    marginBottom:ResponsivePixels.size10
  },
  animatedViewMain:{
    // backgroundColor:Colors.blackWithCustomOpacity(0.4),
    borderBottomEndRadius:ResponsivePixels.size10,
    borderBottomStartRadius:ResponsivePixels.size10,
    width:'100%'
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: ResponsivePixels.size10,
  },
  ps4Image:{
    height:ResponsivePixels.size30,
    width:ResponsivePixels.size60,
    tintColor:Colors.defaultWhite
  },
  textStyle:{
    fontSize:ResponsivePixels.size22,
    color:Colors.defaultWhite,
    fontWeight:'bold',
  },
  subTextStyle:{
    fontSize:ResponsivePixels.size16,
    color:Colors.defaultWhite,
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  columnView:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Home;
