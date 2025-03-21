import { Candle } from "@/types/types";
import { useState } from "react";
import { router } from "expo-router";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
export  default function IndexScreen (){
    const [stocks,setStocks]=useState<Record<string, Candle[]>>({})
    const [refreshing ,setRefreshing]=useState(false)

    function onGoToStaock(symbol:string){
        // navigate to stock screen
        router.push(`/stock/${symbol}`);
    }

}