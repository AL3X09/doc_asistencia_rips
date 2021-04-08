from django.contrib import admin
from .models import User
from ..tema.models import TemaModel
from ..tipo_asistencia.models import TipoAsistenciaModel
#from ..form_asistencia.models import AsistenciaModel
# Register your models here.

admin.site.register(User)
admin.site.register(TemaModel)
admin.site.register(TipoAsistenciaModel)
#admin.site.register(AsistenciaModel)