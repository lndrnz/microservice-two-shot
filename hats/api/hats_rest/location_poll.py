import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()


from hats_rest.models import LocationVO


def get_locations():
    response = requests.get("http://wardrobe-api:8000/api/locations/")
    content = json.loads(response.content)
    print("get locations is called")
    for location in content["locations"]:
        LocationVO.objects.update_or_create(
            closet_name=location["closet_name"]
        )


def poll():
    while True:
        try:
            get_locations()
        except Exception as e:
            print(e)
        time.sleep(5)


if __name__ == "__main__":
    poll()
