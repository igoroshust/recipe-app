from app.models import *
from rest_framework import serializers

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'content', 'ingredients', 'category_name', 'time_create']

class CategorySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = ['name', 'description']