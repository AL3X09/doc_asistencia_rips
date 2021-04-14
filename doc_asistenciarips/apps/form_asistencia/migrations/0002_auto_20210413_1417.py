# Generated by Django 3.0.6 on 2021-04-13 19:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('form_asistencia', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='asistenciamodel',
            options={'ordering': ('fecha',)},
        ),
        migrations.AddField(
            model_name='asistenciamodel',
            name='consec',
            field=models.IntegerField(default=0, verbose_name='Consecutivo'),
        ),
        migrations.AlterField(
            model_name='asistenciamodel',
            name='fecha',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Fecha'),
        ),
    ]
