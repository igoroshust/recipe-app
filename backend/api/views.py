from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from api.serializers import *
from app.models import *

class RecipeViewSet(ReadOnlyModelViewSet):
    """Представление Блюд"""
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class CategoryDetailViewSet(ReadOnlyModelViewSet):
    """Представление Категорий"""
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer


class CategoryListViewSet(ReadOnlyModelViewSet):
    """Представление Категорий"""
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer

class CustomApiRootView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({
            'categories': reverse('test-category-list', request=request),
            'category-detail': reverse('category-detail', kwargs={'pk': 1}, request=request),
        })

@api_view(['GET'])
def recipesView(request):
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        # dishes = Dishes.objects.filter(categoryType=request.query_params['category'])
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

"""
устанавливая, many=True вы сообщаете drf, что queryset содержит несколько элементов (список элементов), 
поэтому drf необходимо сериализовать каждый элемент с помощью класса сериализатора 
(и serializer.data это будет список)
Если вы не зададите этот аргумент, это будет означать, что queryset является единственным экземпляром и serializer.dataбудет единственным объектом)
"""