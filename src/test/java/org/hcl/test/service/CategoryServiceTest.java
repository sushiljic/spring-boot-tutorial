package org.hcl.test.service;

import static junit.framework.Assert.assertEquals;

import org.hcl.test.model.Category;
import org.hcl.test.repository.CategoryRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.internal.verification.VerificationModeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
public class CategoryServiceTest {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepository categoryRepository;

    @Before
    public void setup() {
        Category category = new Category();
        category.setName("Fiction");
        Mockito.when(categoryRepository.findOne(1)).thenReturn(category);
    }

    @After
    public void verify() {
        Mockito.verify(categoryRepository, VerificationModeFactory.times(1)).findOne(Mockito.anyInt());
        // This is allowed here: using container injected mocks
        Mockito.reset(categoryRepository);
    }

    @Test()
    public void testGetCategory()  {
        Category category = categoryService.GetCategory(1);
        assertEquals("Fiction", category.getName());
    }

    @Configuration
    static class AccountServiceTestContextConfiguration {

        @Bean
        public CategoryService categoryService() {
            return new CategoryServiceImpl();
        }

        @Bean
        public CategoryRepository categoryRepository() {
            return Mockito.mock(CategoryRepository.class);
        }
    }
}
