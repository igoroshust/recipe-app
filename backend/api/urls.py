from rest_framework import routers
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

from .views import *

# router = routers.DefaultRouter()
# router.register(r'recipes', RecipeViewSet)
# router.register(r'categories', CategoryDetailViewSet)


urlpatterns = [
    # path('', include(router.urls)),
    path('', CustomApiRootView.as_view(), name='api-root'),
    path('recipes/', RecipeViewSet.as_view({'get': 'list'}), name='recipes-list'),
    path('recipes/<int:pk>/', RecipeViewSet.as_view({'get': 'retrieve'}), name='recipes-info'),
    path('categories/', CategoryListViewSet.as_view({'get': 'list'}), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailViewSet.as_view({'get': 'retrieve'}), name='category-detail'),
    path('openapi/', get_schema_view(
        title="recipe-app",
        description="Project on Django and React",
    ), name='openapi-schema'),

    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
]