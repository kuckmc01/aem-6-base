############
May 7, 2015
############
*****
Created aem project using archetype:
aem-project-archetype version 10
-Intellij did not properly create the archetype
-Created in Eclipse with no problems, then imported to Intellij and it worked fine
*****
Added Require.js to /etc/designs/apps/clientlib-vendor/js/vendor
Added require-configuration.js file to /etc/designs/apps/clientlib-vendor/js 
#This is used to include jquery as a module for requirejs
#For more information see http://requirejs.org/docs/api.html#define
modified js.txt:
----------------------------
#base=js
vendor/require.js
require-configuration.js
----------------------------
*****
Had to ensure requirejs was loaded first, so added it to the headlibs.html file at /apps/apps/components/structure/page/partials
----------------------------
<sly data-sly-use.clientLib="/libs/granite/sightly/templates/clientlib.html" data-sly-call="${clientLib.js @ categories='cssId.vendor'}" data-sly-unwrap/>
----------------------------
*****
This required jquery as a dependency, updated the .content.xml file at /etc/designs/apps/clientlib-vendor see below:
----------------------------
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[cssId.vendor]"
    dependencies="[jquery]"
    />
----------------------------
See http://requirejs.org/docs/jquery.html for more info
*****
Created a test component to ensure requirejs works
*****
Decided to use "require" instead of "requirejs"
see http://stackoverflow.com/questions/13605600/requirejs-difference-between-requirejs-and-require-functions
############
May 11, 2015
############
'''Emberjs and AEM
*****
Created new component named embercomponent (copied testcomponent and renamed)
Created folder structure and files
---------------------------
|-js
|--app
|---routes
|    -application.js
|---controllers
|    -application.js
|---templates
|    -application.hbs
---------------------------





