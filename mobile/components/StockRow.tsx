import { Candle } from "@/types/types";
import { Button } from "react-native";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
import { View } from "react-native-reanimated/lib/typescript/Animated";
interface Props {
    symbol :string 
    candles:Candle []
    onPress:()=>void;
}
export function StockRow({symbol,candles,onPress}:Props) {
    return (
        <View>
            <Text>{symbol}</Text>
            <Text>{candles.length}</Text>
            <Button title="Go to stock" onPress={onPress}/>
        </View>
    )
}