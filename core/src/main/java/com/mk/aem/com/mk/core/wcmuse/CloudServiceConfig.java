package com.mk.aem.com.mk.core.wcmuse;

import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUse;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;

public class CloudServiceConfig extends WCMUse {

    private final Logger log = LoggerFactory.getLogger(getClass());
    
	private static final String CLOUD_SERVICE_CONFIGS = "cq:cloudserviceconfigs";
	
	private ResourceResolver resourceResolver = null;
    private String id;

    @SuppressWarnings("deprecation")
	@Override
    public void activate() {

        try {
        	resourceResolver = 
        			getSlingScriptHelper()
        			.getService(ResourceResolverFactory.class)
        			.getAdministrativeResourceResolver(null);
        	
        	id = this.getSlingScriptHelper()
                    .getService(ConfigurationManagerFactory.class)
                    .getConfigurationManager(resourceResolver)
                    .getConfiguration(getInheritedProperties().get(CLOUD_SERVICE_CONFIGS,""))
                    .getProperties().get("id","");
        	
        	log.info("this is my id {}",id);
		} catch (Exception e) {
			log.error("Failed to attain resource resolver with privileges",e);
		}finally{
			if(resourceResolver != null){
				resourceResolver.close();
			}
		}
    }

    public String getPropertyId(){
        return id;
    }


}
