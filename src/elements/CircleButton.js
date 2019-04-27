import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true});
  }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      let bgColor = '#fff';
      let textColor = '#E31676';
    }

    return (
      <TouchTouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent" >
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchTouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom: 32,
    right:32,
    width:48,
    height: 48,
  },
  circleButton: {
    position:'absolute',
    bottom: 32,
    right:32,
    width:48,
    height: 48,
    backgroundColor: '#E31676',

    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
  }
});

export default CircleButton;