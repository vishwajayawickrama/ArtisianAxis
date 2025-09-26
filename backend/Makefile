PYTHON=python3
VENV_PATH=venv
VENV_BIN=$(VENV_PATH)/bin

runserver:
	$(VENV_BIN)/python manage.py runserver

migrate:
	$(VENV_BIN)/python manage.py makemigrations
	$(VENV_BIN)/python manage.py migrate

startapp:
	$(VENV_BIN)/python manage.py startapp $(name)

setup-new:
	$(PYTHON) -m venv $(VENV_PATH)
	@echo "Virtual environment created successfully!"
	@echo "Run 'make setup-install' to install dependencies"

setup-install:
	$(VENV_BIN)/pip install --upgrade pip
	$(VENV_BIN)/pip install -r requirements.txt
	@echo "Dependencies installed successfully!"

activate:
	@echo "To activate the virtual environment, run:"
	@echo "source $(VENV_PATH)/bin/activate"
	@echo ""
	@echo "Or use the shell command:"
	@echo "make shell"

shell:
	@echo "Starting shell with virtual environment activated..."
	@exec $(VENV_BIN)/python -c "import os; os.system('$$SHELL')"

deactivate:
	@echo "To deactivate the virtual environment, simply type:"
	@echo "deactivate"
	@echo "(This only works when the environment is already activated)"

clean:
	rm -rf $(VENV_PATH)
	find . -type d -name __pycache__ -delete
	find . -name "*.pyc" -delete
	@echo "Environment and cache cleaned!"

.PHONY: runserver migrate startapp setup-new setup-install activate shell deactivate clean
