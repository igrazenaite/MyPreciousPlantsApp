package myPreciousPlants.collection;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class CollectionService {

	@Autowired
	private CollectionRepository collectionRepository;

	public List<CollectionForClient> receiveAllCollections() {
		List<Collection> collectionsFromDatabase = getCollectionRepository().findAll();
		List<CollectionForClient> collectionsForClient = collectionsFromDatabase.stream().map((collection) -> {
			CollectionForClient cfc = new CollectionForClient();
			cfc.setCollectionId(collection.getCollectionId());
			cfc.setCollectionName(collection.getCollectionName());
			return cfc;
		}).collect(Collectors.toList());
		return collectionsForClient;
	}

	public Collection receiveOneCollection(long collectionId) {
		Collection collection = collectionRepository.findByCollectionId(collectionId);
		return collection;
	}

	public void addNewCollection(AddNewCollection newCollection) {
		Collection collection = new Collection();
		collection.setCollectionName(newCollection.getCollectionName());
		collectionRepository.save(collection);
	}

	public void updateCollection(Collection collection, Long collectionId) {
		Collection col = collectionRepository.findOne(collectionId);
		col.setCollectionName(collection.getCollectionName());
		collectionRepository.save(col);
	}

	public void deleteCollection(Long collectionId) {
		collectionRepository.delete(collectionId);
	}

	public CollectionRepository getCollectionRepository() {
		return collectionRepository;
	}

	public void setCollectionRepository(CollectionRepository collectionRepository) {
		this.collectionRepository = collectionRepository;
	}

}
