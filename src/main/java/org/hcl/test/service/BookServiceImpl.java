package org.hcl.test.service;

import java.util.List;

import org.hcl.test.model.Book;
import org.hcl.test.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("bookService")
@Transactional(readOnly = true)
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;

	@Override
	public Book GetBook(int i) {
		// TODO Auto-generated method stub
		
		return bookRepository.findOne(i);
	}

	@Override
	public List<Book> GetBooks() {
		// TODO Auto-generated method stub
		
		return bookRepository.findAll();
	}
}
