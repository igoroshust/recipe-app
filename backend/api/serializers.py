from app.models import *
from rest_framework import serializers

class RecipeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'content', 'ingredients', 'category', 'time_create']

class CategorySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = ['name', 'description']