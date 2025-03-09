from rest_framework import serializers
from .models import Courses,CourseTags,CourseSection,SectionModule

class CourseTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTags
        fields = '__all__'

class SectionModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionModule
        fields = '__all__'

class CourseSectionSerializer(serializers.ModelSerializer):
    modules = SectionModuleSerializer(many=True, read_only=True, source='sectionmodule_set')
    class Meta:
        model = CourseSection
        fields = '__all__'

class CoursesSerializer(serializers.ModelSerializer):
    sections = CourseSectionSerializer(many=True, read_only=True, source='coursesection_set')
    class Meta:
        model = Courses
        fields = '__all__'




