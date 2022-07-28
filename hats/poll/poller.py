import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()

# Import models from hats_rest, here.
# from hats_rest.models import Something
from hats_rest.models import LocationVO


def get_locations():
    print("get locations is called")
    response = requests.get("http://wardrobe-api:8000/api/locations/")
    content = json.loads(response.content)    
    for location in content["locations"]:
        LocationVO.objects.update_or_create(import_href=location["href"],
            defaults={"closet_name": location["closet_name"]}
        )
        print("got into for loop of get locations")

def poll():
    while True:
        print("Testing this print for hats poller")
        print('Hats poller polling for data 1')
        try:
            get_locations()
            print("within try")
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
