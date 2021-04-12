from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import Response
from django.http.response import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view

from .models import TemaModel
from .serializer import TemaSerializer

# Vista listar todo
@api_view(['GET', 'POST', 'DELETE'])
def Tema_view(request):
    try:
        if request.method == 'GET':
            tema = TemaModel.objects.all()
            tema_serializer = TemaSerializer(tema, many=True)
            return Response(tema_serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'POST':
            #print('hola')
            tema_data = JSONParser().parse(request)
            tema_serializer = TemaSerializer(data=tema_data)
            if tema_serializer.is_valid():
                tema_serializer.save()
                return JsonResponse(tema_serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(tema_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method=='DELETE':
            count = tema.objects.all().delete()
            return JsonResponse({'message': '{} se borro correctamente todo el contenido'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

    except ObjectDoesNotExist:
    #TemaModel.DoesNotExis:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# Vista listar todo
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def Tema_detail(request, pk):
    try:
        #tema = TemaModel.objects.filter(is_active=True).get(pk = pk) #traer solo valores activos
        #print(tema)
        tema = TemaModel.objects.get(pk = pk)
        if not tema.is_active:
            return Response(data={'message': 'El valor no esta activo'}, status=status.HTTP_400_BAD_REQUEST)
        
    except TemaModel.DoesNotExist:
    #except ObjectDoesNotExist:
        return HttpResponse({'message': 'El valor no existe'},status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        
        tema_serializer = TemaSerializer(tema)
        print(tema_serializer)
        #if (tema_serializer).Meta.fields. .is_valid(is_active=True)
        return Response(tema_serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        tema_data = JSONParser().parse(request)
        tema_serializer = TemaSerializer(tema, data=tema_data)
        if tema_serializer.is_valid():
            tema_serializer.save()
            return Response(tema_serializer.data, status=status.HTTP_201_CREATED)
        return Response(tema_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PATCH':
        tema_data = JSONParser().parse(request)
        tema_serializer = TemaSerializer(tema, data=tema_data, partial=True)
        if tema_serializer.is_valid():
            tema_serializer.save()
            return Response(tema_serializer.data)
        return Response(tema_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method=='DELETE':
              #count = tema.objects.all().delete()
        tema.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        #({'message': '{} Tabla se borro correctamente'.format(data[0])}, status=status.HTTP_204_NO_CONTENT)
