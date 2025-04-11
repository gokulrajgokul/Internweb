from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import models

class HelloWorldView(APIView):
    def post(self,request):
        print(request.data)
        return Response('save')
    
    def get(self, request):
        return Response({"message": "Hello, world!"}, status=status.HTTP_200_OK)
