# Generated by Django 3.2.7 on 2023-05-22 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_auto_20230522_1438'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='genres',
        ),
        migrations.AddField(
            model_name='movie',
            name='genres',
            field=models.CharField(max_length=200000, null=True),
        ),
    ]