package org.hcl.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.hcl.test.model.Category;
import org.hcl.test.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class UiApplication {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping("/resource")
	public Map<String,Object> home() {
		Map<String,Object> model = new HashMap<String,Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}

	@RequestMapping("/categories")
	public List<Category> categories() {
		
		return categoryService.GetCategories();
	}

    public static void main(String[] args) {
        SpringApplication.run(UiApplication.class, args);
    }
}
