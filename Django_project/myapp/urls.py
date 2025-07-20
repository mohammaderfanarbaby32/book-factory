from django.urls import path
from .views import RegisterAPIView, LoginAPIView
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import LoginAPIView
from .views import BookListView
urlpatterns = [
    path('api/register/', RegisterAPIView.as_view(), name='register'),
    path('api/books/', BookListView.as_view(), name='book-list'),
    path('api/login/', LoginAPIView.as_view(),name='api')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
