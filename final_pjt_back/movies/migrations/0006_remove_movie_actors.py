# Generated by Django 3.2.7 on 2023-05-23 02:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0005_auto_20230522_1736'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='actors',
        ),
    ]