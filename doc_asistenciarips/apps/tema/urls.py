from django.urls import path
from .views import Tema_view

urlpatterns = [
    path('tema/', Tema_view, name = 'lista_tema')
]
