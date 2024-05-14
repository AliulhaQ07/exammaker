from django.shortcuts import render

# Create your views here.

# AUTHANTICATIONS
def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')



# PAGES
def index(request):
    return render(request, 'index.html')

def create_exam(request):
    return render(request, 'create_exam.html')

# def view_exam(request):
#     return render(request, 'view_exam.html')

def testimonials(request):
    return render(request, 'testimonials.html')

def contact(request):
    return render(request, 'contact.html')
