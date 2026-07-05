import { Platform } from "react-native";

// Use Render backend in production, localhost for development
const PRODUCTION_HOST = "calibrate-o1-oregon.onrender.com"

export const baseUrl = (scheme: "http" | "ws") => {
  // Use __DEV__ flag: true in local dev, false in production builds
  if (__DEV__) {
    const PORT = 3000
    const HOST = Platform.OS === "android" ? "10.0.2.2" : "localhost"
    return `${scheme}://${HOST}:${PORT}`
  }

  const wsScheme = scheme === "ws" ? "wss" : "https"
  return `${wsScheme}://${PRODUCTION_HOST}`
}