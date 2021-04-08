from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import TipoAsistenciaModel
from .serializer import TipoAsistenciaSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def Tipo_Asistencia_view(request):

    if request.method == 'GET':
        tipo_asistencia = TipoAsistenciaModel.objects.all()
        tipo_asistencia_serializer = TipoAsistenciaSerializer(tipo_asistencia, many=True)
        return Response(tema_serializer.data)
            ##return JsonResponse(tipo_asistencia_serializer.data, safe=False)