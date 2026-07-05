import urllib.request, json

req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0/deploys/dep-d9567ed8nd3s73d5bam0',
    headers={'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM'}
)
resp = urllib.request.urlopen(req)
print(json.dumps(json.loads(resp.read()), indent=2))
