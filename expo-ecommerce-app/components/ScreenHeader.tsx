import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenHeader = (props: {title: string}) => {
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
    return (
        <View style={{ height: headerHeight, backgroundColor: 'white', paddingTop: 20, paddingHorizontal: 20 }} className='flex-row justify-between items-center'>
            
        </View>
    )
}

export default ScreenHeader