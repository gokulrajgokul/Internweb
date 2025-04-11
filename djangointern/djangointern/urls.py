from django.contrib import admin
from django.urls import path
from interns.views import HelloWorldView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', HelloWorldView.as_view()),
]

