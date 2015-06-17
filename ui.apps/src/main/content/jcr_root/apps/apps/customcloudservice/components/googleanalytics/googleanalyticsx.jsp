<%@page import="org.apache.sling.api.resource.Resource,
                org.apache.sling.api.resource.ValueMap,
                org.apache.sling.api.resource.ResourceUtil,
                com.day.cq.wcm.webservicesupport.Configuration,
                com.day.cq.wcm.webservicesupport.ConfigurationManager" %>
<%@include file="/libs/foundation/global.jsp" %>
<%
    String[] services = pageProperties.getInherited("cq:cloudserviceconfigs", new String[]{});
    for(String s : services){
        out.write(s);
    }
%>
<br>
Here is the google analytics property id: ${properties.id}
--Add implementation here--