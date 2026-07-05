import urllib.request, json

# Update service to use Go runtime instead of Docker
body = json.dumps({
    "serviceDetails": {
        "env": "go",
        "envSpecificDetails": {
            "buildCommand": "go build -o server .",
            "startCommand": "./server"
        },
        "plan": "free",
        "region": "oregon"
    }
}).encode()

req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0',
    data=body,
    headers={
        'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM',
        'Content-Type': 'application/json'
    },
    method='PATCH'
)
resp = urllib.request.urlopen(req)
print('Update result:', json.dumps(json.loads(resp.read()), indent=2))
