import React, { useCallback, useContext, useRef } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';

import Att from '../../../assets/icons/att.png';
import { LocationContext } from '../../../hooks/location/useLocation';

import { Container, Icon } from './styles';

interface Props {
  onPress: () => void;
}

const ButtonUpdate = ({ onPress }: Props): React.FC => {
  const rotate = useRef(new Animated.Value(0)).current;

  const runingLoop = useCallback(() =>
    Animated.sequence([
      Animated.timing(rotate, {
        toValue: 360,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 0,
        duration: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(),
  );

  const getLocationAndLoop = useCallback(() => {
    runingLoop();
    onPress();
  }, [onPress, runingLoop]);

  return (
    <Container>
      <TouchableOpacity onPress={() => getLocationAndLoop()}>
        <Animated.Image
          source={Att}
          style={[
            {
              height: 30,
              width: 30,
              transform: [
                {
                  rotate: rotate.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default ButtonUpdate;
