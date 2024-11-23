import django_filters
from django_filters import FilterSet, ModelChoiceFilter
from .models import *

class RecipeFilter(FilterSet):

    class Meta:
        model = Recipe
        fields = {
            'title': ['icontains'],
        }

class CategoryFilter(FilterSet):

    class Meta:
        model = Category
        fields = {
            'name': ['icontains'],
        }