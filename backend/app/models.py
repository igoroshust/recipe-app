from django.db import models
from datetime import datetime

class Recipe(models.Model):
    """Карточка Блюда"""
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    ingredients = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='recipes')
    time_create = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    class Meta:
        verbose_name = 'Блюдо'
        verbose_name_plural = 'Блюда'

    def __str__(self):
        return self.title

class Category(models.Model):
    """Категория Блюд"""
    name = models.CharField(max_length=255, default='Без категории')
    description = models.TextField()

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name

