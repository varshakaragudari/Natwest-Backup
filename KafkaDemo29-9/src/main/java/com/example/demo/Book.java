package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Book {

	private int bookId;
	private String bookName;
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public Book(int bookId, String bookName) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
	}
	public Book() {
		super();
	}
	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookName=" + bookName + "]";
	}
	
}
