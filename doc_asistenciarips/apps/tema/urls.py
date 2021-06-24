from django.urls import path
from .views import *

urlpatterns = [
    path('api/', Tema_view, name = 'listar_temas'),
    path('api/<int:pk>/', Tema_detail, name = 'detalle_temas'),
    path('api/crear_t', Tema_view, name = 'insert_tema'),
]
