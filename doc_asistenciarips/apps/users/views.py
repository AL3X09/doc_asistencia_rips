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

    if request.method == 'GET':
        usuarios = User.objects.all()
        usuarios_serializer = UserSerializer(usuarios, many=True)
        return Response(usuarios_serializer.data)
        ##return JsonResponse(usuarios_serializer.data, safe=False)
    elif request.method == 'POST':
        usuarios_serializer = UserSerializer(data = request.data)
        if usuarios_serializer.is_valid():
            usuarios_serializer.save()
            return Response(usuarios_serializer.data)
        return Response(usuarios_serializer.errors)
        #print(request.data)