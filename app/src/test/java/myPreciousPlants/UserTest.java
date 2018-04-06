package myPreciousPlants;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import myPreciousPlants.users.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"/application-context.xml"})
public class UserTest {

	@Autowired
	private User user;
	
	@Test
	public void userShouldHaveUserName() {
		user.setUserName("user");
		assertEquals("user", user.getUserName());
	}

	// ---need to encode passwords!!!!----
	@Test
	public void userShouldHavePassword() {
		user.setPassword("password");
		assertEquals("password", user.getPassword());
	}
}
