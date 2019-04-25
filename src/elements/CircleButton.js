import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Font from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    })

    this.setState({ fontLoaded: true});
  }

  render() {
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      let bgColor = '#fff';
      let textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.setState ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  CirclueButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  }
});

export default CircleButton;