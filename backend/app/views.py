from django.views.generic import (ListView, DetailView, CreateView, DeleteView, UpdateView, TemplateView, View)
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import *
from .filters import *


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
