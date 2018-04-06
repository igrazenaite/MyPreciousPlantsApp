package myPreciousPlants;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import myPreciousPlants.repotting.Repot;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/application-context.xml" })
public class RepottingTest {

	@Autowired
	private Repot repot;

	@Test
	public void repottingContainsDateOfRepot() {
		repot.setDateOfRepot("2018-04-04");
		assertEquals("2018-04-04", repot.getDateOfRepot());
	}

	@Test
	public void repottingContainsRepotInfo() {
		repot.setRepotInfo("Larch bark used as media");
		assertEquals("Larch bark used as media", repot.getRepotInfo());
	}

}
