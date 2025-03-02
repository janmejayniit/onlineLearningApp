from django.db import models
from userAuth.models import CustomUser
from django.core.exceptions import ValidationError
from django.utils.text import slugify

# Create your models here.
class Courses(models.Model):
    title = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(max_length=100, unique=True, null=True)
    summary = models.CharField(max_length=1500, null=True, blank=True)
    banner = models.ImageField(upload_to='course/banner/', null=True, blank=True)
    content = models.TextField( null=True, blank=True)
    teacher = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    flag_name = models.CharField(max_length=150, null=True, blank=True)
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def save(self, *args, **kwargs):
        if self.banner:
            max_size = 10 * 1024 * 1024  # 1 MB
            if self.banner.size > max_size:
                raise ValidationError("The image size exceeds the maximum allowed size of 1 MB.")
                
        self.slug = slugify(self.title) 
        original_slug = self.slug
        counter = 1
        while Courses.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            self.slug = f"{original_slug}-{counter}"
            counter += 1
        super().save(*args, **kwargs)

class CourseTags(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    tag_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.tag_name

class CourseSection(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    section_title = models.CharField(max_length=250, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.section_title

class SectionModule(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    section = models.ForeignKey(CourseSection, on_delete=models.CASCADE)
    module_title = models.CharField(max_length=250, null=True, blank=True)
    duration = models.IntegerField(default=0)
    file_type = models.CharField(max_length=150, default='video')
    media_file = models.FileField(upload_to='course/video/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.module_title

