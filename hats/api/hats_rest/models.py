from django.db import models
from django.urls import reverse

from wardrobe.api.wardrobe_api.models import Location

# Create your models here.

class Hat(models.Model):
    name = models.CharField(max_length=200)
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(null=True)
    location = models.ForeignKey(Location, related_name="hats", on_delete=models.PROTECT)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_hat", kwargs={"pk": self.pk})

    class Meta:
        ordering = ("location")