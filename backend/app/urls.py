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
    # path('cats/<int:cat_id>/', categories, name="cats_id"), # http://127.0.0.1:8000/cats/1/
    # path('cats/<slug:cat_slug>/', categories_by_slug, name="cats"), # http://127.0.0.1:8000/cats/something/
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)