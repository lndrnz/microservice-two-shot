# Generated by Django 4.0.3 on 2022-07-27 23:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0006_alter_hat_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hat',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='hats', to='hats_rest.locationvo'),
        ),
    ]
