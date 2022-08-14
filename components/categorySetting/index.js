import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper';
import { COLORS, SELECT_STYLES } from '../../contains';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles'

export default CategorySetting = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [valueCheck, setValueCheck] = useState('')

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thể thao</Text>
            <RNPickerSelect
                style={{
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid
                }}
                Icon={() => <View />}
                onValueChange={(value) => setValueCheck(value)}
                items={SELECT_STYLES.option}
                useNativeAndroidPickerStyle={false}
                value={valueCheck}
                placeholder={SELECT_STYLES.default}
            />
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={COLORS.primary}
            />
        </View>
    )
}

