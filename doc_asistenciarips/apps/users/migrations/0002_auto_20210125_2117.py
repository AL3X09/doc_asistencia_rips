# Generated by Django 3.1.4 on 2021-01-26 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicaluser',
            name='email',
        ),
        migrations.RemoveField(
            model_name='historicaluser',
            name='image',
        ),
        migrations.RemoveField(
            model_name='historicaluser',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='historicaluser',
            name='name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
        migrations.RemoveField(
            model_name='user',
            name='image',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
        migrations.AlterField(
            model_name='historicaluser',
            name='username',
            field=models.CharField(db_index=True, max_length=255, verbose_name='usuario'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=255, unique=True, verbose_name='usuario'),
        ),
    ]
