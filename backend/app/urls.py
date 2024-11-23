from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name="home"),
    path('cats/<int:cat_id>/', categories, name="cats_id"), # http://127.0.0.1:8000/cats/1/
    path('cats/<slug:cat_slug>/', categories_by_slug, name="cats"), # http://127.0.0.1:8000/cats/something/
    path('<int:pk>/', RecipeDetailView.as_view(), name="recipe_detail"),

]