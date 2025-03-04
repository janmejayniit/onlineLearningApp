from django.contrib import admin
from .models import Courses, CourseSection, SectionModule
# Register your models here.

admin.site.register(Courses)
admin.site.register(CourseSection)
admin.site.register(SectionModule)
