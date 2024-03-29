from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from simple_history.models import HistoricalRecords
from django.contrib.auth.hashers import make_password
    
class UserManager(BaseUserManager):
    def _create_user(self, username,  email, name, last_name, firm, direc, office, telephone, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            username = username,
            email = email,
            name = name,
            last_name = last_name,
            firm = firm,
            direc = direc,
            office = office,
            telephone = telephone,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, name, last_name, firm, direc, office, telephone, password=None, **extra_fields):
        return self._create_user(username, email, name, last_name, firm, direc, office, telephone, password, False, False, **extra_fields)

    def create_superuser(self, username, email, name, last_name, firm, direc, office, telephone, password=None,  **extra_fields):
        return self._create_user(username, email, name, last_name, firm, direc, office, telephone, password, True, True, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('usuario',max_length = 255, unique = True)
    email = models.EmailField('Correo Electrónico',max_length = 255, unique = True)
    name = models.CharField('Nombres', max_length = 255, blank = True, null = True)
    last_name = models.CharField('Apellidos', max_length = 255, blank = True, null = True)
    firm = models.URLField('Ruta Firma', max_length = 255, blank = True, null = True)
    direc = models.CharField('Direccion', max_length = 255, blank = True, null = True)
    office = models.CharField('Oficina', max_length = 255, blank = True, null = True)
    telephone = models.CharField('Extencion', max_length = 10, blank = True, null = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    historical = HistoricalRecords()
    objects = UserManager()
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    #def natural_key(self):        return(self.username)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name','last_name','firm', 'direc', 'office', 'telephone']

    #contructor
    def __str__(self):
       return f'{self.name} {self.last_name}'
