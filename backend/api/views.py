from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.serializers import *
from app.models import *

class ResipeViewset(ReadOnlyModelViewSet):
    """Представление Блюд"""
    queryset = Recipe.objects.all()
    print(queryset)
    serializer_class = RecipeSerializer

    def get_serializer_class(self):
        return RecipeSerializer

class CategoryViewset(ReadOnlyModelViewSet):
    """Представление Категорий"""
    queryset = Category.objects.all()
    print(queryset)
    serializer_class = CategorySerializer

@api_view(['GET'])
def recipesView(request):
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        # dishes = Dishes.objects.filter(categoryType=request.query_params['category'])
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

"""
устанавливая, many=Trueвы сообщаете drf, что queryset содержит несколько элементов (список элементов), 
поэтому drf необходимо сериализовать каждый элемент с помощью класса сериализатора 
(и serializer.data это будет список)
Если вы не зададите этот аргумент, это будет означать, что queryset является единственным экземпляром и serializer.dataбудет единственным объектом)
"""