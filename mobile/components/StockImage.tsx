import { useEffect, useState } from "react";
import { ImageProps } from "react-native";
import { Image } from "react-native";
interface Props extends ImageProps{
    symbol: string;
}
const getURIPath =(symbol:string)=>`https://eodhd.com/img/logos/US/${symbol}.png`;
export function StockImage({symbol, ...rest}:Props){
    const [uri,setUrl]=useState(getURIPath(symbol));
   useEffect(() => {
    Image.getSize(
      uri, 
      (width, height) => {
        // Image loaded successfully
      },
      (error) => {
        // Image failed to load, use fallback
        setUrl(getURIPath(symbol.toLowerCase()));
      }
    );
   }, [uri, symbol]);
    
    return <Image source={{ uri }} {...rest}/>
}