from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250, unique=True)
    message = models.TextField(max_length=1000, blank=True)
    created_at = models.DateField(auto_now_add=True)
