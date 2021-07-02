import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import DicordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = {
  title: string;
} & RectButtonProps;

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest} >
      <View style={styles.iconWrapper}>
        <Image source={DicordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}