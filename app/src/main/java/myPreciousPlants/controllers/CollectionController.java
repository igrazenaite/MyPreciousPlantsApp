package myPreciousPlants.controllers;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import myPreciousPlants.collection.AddNewCollection;
import myPreciousPlants.collection.Collection;
import myPreciousPlants.collection.CollectionForClient;
import myPreciousPlants.services.CollectionService;

@RestController
@RequestMapping(value = "/collections")
@CrossOrigin(origins = "*")
public class CollectionController {

	Logger logger = Logger.getLogger(CollectionController.class);

	@Autowired
	private CollectionService collectionService;

	// gets all collections
	@RequestMapping(method = RequestMethod.GET)
	public List<CollectionForClient> giveAllCollections() {
		logger.info("All collections received");
		return getCollectionService().receiveAllCollections();
	}

	// gets single collection by id
	@RequestMapping(value = "/{collectionId}", method = RequestMethod.GET)
	public Collection findByCollectionId(@PathVariable("collectionId") final long collectionId) {
		logger.info("Collection number " + collectionId + " found");
		return getCollectionService().receiveOneCollection(collectionId);
	}

	// adds new collection to database
	@RequestMapping(value = "/addNewCollection", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createNewCollection(@RequestBody final AddNewCollection newCollection) {
		logger.info("New collection created");
		collectionService.addNewCollection(newCollection);
	}

	// updates existing collection
	@RequestMapping(path = "/update/{collectionId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingCollection(@RequestBody final Collection collection,
			@PathVariable final long collectionId) {
		logger.info("Collection updated");
		collectionService.updateCollection(collection, collectionId);
	}

	// deletes collection from database
	@RequestMapping(path = "/delete/{collectionId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCollectionFromDatabase(@PathVariable final long collectionId) {
		logger.info("Collection No. " + collectionId + " deleted");
		collectionService.deleteCollection(collectionId);
	}

	public CollectionService getCollectionService() {
		return collectionService;
	}

	public void setCollectionService(CollectionService collectionService) {
		this.collectionService = collectionService;
	}

}
