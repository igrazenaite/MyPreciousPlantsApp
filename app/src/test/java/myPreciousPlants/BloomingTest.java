package myPreciousPlants;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import myPreciousPlants.blooming.Blooming;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/application-context.xml" })
public class BloomingTest {

	@Autowired
	private Blooming bloom;

	@Test
	public void bloomingShouldContainDateOfBloom() {
		bloom.setDateOfBloom("2018-01-01");
		assertEquals("2018-01-01", bloom.getDateOfBloom());
	}

	@Test
	public void bloomingShouldContainBloomInfo() {
		bloom.setBloomInfo("Two spikes with 50 blooms");
		assertEquals("Two spikes with 50 blooms", bloom.getBloomInfo());
	}

}
