from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    owner = models.ForeignKey(
        User, related_name="lead", on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250, unique=True)
    message = models.TextField(max_length=1000, blank=True)
    created_at = models.DateField(auto_now_add=True)
