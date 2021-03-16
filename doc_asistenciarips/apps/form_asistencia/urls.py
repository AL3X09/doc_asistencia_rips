from django.urls import path
from .views import Asistencia_view

urlpatterns = [
    path('asistencia/', Asistencia_view, name = 'lista_asistencia')
]
