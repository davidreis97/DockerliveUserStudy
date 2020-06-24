import urllib.request
import time
from os import path

if not path.exists("/10Mio.dat"):
    print("File 20MB.zip not found")
    exit(1)

try:
    url = 'http://www.ovh.net/files/10Mio.dat'
    response = urllib.request.urlopen(url)
    data = response.read()
except:
    print("Error downloading file")
    exit(1)

try:
    f= open("10Mio.dat","wb")
    f.write(data)
except Exception as e:
    print("Error writing file")
    exit(1)

print("Success")

time.sleep(10000) #Simulate long-standing application