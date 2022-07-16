from django.urls import path
from api.views import views_cbv, views_fbv, views_auth
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('sections/', views_cbv.SectionsListAPIView.as_view()),
    path('sections/<int:section_id>/topics/', views_fbv.topics_list),
    path('sections/<int:section_id>/', views_fbv.section_details),
    path('topics/<int:topic_id>/subtopics/', views_cbv.SubtopicsListAPIView.as_view()),
    path('topics/<int:topic_id>/edit/', views_cbv.TopicDetailsAPIView.as_view()),
    path('subtopics/<int:subtopic_id>/edit/', views_fbv.subtopic_details),
    path('signup/', views_auth.sign_up),
    path('users/<str:username>/', views_auth.get_user),
    path('subtopics/', views_fbv.subtopics_list),
    path('manager/', views_fbv.topics_count)
]