# FAQ

#### ownCloud support multi-language?

Yes

#### What is the default character set?

UTF-8

#### Does ownCloud provide a client?

Yes, includes: ownCloud Desktop Client, ownCloud Android App, ownCloud iOS App

#### ownCloud can preview and edit Office document?

No, you need to integrate Document Service for it, [how to set?](/solution-more.html#owncloud-preview-and-edit)

#### ownCloud can integrate external storage?

Yes

#### How can OwnCloud view&edit file online?

You should complete the [OnlyOffice setting](admin-onlyds) on your OwnCloud

#### How do I transfer files from one user to another?

See [transferring files to another user](https://doc.owncloud.org/server/admin_manual/configuration/files/file_sharing_configuration.html#transferring-files-to-another-user).

#### How do I deal with problems caused by using self-signed SSL certificates?

See [the security section of the OCC command](https://doc.owncloud.org/server/admin_manual/configuration/server/occ_command.html#security).

#### I'm the admin and I lost my password! What do I do now!

See [the reset admin password documentation](https://doc.owncloud.org/server/admin_manual/configuration/user/reset_admin_password.html).

#### What is a Federated System?

A Federated System is another ownCloud or [OpenCloudMesh](https://oc.owncloud.com/opencloudmesh.html) supporting cloud service.

#### What the difference between the ownCloud(LAMP) and ownCloud(LEMP) ?

LAMP is using Apache as Web Server for your ownCloud  
LEMP is using Nginx as Web Server for your ownCloud

#### Can I use the RDS of Cloud Provider for ownCloud?

You can use the RDS for ownCloud if you need,and just need to modify the database configuration section in the wp-config.php

#### Where is the database connection configuration of ownCloud?

Database configuration information in *config.php* in the [ownCloud installation directory](/stack-components.md#owncloud)

#### If there is no domain name, can I deploy ownCloud?

Yes, visit ownCloud by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

Yes, phpMyAdmin is on it, visit by *http://Internet IP/phpmyadmin*

#### How to disable phpMyAdmin access?

Edit the  [phpMyAdmin configuration file](/stack-components.md#phpmyadmin), replace `Require all granted` with `Require ip 192.160.1.0`, then restart Apache service

#### Is it possible to modify the source path of ownCloud?

Yes, modify it by [vhost configuration file](/stack-components.md#apache)

#### Can I configure this ownCloud if I don't understand the Linux command?

Yes, you can use GUI tool WinSCP to start ownCloud, no commands

#### Do I need to change the owner(group) for the files which I upload by SFTP?

No, you don't need to change them because LAMP/LNMP was set to changed automaticly

#### How to modify the path of ownCloud?

Example application's path is: */data/wwwroot/owncloud*, you can modify it by [vhost configuration file](/stack-components.md#apache)

#### How to delete 9Panel?

Please delete all files in 9Panel */data/apps/9panel* and keep an empty 9Panel folder

#### How to change the permissions of filesytem?

Change owner(group) or permissions like below:

```shell
#for ownCloud(lamp)
chown -R apache.apache /data/wwwroot
#for ownCloud(lemp)
chown -R nginx.nginx /data/wwwroot


find /data/wwwroot -type d -exec chmod 750 {} \;
find /data/wwwroot -type f -exec chmod 640 {} \;
```

#### Can I deploy multiple sites on the ownCloud(LAMP) or ownCloud(LEMP) ?

Websoft9 ownCloud stack supports the deployment of multiple applications (websites), but different environments have different operating methods.

* [Add new site on ownCloud on LAMP](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)
* [Add new site on ownCloud on LEMP](https://support.websoft9.com/docs/lnmp/solution-deployment.html#deploy-second-application)


#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers