# Generated by Django 3.2.7 on 2023-05-25 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rating',
            name='movie',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='user',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='actors',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='like_users',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='release_date',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='runtime',
        ),
        migrations.AlterField(
            model_name='movie',
            name='poster_path',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='movie',
            name='title',
            field=models.CharField(max_length=20),
        ),
        migrations.DeleteModel(
            name='Actor',
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
    ]