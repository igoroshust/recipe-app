### Build Backend:
1) python -m venv venv
2) venv\scripts\activate
3) pip install -r requirements.txt
4) cd backend
5) python manage.py runserver

### Build Frontend (from BASE_DIR):
1) cd frontend 
2) npm i
3) npm start

### Swagger & OpenAPI:

1) http://localhost:8000/api/ - Custom Api Root (DRF)
2) http://localhost:8000/api/swagger-ui/ - Swagger
3) http://localhost:8000/api/openapi/ - OpenAPI Schema