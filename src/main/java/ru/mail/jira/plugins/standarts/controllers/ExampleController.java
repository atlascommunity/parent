package ru.mail.jira.plugins.standarts.controllers;

import com.atlassian.jira.security.JiraAuthenticationContext;
import com.atlassian.jira.user.ApplicationUser;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.plugins.rest.common.security.AnonymousAllowed;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.Optional;

@Slf4j
@Controller
@Path("/example_controller")
public class ExampleController {
    private final JiraAuthenticationContext jiraAuthenticationContext;

    @Autowired
    public ExampleController(@ComponentImport JiraAuthenticationContext jiraAuthenticationContext) {
        this.jiraAuthenticationContext = jiraAuthenticationContext;
    }

    @AnonymousAllowed
    @GET
    @Path("/getCurrentUser")
    public Response getCurrentUser() {
        log.info("Get current user rest api was used");
        return Response
                .ok(Optional.ofNullable(jiraAuthenticationContext.getLoggedInUser())
                            .map(ApplicationUser::getUsername)
                            .orElse("Anonymous"))
                .build();
    }
}
