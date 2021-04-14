from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import Response
from django.http.response import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view

from .models import TipoAsistenciaModel
from .serializer import TipoAsistenciaSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def Tipo_Asistencia_view(request):
    try:
        if request.method == 'GET':
            tipo_asistencia = TipoAsistenciaModel.objects.all()
            tipo_asistencia_serializer = TipoAsistenciaSerializer(tipo_asistencia, many=True)
            return Response(tipo_asistencia_serializer.data, status=status.HTTP_200_OK)
            
        elif request.method == 'POST':
            tipo_data = JSONParser().parse(request)
            tipo_asistencia_serializer = TipoAsistenciaSerializer(data=tema_data)
            if tipo_asistencia_serializer.is_valid():
                tipo_asistencia_serializer.save()
                return Response(tipo_asistencia_serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(tipo_asistencia_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method=='DELETE':
            count = tipo_asistencia.objects.all().delete()
            return JsonResponse({'message': '{} se borro correctamente todo el contenido'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# Vista listar todo
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def Tipo_Asistencia_detail(request, pk):
    try:
        #print(tema)
        tipo_asistencia = TipoAsistenciaModel.objects.get(pk = pk)
        if not tipo_asistencia.is_active:
            return Response(data={'message': 'El valor no esta activo'}, status=status.HTTP_400_BAD_REQUEST)
        
    except TipoAsistenciaModel.DoesNotExist:
        return HttpResponse({'El valor no existe'},status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        tipo_asistencia_serializer = TipoAsistenciaSerializer(tipo_asistencia)
        return Response(tipo_asistencia_serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        tipo_asistencia_data = JSONParser().parse(request)
        tipo_asistencia_serializer = TipoAsistenciaSerializer(tipo_asistencia, data=tipo_asistencia_data)
        if tipo_asistencia_serializer.is_valid():
            tipo_asistencia_serializer.save()
            return Response(tipo_asistencia_serializer.data, status=status.HTTP_201_CREATED)
        return Response(tipo_asistencia_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PATCH':
        tipo_asistencia_data = JSONParser().parse(request)
        tipo_asistencia_serializer = TipoAsistenciaSerializer(tipo_asistencia, data=tipo_asistencia_data, partial=True)
        if tipo_asistencia_serializer.is_valid():
            tipo_asistencia_serializer.save()
            return Response(tipo_asistencia_serializer.data)
        return Response(tipo_asistencia_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method=='DELETE':
        tipo_asistencia.delete()
        return Response('El valor fue borrado', status=status.HTTP_204_NO_CONTENT)
