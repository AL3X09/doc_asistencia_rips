from rest_framework import serializers
from .models import TemaModel

class TemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemaModel
        fields = '__all__'