from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import *

def index(request):
    return HttpResponse('Главная страница recipe-app')
    # t = render_to_string('index.html')
    # return HttpResponse(t)

def categories(request, cat_id):
    """Отображение категорий по ID"""
    return HttpResponse(f"<h1>Статьи по категориям</h1><p>id: {cat_id} </p>")

def categories_by_slug(request, cat_slug):
    """Отображение категорий по СЛАГУ"""
    if request.GET:
        print(request.GET) # <QueryDict: {'name': ['borsch'], 'color': ['red']}>
    return HttpResponse(f"<h1>Статьи по категориям</h1><p>slug: {cat_slug} </p>")
