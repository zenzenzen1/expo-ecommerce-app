import httpClient from '@/configs/httpClient'
import { Colors } from '@/constants/Colors'
import { ProductType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import ProductItem from '../product/ProductItem'

const FlashSale = () => {
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 2);
    saleEndDate.setHours(23, 59, 59);
    const [saleProducts, setSaleProducts] = useState<ProductType[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timeUnits, setTimeUnits] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const getSaleProducts = async () => {
        httpClient.get('saleProducts')
            .then((res) => {
                setSaleProducts(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getSaleProducts();
            setIsLoading(false);
        }, 200);
        const calculateTimeUnits = (timeDifference: number) => {
            // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            // const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // setTimeUnits({ days, hours, minutes, seconds });
            const seconds = Math.floor(timeDifference / 1000);
            setTimeUnits({
                days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
                hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
                minutes: Math.floor((seconds % (60 * 60)) / 60),
                seconds: Math.floor(seconds % 60)
            })
        }

        const updateCountdown = () => {
            const currentDate = new Date().getTime();
            const expiryTime = saleEndDate.getTime();
            const timeDifference = expiryTime - currentDate;
            if (timeDifference > 0) {
                calculateTimeUnits(timeDifference);
            } else {
                calculateTimeUnits(0);
            }
        }

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(intervalId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatTimeUnit = (time: number) => {
        return time.toString().padStart(2, '0');
    }

    return (
        <>
            <View className='mb-1.5 bg-white mx-0.5'>
                <View className='flex-row justify-between items-center'>
                    <View className='flex-row items-center gap-4'>
                        <Text className='font-normal text-3xl '>Flash Sale</Text>
                        <View className='flex-row items-center gap-1 px-3 py-2 rounded-full' style={{ backgroundColor: Colors.highlight }}>
                            <Ionicons name='time-outline' size={16} color='black' />
                            <Text className='text-black'>{`${formatTimeUnit(timeUnits.days)}:${formatTimeUnit(timeUnits.hours)}:${formatTimeUnit(timeUnits.minutes)}:${formatTimeUnit(timeUnits.seconds)}`}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text>See all</Text>
                    </TouchableOpacity>
                </View>
                {isLoading
                    ? <ActivityIndicator size={"large"} />
                    : (
                        <FlatList data={saleProducts}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            horizontal
                            renderItem={({ item, index }) => (
                                <ProductItem index={index} product={item} apiPathPrefix='saleProducts'/>
                            )}
                        />
                    )
                }

            </View>
        </>
    )
}

export default FlashSale