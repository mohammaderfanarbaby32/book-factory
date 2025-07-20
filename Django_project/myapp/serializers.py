from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import SimpleUser
from .models import Book, Category

class SimpleLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class SimpleRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleUser
        fields = ['first_name', 'last_name', 'username', 'mobile', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BookSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Book
        fields = '__all__'