import urllib.request, json

req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0/events?limit=20',
    headers={'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM'}
)
resp = urllib.request.urlopen(req)
events = json.loads(resp.read())
for e in events:
    evt = e['event']
    print(evt['timestamp'], '|', evt['type'], '|', json.dumps(evt['details']))
