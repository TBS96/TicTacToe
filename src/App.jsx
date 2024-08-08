import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    if( (gameState[0] === gameState[1]) && (gameState[1] === gameState[2]) && (gameState[0] !== 'empty') )
    {
      setGameWinner(`${gameState[0]} won the game!! 🥳🎉`);
    }
    else if( (gameState[3] === gameState[4]) && (gameState[4] === gameState[5]) && (gameState[3] !== 'empty') )
    {
      setGameWinner(`${gameState[3]} won the game!! 🥳🎉`);
    }
    else if( (gameState[6] === gameState[7]) && (gameState[7] === gameState[8]) && (gameState[6] !== 'empty') )
    {
      setGameWinner(`${gameState[6]} won the game!! 🥳🎉`);
    }
    else if( (gameState[0] === gameState[3]) && (gameState[3] === gameState[6]) && (gameState[0] !== 'empty') )
    {
      setGameWinner(`${gameState[0]} won the game!! 🥳🎉`);
    }
    else if( (gameState[1] === gameState[4]) && (gameState[4] === gameState[7]) && (gameState[1] !== 'empty') )
    {
      setGameWinner(`${gameState[1]} won the game!! 🥳🎉`);
    }
    else if( (gameState[2] === gameState[5]) && (gameState[5] === gameState[8]) && (gameState[2] !== 'empty') )
    {
      setGameWinner(`${gameState[2]} won the game!! 🥳🎉`);
    }
    else if( (gameState[0] === gameState[4]) && (gameState[4] === gameState[8]) && (gameState[0] !== 'empty') )
    {
      setGameWinner(`${gameState[0]} won the game!! 🥳🎉`);
    }
    else if( (gameState[2] === gameState[4]) && (gameState[4] === gameState[6]) && (gameState[2] !== 'empty') )
    {
      setGameWinner(`${gameState[2]} won the game!! 🥳🎉`);
    }
    else if(!gameState.includes('empty', 0))
    {
      setGameState('Match Draw... 👶🥴');
    }
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App