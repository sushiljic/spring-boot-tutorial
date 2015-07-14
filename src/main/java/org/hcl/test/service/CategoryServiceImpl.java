package org.hcl.test.service;

import java.util.List;

import org.hcl.test.model.Category;
import org.hcl.test.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("categoryService")
@Transactional(readOnly = true)
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category GetCategory(int i) {
		// TODO Auto-generated method stub
		
		return categoryRepository.findOne(i);
	}

	@Override
	public List<Category> GetCategories() {
		// TODO Auto-generated method stub
		
		return categoryRepository.findAll();
	}
}
