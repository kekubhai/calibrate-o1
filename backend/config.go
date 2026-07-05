package main

import (
	"log"
	"os"

	"github.com/caarlos0/env"
	"github.com/joho/godotenv"
)

type Env struct {
	SERVER_PORT  string `env:"SERVER_PORT"`
	PORT        string `env:"PORT"`
	API_KEY     string `env:"API_KEY,required"`
	DB_HOST     string `env:"DB_HOST,required"`
	DB_NAME     string `env:"DB_NAME,required"`
	DB_USER     string `env:"DB_USER,required"`
	DB_PASSWORD string `env:"DB_PASSWORD,required"`
	DB_SSLMODE  string `env:"DB_SSLMODE"`
}

func EnvConfig() *Env {
	// Try loading .env file, but don't fail if it doesn't exist (e.g., on Render)
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	config := &Env{}

	if err := env.Parse(config); err != nil {
		log.Fatalf("Unable to load variables from environment: %e", err)
	}

	// Render sets PORT, use it if SERVER_PORT is not set
	if config.SERVER_PORT == "" {
		if config.PORT != "" {
			config.SERVER_PORT = config.PORT
		} else {
			config.SERVER_PORT = "3000"
		}
	}

	// Default DB_SSLMODE to require if not set
	if config.DB_SSLMODE == "" {
		config.DB_SSLMODE = "require"
	}

	return config
}

// getEnvOrDefault returns the value of an environment variable or a default value
func getEnvOrDefault(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
