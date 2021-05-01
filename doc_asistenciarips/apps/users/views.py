from django.utils import timezone
from datetime import datetime

from django.shortcuts import render
from django.contrib.sessions.models import Session
from rest_framework.views import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from .models import User
from .serializer import UserSerializer
from .serializer import UserTokenSerializer

# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def Usuarios_view(request):
    try:
        if request.method == 'GET':
            usuarios = User.objects.all()
            usuarios_serializer = UserSerializer(usuarios, many=True)
            return Response(usuarios_serializer.data)

        elif request.method == 'POST':
            usuarios_serializer = UserSerializer(data=request.data)
            if usuarios_serializer.is_valid():
                usuarios_serializer.save()
                return Response(usuarios_serializer.data)
            return Response(usuarios_serializer.errors)

    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def Usuario__detail(request, pk):
    try:
        usuario = User.objects.get(pk=pk)
        if not usuario.is_active:
            return Response(data={'message': 'El valor no esta activo'}, status=status.HTTP_400_BAD_REQUEST)

    except User.DoesNotExist:
        return HttpResponse({'El valor no existe'}, status=status.HTTP_400_BAD_REQUEST)

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
        usuarios_serializer = UserSerializer(
            usuario, data=usuario_data, partial=True)
        if usuarios_serializer.is_valid():
            usuarios_serializer.save()
            return Response(usuarios_serializer.data)
        return Response(usuarios_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        raise NotImplementedError("El Borrado de usuarios no es soportado")

# Agrego las clases para register, logueo y logaut
class Register_view(APIView):
    def post(self, request, *args, **kwargs):
        try:
            register_serializer = UserSerializer(data=request.data)
                #self.serializer_class(data=request.data, context={'request': request})
            
            if register_serializer.is_valid():
                register_serializer.save()
                return Response({'message': 'Usuario creado de manera correcta.'}, status=status.HTTP_201_CREATED)

            return Response({'error': 'Se presentaron execepciones al registrar','errores': register_serializer.errors}, status = status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            #print("Unexpected error:", inst)
            return Response({'error': 'Se encontro errores en la petición: '}, status=status.HTTP_409_CONFLICT)



class Login_view(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        try:
            login_serializer = self.serializer_class(data=request.data, context={'request': request})
            if login_serializer.is_valid():
                user = login_serializer.validated_data['user']
                if user.is_active:
                    token, created = Token.objects.get_or_create(user=user)
                    user_serializer = UserTokenSerializer(user)
                    if created:
                        return Response({
                            'token': token.key,
                            'user': user_serializer.data,
                            'message': 'Inicio de sesión exitoso.'
                        }, status=status.HTTP_201_CREATED)
                    else:
                        token.delete()
                        return Response({
                            'error': 'Ya se ha iniciado sesión con este usuario'
                        }, status=status.HTTP_409_CONFLICT)

                else:
                    return Response({'error': 'Este usuario esta inactivo'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({'error': 'Nombre o contraseña incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(login_serializer.errors, status=status.HTTP_409_CONFLICT)


class Logout_view(APIView):
    def get(self, request, *args, **kwargs):
        try:
            token = request.GET.get('token')
            token = Token.objects.filter(key=token).first()

            if token:
                user = token.user
                all_sessions = Session.objects.filter(
                    expire_date__gte=datetime.now())
                # print(all_sessions)
                if all_sessions.exists():
                    # print(session)
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.id == int(session_data.get('_auth_user_id')):
                            session.delete()

                token.delete()

                session_message = 'Sesiones del usuario eliminadas.'
                token_massage = 'Token Eliminado.'
                return Response({'token_massage': token_massage, 'session_message': session_message}, status=status.HTTP_200_OK)

            return Response({'error': 'No se encontraron usuarios con estas credenciales'}, status=status.HTTP_400_BAD_REQUEST)

        except:
            return Response({'error': 'No se encontrado token en la petición'}, status=status.HTTP_409_CONFLICT)


