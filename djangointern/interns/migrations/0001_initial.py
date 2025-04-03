# Generated by Django 5.1.7 on 2025-04-03 05:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='registerintern',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('internname', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('mail', models.EmailField(max_length=254, unique=True)),
                ('domain', models.CharField(max_length=255)),
                ('duration', models.IntegerField()),
                ('date', models.DateField()),
                ('whatsapp', models.IntegerField()),
                ('collegename', models.CharField(max_length=255)),
                ('passyear', models.IntegerField()),
                ('degree', models.CharField(max_length=255)),
            ],
        ),
    ]
