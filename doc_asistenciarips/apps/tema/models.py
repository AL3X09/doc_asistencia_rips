from django.db import models

class TemaModel(models.Model):
    nombre = models.TextField(max_length=300, blank=False, null=False, unique=True)
    is_active = models.BooleanField(default=True)