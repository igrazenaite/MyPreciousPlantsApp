package myPreciousPlants.collection;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*")
public class CollectionController {

	@Autowired
	private CollectionService collectionService;

	@RequestMapping(method = RequestMethod.GET)
	public List<CollectionForClient> giveAllCollections() {
		return getCollectionService().receiveAllCollections();
	}

//	@RequestMapping(value = "{/collectionId}", method = RequestMethod.GET)
//	public Collection findByCollectionId(@PathVariable("collectionId") final long collectionId) {
//		return getCollectionService().receiveOneCollection(collectionId);
//	}

	@RequestMapping(value = "/addNewCollection", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createNewCollection(@RequestBody final AddNewCollection newCollection) {
		collectionService.addNewCollection(newCollection);
	}

	@RequestMapping(path = "/update/{collectionId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingCollection(@RequestBody final Collection collection,
			@PathVariable final long collectionId) {
		collectionService.updateCollection(collection, collectionId);
	}

	@RequestMapping(path = "/{collectionId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCollectionFromDatabase(@PathVariable final long collectionId) {
		collectionService.deleteCollection(collectionId);
	}

	public CollectionService getCollectionService() {
		return collectionService;
	}

	public void setCollectionService(CollectionService collectionService) {
		this.collectionService = collectionService;
	}

}
