from django.urls import path
from .views import *

urlpatterns = [
    path('api/', Asistencia_view, name = 'lista_asistencia'),
    path('api/<int:pk>/', Asistencia_detail, name = 'detalle_asistencia')
]
