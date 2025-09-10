# users/serializers.py
from django.contrib.auth import get_user_model
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['username', 'password', 'phonenumber']

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            phonenumber=validated_data['phonenumber'],
            password=validated_data['password']
        )
        return user

    def validate(self, data):
        if data['password'] != data.get('confirm_password', ''):
            raise serializers.ValidationError("Passwords do not match.")
        return data
