from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Hat

# Create your views here.

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

@require_http_methods(["GET", "POST"])
def api_hats(request):
    if request.method == "GET":
        # show all hats
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatEncoder,
        )
    else: # POST
        content = json.loads(request.body)
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_hat(request, pk):
    pass