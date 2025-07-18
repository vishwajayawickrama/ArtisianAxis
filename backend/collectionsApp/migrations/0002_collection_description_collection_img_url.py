# Generated by Django 5.2.4 on 2025-07-12 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collectionsApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='collection',
            name='description',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='collection',
            name='img_url',
            field=models.URLField(default=''),
            preserve_default=False,
        ),
    ]
