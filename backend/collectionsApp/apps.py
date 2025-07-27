from django.apps import AppConfig


class CollectionsappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'collectionsApp'

    def ready(self):
        import collectionsApp.signals 
