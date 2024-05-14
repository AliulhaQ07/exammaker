"""
URL configuration for exammaker project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from exammakerapp import views

from exammaker import settings

urlpatterns =  ([
    path('admin/', admin.site.urls),
    path('contact', views.contact, name='contact'),
    path('createexam', views.create_exam, name='createexam'),
    # path('viewexam', views.view_exam, name='viewexam'),
    path('', views.index, name='index'),
    path('testimonials', views.testimonials, name='testimonials'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
)
