from django.urls import path
from .views import course_list, get_course_details


urlpatterns = [
    path('course/list/<int:user>/', course_list, name='getCourseList'),
    path('course/<str:slug>/', get_course_details, name='get_course_details'),
]