PYTHON=python

runserver:
	$(PYTHON) manage.py runserver

migrate:
	$(PYTHON) manage.py makemigrations
	$(PYTHON) manage.py migrate

startapp:
	$(PYTHON) manage.py startapp $(name)

setup:
	$(PYTHON) -m venv venv && . venv/bin/activate && pip install -r requirements.txt
