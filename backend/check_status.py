import urllib.request, json

req = urllib.request.Request(
    'https://api.render.com/v1/services/srv-d90mcmcm0tmc73duslk0/deploys?limit=5',
    headers={'Authorization': 'Bearer rnd_WLLP2uY5lagWgF2VtaarNE4biqwM'}
)
resp = urllib.request.urlopen(req)
deploys = json.loads(resp.read())
for d in deploys:
    dep = d['deploy']
    commit = dep.get('commit', {})
    commit_id = commit.get('id', 'N/A')[:8] if commit else 'N/A'
    print(f"{dep['id']}: {dep['status']} - commit: {commit_id}")
