from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Topic, Section, Subtopic
from api.serializers import TopicSerializer, SectionSerializer, SubtopicSerializer


@api_view(['GET', 'POST'])
def topics_list(request, section_id):
    try:
        section = Section.objects.get(id=section_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        topics = Topic.objects.filter(section=section)
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TopicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def section_details(request, section_id):
    try:
        section = Section.objects.get(id=section_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})
    serializer = SectionSerializer(section)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def subtopic_details(request, subtopic_id):
    try:
        subtopic = Subtopic.objects.get(id=subtopic_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = SubtopicSerializer(subtopic)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SubtopicSerializer(instance=subtopic, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        subtopic.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def subtopics_list(request):
    if request.method == 'GET':
        topics = Subtopic.objects.all()
        serializer = SubtopicSerializer(topics, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def topics_count(request):
    if request.method == 'GET':
        topics = Topic.all_topics.all()
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)
