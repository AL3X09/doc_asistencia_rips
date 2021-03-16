from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import AsistenciaModel
from .serializer import AsistenciaSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def Asistencia_view(request):

    if request.method == 'GET':
        asistencia = AsistenciaModel.objects.all()
        asistencia_serializer = AsistenciaSerializer(tema, many=True)
        return JsonResponse(asistencia_serializer.data, safe=False)