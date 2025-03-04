from django.contrib.auth.backends import BaseBackend
from .models import CustomUser

class EmailOrMobileBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            if '@' in username:
                user = CustomUser.objects.get(email=username)
            else:
                user = CustomUser.objects.get(mobile=username)
        except CustomUser.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        return None

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None
