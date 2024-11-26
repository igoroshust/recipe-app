from app.models import *
from rest_framework import serializers
class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    time_create = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S') #%-d %B, %Y %Y-%m-%d %H:%M:%S
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'content', 'ingredients', 'category_name', 'time_create', 'image']

class CategoryDetailSerializer(serializers.HyperlinkedModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True) # many=True означает, что queryset содержит несколько элементов
    # и поэтому DRF необходимо сериализовать каждый элемент с помощью класса сериализатора.
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'recipes',]

class CategoryListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description',]