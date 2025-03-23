import { Candle } from "@/types/types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StockImage } from "./StockImage";
import { LineChart, TLineChartDataProp } from "react-native-wagmi-charts";
import { useCandles } from "@/hooks/useCandles";
// Constants for stock trend visualization
type TrendDirection = 'up' | 'down' | 'neutral';

// Chart color configuration
const CHART_COLORS = {
  up: '#4CAF50',    // Green for positive trends
  down: '#F44336',  // Red for negative trends
  neutral: '#9E9E9E' // Gray for no change
};

// Trend symbols for displaying direction
// Trend symbols for displaying direction (should be styled in red when used)
const TREND_SYMBOLS = {
  down: '▼',   // Red downward triangle 
  neutral: '■' // Red square
};

// Helper function to format currency values consistently
const formatCurrency = (value: number): string => {
  return `$ ${value.toFixed(2)}`;
};

// Utility to calculate percentage change between two values
const calculatePercentageChange = (startValue: number, endValue: number): number => {
  if (startValue === 0) return 0;
  return ((endValue - startValue) / Math.abs(startValue)) * 100;
};
interface Props {
  symbol: string;
  candles: Candle[];
  onPress: () => void;
}

export function StockRow({ candles, symbol, onPress }: Props) {
  const {
    chartData,
    newest,
    trendingSign,
    trendingColor,
    startToEndDifference
  } = useCandles({ candles, visibleChart: 'line' });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <StockImage style={styles.img} symbol={symbol} />
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
      <LineChart.Provider data={chartData as TLineChartDataProp}>
        <LineChart width={100} height={100}>
          <LineChart.Path color={trendingColor}>
            <LineChart.Gradient />
            <LineChart.HorizontalLine color={trendingColor} at={{ index: 0 }} />
          </LineChart.Path>
        </LineChart>
      </LineChart.Provider>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {"$ " + newest.close.toFixed(2)}
        </Text>
        <Text
          style={[styles.priceStatus, { color: trendingColor }]}>
          {trendingSign}
          {startToEndDifference.amount.toFixed(2)}
          {" "}
          ({trendingSign}{startToEndDifference.percentage.toFixed(2) + "%"})
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  img: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold"
  },
  priceStatus: {
    fontSize: 15,
    fontWeight: "semibold"
  }
});