from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Section, Topic, Subtopic
from api.serializers import SectionSerializer, SubtopicSerializer, TopicSerializer


class SectionsListAPIView(generics.ListCreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = (IsAuthenticated,)


class TopicRelated:
    def get_object(self, topic_id):
        try:
            return Topic.objects.get(id=topic_id)
        except Topic.DoesNotExist as e:
            return Response({'error': str(e)})


class SubtopicsListAPIView(APIView, TopicRelated):
    def get(self, request, topic_id):
        topic = self.get_object(topic_id)
        subtopics = Subtopic.objects.filter(topic=topic)
        serializer = SubtopicSerializer(subtopics, many=True)
        return Response(serializer.data)

    def post(self, request, topic_id):
        serializer = SubtopicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TopicDetailsAPIView(APIView, TopicRelated):
    def get(self, request, topic_id):
        topic = self.get_object(topic_id)
        serializer = TopicSerializer(topic)
        return Response(serializer.data)

    def put(self, request, topic_id):
        topic = self.get_object(topic_id)
        serializer = TopicSerializer(instance=topic, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, topic_id):
        topic = self.get_object(topic_id)
        topic.delete()
        return Response({'deleted': True})
