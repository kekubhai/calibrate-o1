import { Candle } from "@/types/types";
import { useEffect, useMemo, useState } from "react";


/**
 * useCandles - A custom hook for processing financial candle data
 * Provides trend analysis, price difference calculations, and formatted chart data
 */

// Type definition for possible trending directions
export type TrendingDirection = "up" | "down" | "flat";

/**
 * Utility function to calculate trending direction based on price difference
 * @param current Current price value
 * @param previous Previous price value
 * @returns Trending direction ("up", "down", or "flat")
 */
const calculateTrendingDirection = (current: number, previous: number): TrendingDirection => {
  const difference = current - previous;
  return difference > 0 ? 'up' : difference < 0 ? 'down' : 'flat';
};

/**
 * Utility function to calculate price difference and percentage
 * @param current Current price value
 * @param previous Previous price value
 * @returns Object containing the difference amount and percentage
 */
const calculateDifference = (current: number, previous: number) => {
  const amount = current - previous;
  const percentage = (amount / previous) * 100;
  return { amount, percentage };
};
const TRENDING_COLORS = {
  up: 'green',
  down: 'red',
  flat: 'black'
}

interface Props {
  candles: Candle[]
  visibleChart: "candlesticks" | "line"
}

export function useCandles({ candles, visibleChart }: Props) {
  const newest = candles[candles.length -1 ]
  const oldest = candles[0]

  const [trending, setTrending] = useState<"up" | "down" | "flat">("flat")
  const [startToEndDifference, setStartToEndDifference] = useState<{
    amount: number,
    percentage: number
  }>({
    amount: 0,
    percentage: 0
  })

  useEffect(()=>{
    if (candles.length < 2) return;

    const difference = newest.close - oldest.close;
    const percentage = difference / oldest.close * 100

    setTrending(difference > 0 ? 'up' : difference < 0 ? 'down' : 'flat')
    setStartToEndDifference({ amount: difference, percentage })
  }, [candles])

  const chartData = useMemo(() => candles.map(({ timestamp, ...rest }) => ({
    timestamp: new Date(timestamp).getTime(),
    ...(visibleChart  === 'candlesticks' ? rest : { value: rest.close }),
  })), [candles, visibleChart]);

  return {
    trendingColor: TRENDING_COLORS[trending],
    trendingSign: trending === "up" ? '+' : '',
    startToEndDifference,
    oldest,
    newest,
    chartData,
  }
}