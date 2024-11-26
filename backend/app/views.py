from django.views.generic import (ListView, DetailView, CreateView, DeleteView, UpdateView, TemplateView, View)
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string

from rest_framework import generics
from .models import *
from .filters import *
from api.serializers import *


class RecipeDetailView(DetailView):
    """Содержимое рецепта"""
    model = Recipe
    template_name = 'app/recipe.html'
    context_object_name = 'recipe'
    queryset = Recipe.objects.all()

class RecipeListView(ListView):
    """Список рецептов"""
    model = Recipe
    ordering = '-time_create'
    template_name = 'app/recipes.html'
    context_object_name = 'recipes'

    def get_queryset(self, **kwargs):
        """Получение списка рецептов"""
        queryset = super().get_queryset()
        self.filterset = RecipeFilter(self.request.GET, queryset)
        return self.filterset.qs

    def get_context_data(self, **kwargs):
        """Получение словаря с контекстом и передача в шаблон для рендеринга"""
        context = super().get_context_data(**kwargs)
        context['filterset'] = self.filterset
        return context

class RecipeListByCategory(ListView):
    """Список блюд по категории"""
    model = Recipe
    context_object_name = 'categories'
    template_name = 'app/category_list.html'
    serializer_class = RecipeSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Recipe.objects.filter(category_id=category_id)


def index(request):
    """Панель управления на бэкенде"""

    data = {
        'title': 'Главная страница',
    }
    return render(request, 'app/index.html', context=data)
