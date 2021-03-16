from django.urls import path
from .views import Tipo_Asistencia_view

urlpatterns = [
    path('tipo_asistencia/', Tipo_Asistencia_view, name = 'lista_tipo_asistencia')
]
