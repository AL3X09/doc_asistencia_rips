from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import TipoVehiculoModel
from .serializer import TipoVehiculoSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def tipovehiculo_list(request):

    if request.method == 'GET':
        tipo_vehiculos = TipoVehiculoModel.objects.all()
        tipo_vehiculos_serializer = TipoVehiculoSerializer(tipo_vehiculos, many=True)
        return JsonResponse(tipo_vehiculos_serializer.data, safe=False)