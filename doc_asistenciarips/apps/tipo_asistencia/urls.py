from django.urls import path
from .views import *

urlpatterns = [
    path('api/', Tipo_Asistencia_view, name = 'lista_tipo_asistencia'),
    path('api/<int:pk>/', Tipo_Asistencia_detail, name = 'detalle_tipo_asistencia')
]
