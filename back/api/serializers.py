from rest_framework import serializers
from api.models import Section, Topic, Subtopic
from django.contrib.auth.models import User


class SectionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    image = serializers.CharField()

    def create(self, validated_data):
        section = Section.objects.create(name=validated_data.get('name'),
                                         description=validated_data.get('description'),
                                         image=validated_data.get('image'))
        return section

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('id', 'name', 'description', 'section')


class SubtopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtopic
        fields = ('id', 'topic', 'name', 'description', 'code')


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=150)
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=150)
    email = serializers.CharField(max_length=254)
    password = serializers.CharField(max_length=128)
    is_staff = serializers.BooleanField()

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data.get('username'),
                                        email=validated_data.get('email'),
                                        password=validated_data.get('password'),
                                        is_staff=validated_data.get('is_staff'))
        user.first_name = validated_data.get('first_name')
        user.last_name = validated_data.get('last_name')
        user.save()
        return user

    def update(self, instance, validated_data):
        return instance
