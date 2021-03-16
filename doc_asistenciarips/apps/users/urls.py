from django.urls import path
from .views import Usuarios_view

urlpatterns = [
    path('usuario/', Usuarios_view, name = 'lista_usuarios')
]
