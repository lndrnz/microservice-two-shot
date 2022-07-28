from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Hat, LocationVO

# Create your views here.

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name", "section_number", "shelf_number"]

class HatGetEncoder(ModelEncoder):
    model = Hat
    properties = [
        "name",
        "fabric",
        "style_name",
        "color",
        "picture_url",
        "location",
    ]


class HatEncoder(ModelEncoder):
    model = Hat
    properties = [
        "name",
        "fabric",
        "style_name",
        "color",
        "picture_url",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_hats(request):
    if request.method == "GET":
        # show all hats
        hats = Hat.objects.all()
        print("hats all", hats)
        print("type", type(hats))
        return JsonResponse(
            {"hats": hats},
            encoder=HatEncoder,
        )
    else: # POST
        content = json.loads(request.body)
        print("content", content)
        try:
            if "location" in content:
                real_location = content["location"]
                location = LocationVO.objects.get(import_href=real_location)               
                content["location"] = location
            else:
                content["location"] = None
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location vo"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        print("hat object type", type(hat))
        return JsonResponse(
            hat,
            encoder=HatEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_hat(request, pk):
    if request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})