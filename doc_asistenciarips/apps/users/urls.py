from django.urls import path
from .views import *

urlpatterns = [
    path('api/', Usuarios_view, name = 'lista_usuarios'),
    path('api/<int:pk>/', Usuario__detail, name = 'detalle_usurio'),
    path('register', Register_view.as_view(), name = 'Register'),
    path('login', Login_view.as_view(), name = 'Login'),
    path('logout', Logout_view.as_view(), name = 'Logout'),
    
]
