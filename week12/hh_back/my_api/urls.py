from django.urls import path

from my_api.views import company_list, company_detail, vacancy_detail, top_ten, vacancy_list, by_company

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies', by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten)

]