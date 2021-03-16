from rest_framework import serializers
from .models import TipoAsistenciaModel

class TipoAsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoAsistenciaModel
        fields = '__all__'