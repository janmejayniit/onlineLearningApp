# urls.py
from django.urls import path
from .views import (addNewCourse,
                    getCourseList,
                    addCourseSections, 
                    getCourseSectionList, 
                    add_fake_courses,
                    addSectionModule,
                    )


urlpatterns = [
    path('list/', getCourseList, name='getCourseList'),
    path('add/', addNewCourse, name='addNewCourse'),
    path('add/fake/', add_fake_courses, name='add_fake_courses'),
    path('section/add/',addCourseSections, name='addCourseSections'),
    path('section/list/<int:cid>',getCourseSectionList, name='getCourseSectionList'),
    path('module/add/', addSectionModule, name="addSectionModule"),
]
