FROM golang:1.22.2-alpine3.19

WORKDIR /src/app

# Install common dependencies
RUN apk add --no-cache git

# Install Air with correct permissions
RUN go install github.com/cosmtrek/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go mod tidy

EXPOSE 3000

# Use CMD instead if you want to override in docker-compose
ENTRYPOINT ["air", "-c", ".air.toml"]