# Generated by Django 4.1.1 on 2022-10-15 18:52

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_rename_followers_user_following'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cover_pic',
            field=models.ImageField(default='images/cover/coverphoto.jpg', null=True, upload_to=accounts.models.cover_image_path),
        ),
    ]
