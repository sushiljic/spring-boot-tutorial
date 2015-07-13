package org.hcl.test.service;

import org.hcl.test.model.Category;
import org.hcl.test.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category GetCategory(int i) {
		// TODO Auto-generated method stub
		
		return categoryRepository.findOne(i);
	}

}
