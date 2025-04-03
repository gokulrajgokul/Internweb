from django.db import models


# Create your models here.

class registerintern(models.Model):
    internname=models.CharField(max_length = 255,unique=True)
    password=models.CharField(max_length = 255)
    mail=models.EmailField(unique=True)
    domain=models.CharField(max_length = 255)
    duration=models.IntegerField(null=False)
    date=models.DateField()
    whatsapp=models.IntegerField()
    collegename=models.CharField(max_length = 255)
    passyear=models.IntegerField(null=False)
    degree=models.CharField(max_length = 255)
