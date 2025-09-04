from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('collections/', include('collectionsApp.urls')),
    path('products/', include('products.urls')),
]
    