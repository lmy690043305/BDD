package testProject.testProject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Hello world!
 *
 */
public class Library 
{
    private final List<Book> store = new ArrayList<Book>();
    
    public void addBook(final Book book)
    {
    	store.add(book);
    }
    
    public List<Book> findBooks(final Date from, final Date to)
    {
    	Calendar end= Calendar.getInstance();
    	end.setTime(to);
    	end.roll(Calendar.YEAR, 1);
    	
    	
    	return store;
    }
    
}
