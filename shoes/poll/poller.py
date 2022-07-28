import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()

# Import models from hats_rest, here.
# from shoes_rest.models import Something
from shoes_rest.models import BinVO

def get_bins():
    print("get bins is called")
    response = requests.get("http://wardrobe-api:8000/api/bins/")
    content = json.loads(response.content)    
    for bin in content["bins"]:
        BinVO.objects.update_or_create(
            import_href=bin["href"],
            closet_name=bin["closet_name"],
            bin_number=bin["bin_number"],
            bin_size=bin["bin_size"],            
        )
        print("got into for loop of get bins")

def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            get_bins()
            print("within try")
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
