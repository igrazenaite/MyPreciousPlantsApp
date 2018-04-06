package myPreciousPlants;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import myPreciousPlants.plant.Plant;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/application-context.xml" })
public class PlantTest {

	@Autowired
	private Plant plant;

	@Test
	public void plantShouldContainNameItWasCreatedWith() {
		plant.setName("NewOrchid");
		assertEquals("NewOrchid", plant.getName());
	}

	@Test
	public void plantShouldContainPrice() {
		plant.setPrice("12.0");
		assertEquals("12.0", plant.getPrice());
	}

	@Test
	public void plantShouldContainDateOfPurchase() {
		plant.setDateOfPurchase("2018-01-01");
		assertEquals("2018-01-01", plant.getDateOfPurchase());
	}

	@Test
	public void plantShouldContainPlaceOfPurchase() {
		plant.setPlaceOfPurchase("Roelke");
		assertEquals("Roelke", plant.getPlaceOfPurchase());
	}

	@Test
	public void plantShouldContainDescription() {
		plant.setDescription("Good plant");
		assertEquals("Good plant", plant.getDescription());
	}

	@Test
	public void plantShouldContainNotes() {
		plant.setNotes("Water twice a week");
		assertEquals("Water twice a week", plant.getNotes());
	}
}
