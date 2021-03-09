from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import TipoVehiculoModel
from .serializer import TipoVehiculoSerializer

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def tema_list(request):

    if request.method == 'GET':
        tema_ = TemaModel.objects.all()
        tema_serializer = TemaSerializer(tema, many=True)
        return JsonResponse(tema_serializer.data, safe=False)