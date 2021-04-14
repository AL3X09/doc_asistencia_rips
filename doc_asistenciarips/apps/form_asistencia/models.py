from django.db import models
from ..tema.models import TemaModel

from  django.utils import timezone
from ..tipo_asistencia.models import TipoAsistenciaModel
from ..users.models import User

class AsistenciaModel(models.Model):
    fecha = models.DateTimeField('Fecha', null=False, default=timezone.now)
    consec = models.IntegerField('Consecutivo', blank=False, null=False, default=0)
    nombre_apellidos_contacto = models.TextField('Nombres Apellidos de contacto', max_length=150, blank=False, null=False, unique=True)
    datos_contacto = models.TextField('Datos del Contacto', max_length=150, blank=False, null=False, unique=True)
    fk_tema = models.ForeignKey(TemaModel, on_delete=models.CASCADE)
    fk_tipo_asistencia = models.ForeignKey(TipoAsistenciaModel, on_delete=models.CASCADE)
    acciones = models.CharField('Acciones', max_length=150, blank=False, null=False, unique=True)
    compromisos = models.CharField('Compromisos', max_length=150, blank=False, null=False, unique=True)
    firma = models.CharField('Firma', max_length=150, blank=True, null=True)
    fk_usuario = models.ForeignKey(User , on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering=('fecha',)
    #contructor
    def __str__(self):
        return f'{self.nombre_apellidos_contacto}{self.datos_contacto}'