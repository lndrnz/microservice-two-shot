from django.db import models
from django.urls import reverse

# Create your models here.

class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=200, unique=True, null=True)

class Hat(models.Model):
    name = models.CharField(max_length=200)
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(null=True)
    location = models.ForeignKey(LocationVO, related_name="hats", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_hat", kwargs={"pk": self.pk})

    class Meta:
        ordering = ("location",)