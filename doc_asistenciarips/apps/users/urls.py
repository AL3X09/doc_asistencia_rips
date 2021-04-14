from django.urls import path
from .views import *

urlpatterns = [
    path('api/', Usuarios_view, name = 'lista_usuarios'),
    path('api/<int:pk>/', Usuario__detail, name = 'detalle_temas')
]
