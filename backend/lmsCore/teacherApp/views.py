from courseApp.models import Courses, CourseTags, CourseSection, SectionModule
from courseApp.serializers import CoursesSerializer, CourseTagsSerializer, CourseSectionSerializer, SectionModuleSerializer

from rest_framework import  status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404

class CoursePagination(PageNumberPagination):
    page_size = 10  # Number of posts per page
    page_size_query_param = 'page_size'
    max_page_size = 100


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def course_list(request, user):
    try:

        courses = Courses.objects.filter(teacher=user).order_by('-created_at')
        paginator = CoursePagination()
        paginated_courses = paginator.paginate_queryset(courses, request)
        serializers = CoursesSerializer(paginated_courses, many=True)
        return paginator.get_paginated_response(serializers.data)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
def get_course_details(request, slug):
    try:
        course = get_object_or_404(Courses, slug=slug)
        serializer = CoursesSerializer(course)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
