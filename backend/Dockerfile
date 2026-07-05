FROM golang:1.22.1-alpine3.19 AS builder

WORKDIR /src/app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o server .

FROM alpine:3.19

RUN apk --no-cache add ca-certificates

WORKDIR /app

COPY --from=builder /src/app/server .

EXPOSE 3000

CMD ["./server"]