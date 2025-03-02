from rest_framework import serializers
from .models import Courses,CourseTags,CourseSection,SectionModule


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'


class CourseTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTags
        fields = '__all__'

class CourseSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseSection
        fields = '__all__'

class SectionModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionModule
        fields = '__all__'





