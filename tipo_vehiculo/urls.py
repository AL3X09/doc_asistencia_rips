from django.urls import path
from .views import tipovehiculo_list
#
urlpatterns = [
    path('tipo_vehiculo/', tipovehiculo_list, name='tipo_vehiculos'),
]