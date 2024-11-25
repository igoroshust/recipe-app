from app.models import *
from rest_framework import serializers
class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'content', 'ingredients', 'category_name', 'time_create', 'category_id', ]

class CategoryDetailSerializer(serializers.HyperlinkedModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'recipes',]

class CategoryListSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name', 'description',]

"""
устанавливая, many=True вы сообщаете drf, что queryset содержит несколько элементов (список элементов), 
поэтому drf необходимо сериализовать каждый элемент с помощью класса сериализатора 
(и serializer.data это будет список)
Если вы не зададите этот аргумент, это будет означать, что queryset является единственным экземпляром 
и serializer.dataбудет единственным объектом)
"""