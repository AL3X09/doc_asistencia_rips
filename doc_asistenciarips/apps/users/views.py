from django.shortcuts import render
##from django.http.response import JsonResponse
from rest_framework.views import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .models import User
from .serializer import UserSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def Usuarios_view(request):
    try:
        if request.method == 'GET':
            usuarios = User.objects.all()
            usuarios_serializer = UserSerializer(usuarios, many=True)
            return Response(usuarios_serializer.data)
            
        elif request.method == 'POST':
            usuarios_serializer = UserSerializer(data = request.data)
            if usuarios_serializer.is_valid():
                usuarios_serializer.save()
                return Response(usuarios_serializer.data)
            return Response(usuarios_serializer.errors)

    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def Usuario__detail(request, pk):
    try:
        usuario = User.objects.get(pk = pk)
        if not usuario.is_active:
            return Response(data={'message': 'El valor no esta activo'}, status=status.HTTP_400_BAD_REQUEST)
        
    except User.DoesNotExist:
        return HttpResponse({'El valor no existe'},status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        usuarios_serializer = UserSerializer(usuario)
        return Response(usuarios_serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        usuario_data = JSONParser().parse(request)
        usuarios_serializer = UserSerializer(usuario, data=usuario_data)
        if usuarios_serializer.is_valid():
            usuarios_serializer.save()
            return Response(usuarios_serializer.data, status=status.HTTP_201_CREATED)
        return Response(usuarios_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PATCH':
        usuario_data = JSONParser().parse(request)
        usuarios_serializer = UserSerializer(usuario, data=usuario_data, partial=True)
        if usuarios_serializer.is_valid():
            usuarios_serializer.save()
            return Response(usuarios_serializer.data)
        return Response(usuarios_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method=='DELETE':
        raise NotImplementedError ("El Borrado de usuarios no es soportado")

#Agrego las clases para logueo y logaut
    class Login(object):
        def __init__(self, *args):
            super(Login, self).__init__(*args))
            
    
    class Logaut(object):
        def __init__(self, *args):
            super(Logaut, self).__init__(*args))
            