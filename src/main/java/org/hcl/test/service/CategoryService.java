package org.hcl.test.service;

import java.util.List;

import org.hcl.test.model.Category;

public interface CategoryService {

	Category GetCategory(int i);

	List<Category> GetCategories();

}
