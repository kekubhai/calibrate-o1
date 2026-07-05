import urllib.request, json

# First, get current service details
req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0',
    headers={'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM'}
)
resp = urllib.request.urlopen(req)
service = json.loads(resp.read())
print("Current service:", json.dumps(service, indent=2))
