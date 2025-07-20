from django.shortcuts import render, get_object_or_404
from .models import cala
from .models import SimpleUser
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login
from .serializers import SimpleLoginSerializer
from django.contrib.auth.hashers import check_password

class LoginAPIView(APIView):
    def post(self , request):
        serializer = SimpleLoginSerializer(data=request.data)
        if serializer.is_valid():
            username1 = serializer.validated_data['username']
            password1 = serializer.validated_data['password']
            try:
                user = SimpleUser.objects.get(username=username1)
                
                if check_password(password1, user.password):
                    return Response('True')
                else:
                    return Response('false')
            except SimpleUser.DoesNotExist:
                return Response('false')
        return Response(serializer.errors)

    
from .serializers import SimpleRegisterSerializer
from django.contrib.auth.hashers import make_password

class RegisterAPIView(APIView):
    def post(self, request):
        serializer = SimpleRegisterSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            email = serializer.validated_data['email']

            if SimpleUser.objects.filter(username=username).exists():
                return Response({'error': 'Username already exists'}, status=400)
            if SimpleUser.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'}, status=400)

            # هش کردن رمز
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            
            serializer.save()
            return Response({'message': 'User created successfully'}, status=201)

        return Response(serializer.errors, status=400)
    



from .models import Book
from .serializers import BookSerializer

class BookListView(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)