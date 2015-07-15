package org.hcl.test.service;

import java.util.List;

import org.hcl.test.model.Book;

public interface BookService {

	Book GetBook(int i);

	List<Book> GetBooks();

}
