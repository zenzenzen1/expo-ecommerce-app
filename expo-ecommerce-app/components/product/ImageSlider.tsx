import { WINDOW_DIMENSION } from '@/constants/Dimension';
import React, { useRef } from 'react';
import { FlatList, Image, View, ViewToken } from 'react-native';
import ImageSliderPagination from './ImageSliderPagination';

const ImageSlider = (props: { imageList: string[] }) => {
    const [paginationIndex, setPaginationIndex] = React.useState(0);
    const viewabilityConfigCallbackPairs = useRef([
        {
            viewabilityConfig: { itemVisiblePercentThreshold: 50 },
            onViewableItemsChanged: ({ viewableItems }: { viewableItems: ViewToken[] }) => {
                // console.log("viewableItems", viewableItems);
                if(viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
                    setPaginationIndex(viewableItems[0].index % props.imageList.length);
                }
            }
        }
    ])

    const width = WINDOW_DIMENSION.width;
    return (
        <View>
            <FlatList
                data={props.imageList}
                keyExtractor={(index) => index.toString()}
                horizontal
                renderItem={({ item }) => (
                    <View className='items-center justify-center' style={{ width: width }}>
                        <Image source={{ uri: item }} width={300} height={300} />
                    </View>
                )}
                pagingEnabled
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                scrollEventThrottle={16}
            />
            <ImageSliderPagination items={props.imageList} paginationIndex={paginationIndex} />
            
        </View>
    )
}

export default ImageSlider