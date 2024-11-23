from django.views.generic import (ListView, DetailView, CreateView, DeleteView, UpdateView, TemplateView, View)
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import *


class RecipeDetailView(DetailView):
    """Содержимое рецепта"""
    model = Recipe
    template_name = 'app/recipe.html'
    context_object_name = 'recipe'
    queryset = Recipe.objects.all()


def index(request):
    # t = render_to_string('app/index.html')
    # return HttpResponse(t)
    data = {
        'title': 'Главная страница',
    }
    return render(request, 'app/index.html', context=data)

# def about(request):
#     return render(request, 'app/recipe.html')

def categories(request, cat_id):
    """Отображение категорий по ID"""
    return HttpResponse(f"<h1>Статьи по категориям</h1><p>id: {cat_id} </p>")

def categories_by_slug(request, cat_slug):
    """Отображение категорий по СЛАГУ"""
    if request.GET:
        print(request.GET) # <QueryDict: {'name': ['borsch'], 'color': ['red']}>
    return HttpResponse(f"<h1>Статьи по категориям</h1><p>slug: {cat_slug} </p>")
