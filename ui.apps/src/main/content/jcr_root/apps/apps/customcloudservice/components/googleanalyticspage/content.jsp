<%@page contentType="text/html" pageEncoding="utf-8"%>
<%@include file="/libs/foundation/global.jsp" %>
<div>
    <h3>Google Analytics</h3>
    <ul>
        <li>
            <div class="li-bullet">
                <strong>Google Analytics ID: </strong><br><%= xssAPI.encodeForHTML(properties.get("id", "")) %>
            </div>
            This shows results and such
        </li>
    </ul>
</div>

