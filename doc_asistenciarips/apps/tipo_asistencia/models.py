from django.db import models

class TipoAsistenciaModel(models.Model):
    nombre = models.CharField('Tipo Asistencia', max_length=150, blank=False, null=False, unique=True)
    is_active = models.BooleanField(default=True)
