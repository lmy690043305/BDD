package testProject.testProject;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import cucumber.api.Format;
import cucumber.api.java.zh_cn.假如;
import cucumber.api.java.zh_cn.当;
import cucumber.api.java.zh_cn.那么;

import static org.junit.Assert.*;  
import static org.hamcrest.CoreMatchers.*;  

public class BookSearchSteps {
	
	Library library = new Library();
	
	List<Book> result = new ArrayList<Book>();
	@假如(".+一本书叫'(.+)',作者是'(.+)',发布于(\\d+)")
	public void addNewBook(final String title, final String author, @Format("yyyymmdd") final Date published)
	{
		Book book = new Book(title, author, published);
		library.addBook(book);
	}
	 
	@当("客户搜索发布于(\\d+)年和(\\d+)年的图书时")
	public void SetSearchParameters(@Format("yyyy") final Date from, @Format("yyyy") final Date to)
	{
		result = library.findBooks(from, to);
	}
	
	@那么("能找到(\\d+)本书")
	public void verifyAmountOfBookFound(final int booksfound)
	{
		assertThat(result.size(), equalTo(booksfound));
	}
	
	@那么("第(\\d+)本书叫'(.+)'")
	public void verifyBookAtPosition(final int position, final String title)
	{
		assertThat(result.get(position-1).getTitle(), equalTo(title));
	}


}
