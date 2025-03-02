from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Courses, CourseSection, SectionModule
from  userAuth.models import CustomUser
from .serializers import CoursesSerializer, CourseSectionSerializer, SectionModuleSerializer



@api_view(['GET'])
def getCourseList(request):
    try:
        courses = Courses.objects.all().order_by('-created_at')
        serializer = CoursesSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error':format(str(e))}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def addNewCourse(request):
    try:
        serializer = CoursesSerializer(data=request.data)
        if serializer.is_valid():
            course = serializer.save()
            return Response(CoursesSerializer(course).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getCourseSectionList(request, cid):
    try:
        courses = CourseSection.objects.filter(course=cid).all().order_by('-created_at')
        serializer = CourseSectionSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error':format(str(e))}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
def addCourseSections(request):
    serializer = CourseSectionSerializer(data=request.data)
    if serializer.is_valid():
        section = serializer.save()
        return Response(CourseSectionSerializer(section).data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def addSectionModule(request):
    try:
        serializer = SectionModuleSerializer(data=request.data)
        if serializer.is_valid():
            section = serializer.save()
            return Response(SectionModuleSerializer(section).data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error':format(str(e))}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['GET'])
def add_fake_courses(request):
    from faker import Faker
    fake = Faker()
    num_records = 100
    teacher = CustomUser.objects.get(id=3)
    # Loop over the number of records and insert fake data into the table
    for i in range(num_records):
        original_price = float(fake.random_number(digits=5)) 
        Courses.objects.create(
            title = fake.text(max_nb_chars=50),
            summary = fake.paragraph(),
            content = fake.paragraph(),
            teacher = teacher,
            original_price = original_price,
            sale_price = original_price * 0.9 
        )
    return Response(status=status.HTTP_200_OK)

     


