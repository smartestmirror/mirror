import urllib.request, json
url = "http://www3.septa.org/hackathon/Arrivals/Suburban%20Station/1/"
response = urllib.request.urlopen(url)
data = json.loads(response.read())
#print(data)
#print("\nNext PART \n")
print(data)