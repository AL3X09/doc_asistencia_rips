from rest_framework import serializers
from .models import AsistenciaModel

class AsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsistenciaModel
        fields = '__all__'