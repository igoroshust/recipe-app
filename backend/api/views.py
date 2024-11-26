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
    """Кастромный API ROOT"""
    def get(self, request, *args, **kwargs):
        return Response({
            'recipes': reverse('recipes-list', request=request),
            'recipes/id': reverse('recipes-info', kwargs={'pk': 3}, request=request),
            'categories': reverse('category-list', request=request),
            'categories/id': reverse('category-detail', kwargs={'pk': 3}, request=request),
        })