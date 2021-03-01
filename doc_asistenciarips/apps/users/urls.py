from django.urls import path
from .views import list_usuarios

urlpatterns = [
    path('usuario/', list_usuarios, name = 'lista_usuarios')
]
