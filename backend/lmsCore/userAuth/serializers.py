from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Make sure password is write-only

    class Meta:
        model = CustomUser
        fields = ['id','email', 'password', 'first_name', 'last_name', 'mobile', 'avatar', 'bio', 'address']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)  # Hash password before saving
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        # Try to find the user by email or mobile number
        user = None
        if '@' in username:  # if it looks like an email
            user = CustomUser.objects.filter(email=username).first()
        else:  # else treat it as a mobile number
            user = CustomUser.objects.filter(mobile=username).first()

        if user is None:
            raise serializers.ValidationError("Invalid username or password.")

        # Authenticate the user
        if not user.check_password(password):
            raise serializers.ValidationError("Invalid username or password.")

        # Return user data if authentication is successful
        return {
            'user': user
        }

class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, validators=[validate_password])

    def validate(self, attrs):
        user = self.context['request'].user
        if not user.check_password(attrs['old_password']):
            raise serializers.ValidationError({'old_password': 'Wrong password.'})
        return attrs

    def save(self, **kwargs):
        user = self.context['request'].user
        user.set_password(self.validated_data['new_password'])
        user.save()