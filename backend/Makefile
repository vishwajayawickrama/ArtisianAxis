PYTHON=python

runserver:
	$(PYTHON) manage.py runserver

migrate:
	$(PYTHON) manage.py makemigrations
	$(PYTHON) manage.py migrate

startapp:
	$(PYTHON) manage.py startapp $(name)

setup-new:
	$(PYTHON) -m venv venv

setup-install:
	. venv/bin/activate && pip install -r requirements.txt
