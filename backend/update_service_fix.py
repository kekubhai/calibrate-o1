import urllib.request, json

# Remove SERVER_PORT env var - just use Render's PORT
env_vars = [
    {'key': 'API_KEY', 'value': 'cv96jhpr01qjq626urggcv96jhpr01qjq626urh0'},
    {'key': 'DB_HOST', 'value': 'dpg-d955vdhkh4rs73845m7g-a.oregon-postgres.render.com'},
    {'key': 'DB_NAME', 'value': 'calibrate_o1_db'},
    {'key': 'DB_USER', 'value': 'calibrate_o1_db_user'},
    {'key': 'DB_PASSWORD', 'value': 'ZWI2EZGMUnsm3vWh5U6mfq5SeS51Z8Ek'},
    {'key': 'DB_SSLMODE', 'value': 'require'}
]

body = json.dumps(env_vars).encode()

req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0/env-vars',
    data=body,
    headers={
        'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM',
        'Content-Type': 'application/json'
    },
    method='PUT'
)
resp = urllib.request.urlopen(req)
print('Env vars updated')

# Also update start command to not use ./
body2 = json.dumps({
    "serviceDetails": {
        "envSpecificDetails": {
            "buildCommand": "go build -o server .",
            "startCommand": "server"
        }
    }
}).encode()

req2 = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0',
    data=body2,
    headers={
        'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM',
        'Content-Type': 'application/json'
    },
    method='PATCH'
)
resp2 = urllib.request.urlopen(req2)
print('Service updated')

# Trigger deploy
body3 = json.dumps({'clearCache': 'do_not_clear'}).encode()
req3 = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0/deploys',
    data=body3,
    headers={
        'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM',
        'Content-Type': 'application/json'
    },
    method='POST'
)
resp3 = urllib.request.urlopen(req3)
data = json.loads(resp3.read())
print('Deploy:', data['id'], data['status'])
