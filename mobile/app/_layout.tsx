import { Candle } from "@/types/types";
import { useState } from "react";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
export  default function IndexScreen (){
    const [stocks,setStocks]=useState<Record<string, Candle[]>>({})

}