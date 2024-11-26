from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import *
from api.views import *

urlpatterns = [
    path('', index, name="home"),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name="recipe_detail"),
    path('recipes/', RecipeListView.as_view(), name="recipes"),
    path('categories/<int:category_id>/', RecipeListByCategory.as_view(), name="recipe-list-by-category"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)