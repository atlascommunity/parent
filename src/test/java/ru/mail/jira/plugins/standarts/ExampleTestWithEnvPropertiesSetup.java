package ru.mail.jira.plugins.standarts;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ExampleTestWithEnvPropertiesSetup {
    Properties properties = null;

    @BeforeAll
    public void init() throws IOException {
        try (InputStream resourceAsStream = new FileInputStream(new File("./src/test/resources/env.properties"))) {
            properties = new Properties();
            properties.load(resourceAsStream);
        }
    }

    @Test
    public void testFunc() {
        assertEquals(properties.getProperty("testKey"), "testValue");
    }
}
