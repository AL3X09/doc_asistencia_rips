# Generated by Django 3.0.6 on 2021-04-13 19:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tema', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='temamodel',
            options={'ordering': ('nombre',)},
        ),
    ]
