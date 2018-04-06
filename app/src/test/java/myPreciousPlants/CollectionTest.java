package myPreciousPlants;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import myPreciousPlants.collection.Collection;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/application-context.xml" })
public class CollectionTest {

	@Autowired
	private Collection collection;

	// @Autowired
	// private CollectionController collectionController;
	//
	// @Autowired
	// private CollectionService collectionService;
	//
	@Test
	public void collectionShouldContainCollectionName() {
		collection.setCollectionName("Orchid collection");
		assertEquals("Orchid collection", collection.getCollectionName());
	}
}
