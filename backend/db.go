package main

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func DBConnectionRaw(env *Env) (*gorm.DB, error) {
	uri := fmt.Sprintf(
		"host=%s user=%s dbname=%s password=%s sslmode=%s port=5432",
		env.DB_HOST, env.DB_USER, env.DB_NAME, env.DB_PASSWORD, env.DB_SSLMODE,
	)

	db, err := gorm.Open(postgres.Open(uri), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		return nil, fmt.Errorf("database connection: %w", err)
	}

	log.Println("Connected to the database!")

	if err := db.AutoMigrate(&Candle{}); err != nil {
		return nil, fmt.Errorf("database migration: %w", err)
	}

	return db, nil
}

func DBConnection(env *Env) *gorm.DB {
	db, err := DBConnectionRaw(env)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v", err)
	}
	return db
}