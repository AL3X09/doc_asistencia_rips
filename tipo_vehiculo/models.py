from django.db import models

class TipoVehiculoModel(models.Model):
    nombre = models.CharField(max_length=200, blank=False, null=False, unique=True)
    is_active = models.BooleanField(default=True)