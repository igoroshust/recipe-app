# Generated by Django 5.1.3 on 2024-11-26 09:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_recipe_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='time_create',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
