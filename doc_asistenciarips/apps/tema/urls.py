from django.urls import path
from .views import *

urlpatterns = [
    path('tema/', Tema_view, name = 'listar_temas'),
    path(r'tema/<int:id>/', Tema_detail, name = 'detalle_temas')
]
