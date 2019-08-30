import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends Component{
constructor(props){
  super(props)

  this.state = {
   gameState : [
    [0,0,0],
    [0,0,0],
    [0,0,0]
   
   ],
   currentPlayer: 1
  }
} 

componentDidMount(){
 this.startGame();
}
   
startGame = () => {
 this.setState({gameState:
   [ 
     [0,0,0],
     [0,0,0],
     [0,0,0]
   ]
  })
}

onTilePress =(row, col) => {
  let value = this.state.gameState[row][col];
  if(value != 0){return;}
  
  let currentPlayer = this.state.currentPlayer;
//presionar el tile correcto
  let correctTile = this.state.gameState.slice();
  correctTile[row][col] = currentPlayer;
  this.setState({gameState: correctTile})

//cambiar de jugador
  let otherPlayer = (currentPlayer === 1) ? -1 : 1;
  this.setState({currentPlayer: otherPlayer})

}


//mostrar las imagenes que corresponden a cada jugador
renderImages = (row,col) =>{ 
  let value = this.state.gameState[row][col];
  switch(value){
    case 1: return <Image source={require("./img/daddy.png")} style={styles.images}/>;
    case -1: return <Image source={require("./img/badbunny.png")} style={styles.images}/>;
    default: return <View/>
  }

  } 


  render(){ 
  return (
    <View style={styles.container}>
      <Text>The Tic Tac Toe</Text>
   
    <View style={{flexDirection:'row'}}> 
      <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={[styles.tile, {borderLeftWidth: 0, borderTopWidth:0}]}>
        {this.renderImages(0,0)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={[styles.tile, {borderTopWidth: 0}]}>
        {this.renderImages(0,1)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={[styles.tile, {borderTopWidth: 0, borderRightWidth:0}]}>
      {this.renderImages(0,2)}
      </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row'}}> 
      <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={[styles.tile, {borderLeftWidth: 0}]}>
      {this.renderImages(1,0)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={[styles.tile, {}]}>
      {this.renderImages(1,1)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={[styles.tile, {borderRightWidth:0}]}>
      {this.renderImages(1,2)}
      </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row'}}> 
      <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={[styles.tile, {borderBottomWidth: 0, borderLeftWidth:0}]}>
      {this.renderImages(2,0)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={[styles.tile, {borderBottomWidth: 0}]}>
      {this.renderImages(2,1)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={[styles.tile, {borderBottomWidth: 0, borderRightWidth:0}]}>
      {this.renderImages(2,2)}
      </TouchableOpacity>
    </View>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 8,
    backgroundColor: '#fff',
    width: '120px',
    height: '120px',
  },

  images:{
    width:120,
    height:120,
    justifyContent:"center"
  }
});
