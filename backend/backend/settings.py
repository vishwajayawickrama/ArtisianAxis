from pathlib import Path
import environ
import os
from dotenv import load_dotenv
import dj_database_url

"""
=============================================================================
PATH CONFIGURATION
=============================================================================
"""

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

"""
=============================================================================
ENVIRONMENT VARIABLES
=============================================================================
"""

# Initialize environment variables
env = environ.Env()
environ.Env.read_env()

"""
=============================================================================
SECURITY SETTINGS
=============================================================================
"""

# SECURITY WARNING: keep the secret key used in production secret!
# TODO: Move this to environment variables for production
SECRET_KEY = 'django-insecure-ff%rt$**qtrm))1)@11gwhh&kjyx-o@2!iicb2xc4&0fvs%%(p'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Hosts/domain names that are valid for this site
ALLOWED_HOSTS = [
    "artisianaxis.vishwajayawickrama.me",  # Production domain
    "localhost",                           # Local development
    "127.0.0.1"                           # Local development IP
]

"""
=============================================================================
DJANGO APPLICATION CONFIGURATION
=============================================================================
"""

# Application definition - Order matters for some apps
INSTALLED_APPS = [
    # Custom apps - ArtisianAxis specific applications
    'collectionsApp',     # Manages artisan collections and categories
    'products',           # Handles individual product listings
    'auctions',           # Manages auction functionality
    'authentication',     # Custom user authentication system
    
    # Third-party packages
    'rest_framework',     # Django REST Framework for API
    'storages',           # For Azure Blob Storage integration
    'corsheaders',        # Cross-Origin Resource Sharing headers
    
    # Django built-in apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# Middleware configuration - Order is important!
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',        # Must be at the top for CORS
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Root URL configuration
ROOT_URLCONF = 'backend.urls'

# Template configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI application entry point
WSGI_APPLICATION = 'backend.wsgi.application'

"""
=============================================================================
CORS (Cross-Origin Resource Sharing) CONFIGURATION
=============================================================================
"""

# Allowed origins for CORS requests
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",                        # Vite dev server (React/Vue)
    "http://127.0.0.1:3000",                        # Common local dev port
    "https://artisianaxis.vishwajayawickrama.me",   # Production frontend domain
]

# Allow all origins for development (disable in production)
CORS_ALLOW_ALL_ORIGINS = True

# Allow credentials to be sent with CORS requests
CORS_ALLOW_CREDENTIALS = True

"""
=============================================================================
DATABASE CONFIGURATION
=============================================================================
"""

# Database connection URL (Supabase PostgreSQL)
DATABASE_URL = "postgresql://postgres:7dQB3hOkSB34j85R@db.izkvloxuhetxrrgawymu.supabase.co:5432/postgres"

# Database configuration using dj-database-url for easy parsing
DATABASES = {
    'default': dj_database_url.parse(
        DATABASE_URL,
        conn_max_age=600,           # Connection pooling - keep connections alive for 10 minutes
        conn_health_checks=True,    # Enable connection health checks
        ssl_require=True            # Require SSL for secure connections
    )
}


"""
=============================================================================
PASSWORD VALIDATION
=============================================================================
"""

# Password validation rules
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        # Prevents passwords similar to user information
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        # Enforces minimum password length
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        # Prevents common passwords
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        # Prevents purely numeric passwords
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

"""
=============================================================================
INTERNATIONALIZATION
=============================================================================
"""

# Language code for this installation
LANGUAGE_CODE = 'en-us'

# Time zone for this installation
TIME_ZONE = 'UTC'

# Enable Django's translation system
USE_I18N = True

# Enable timezone-aware datetimes
USE_TZ = True


"""
=============================================================================
STATIC FILES AND MEDIA CONFIGURATION
=============================================================================
"""

# URL to use when referring to static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/
STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

"""
=============================================================================
AZURE BLOB STORAGE CONFIGURATION
=============================================================================
"""

# Azure Storage Account credentials
AZURE_ACCOUNT_NAME = "artisianaxis"
AZURE_ACCOUNT_KEY = "EsXyPb0Ry3PavZRQFfbiA0N9WPtUfPrli+h/hor2L3aXElEtuARzm//wGNsSMLE4xIcBdJYKw70z+ASt6nVI+w=="
AZURE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=artisianaxis;AccountKey=EsXyPb0Ry3PavZRQFfbiA0N9WPtUfPrli+h/hor2L3aXElEtuARzm//wGNsSMLE4xIcBdJYKw70z+ASt6nVI+w==;EndpointSuffix=core.windows.net"

# Azure container names
AZURE_CONTAINER_STATIC = "collections"  # Container for static files
AZURE_CONTAINER_MEDIA = "collections"   # Container for media files (user uploads)

# Static and media file URLs served from Azure Blob Storage
STATIC_ROOT = f"https://{AZURE_ACCOUNT_NAME}.blob.core.windows.net/{AZURE_CONTAINER_STATIC}/"
MEDIA_URL = f"https://{AZURE_ACCOUNT_NAME}.blob.core.windows.net/{AZURE_CONTAINER_MEDIA}/"

# Storage backends configuration
STORAGES = {
    # Default storage for media files (user uploads)
    "default": {
        "BACKEND": "storages.backends.azure_storage.AzureStorage",
        "OPTIONS": {
            "azure_container": AZURE_CONTAINER_MEDIA,
            "account_name": AZURE_ACCOUNT_NAME,
            "account_key": AZURE_ACCOUNT_KEY,
            "connection_string": AZURE_CONNECTION_STRING,
        },
    },
    # Static files storage (CSS, JS, etc.)
    "staticfiles": {
        "BACKEND": "storages.backends.azure_storage.AzureStorage",
        "OPTIONS": {
            "azure_container": AZURE_CONTAINER_STATIC,
            "account_name": AZURE_ACCOUNT_NAME,
            "account_key": AZURE_ACCOUNT_KEY,
            "connection_string": AZURE_CONNECTION_STRING,
        }
    }
}
