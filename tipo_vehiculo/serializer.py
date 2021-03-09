from rest_framework import serializers
from .models import TipoVehiculoModel

class TipoVehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoVehiculoModel
        fields = '__all__'