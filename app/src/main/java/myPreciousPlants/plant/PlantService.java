package myPreciousPlants.plant;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import myPreciousPlants.collection.Collection;
import myPreciousPlants.collection.CollectionRepository;

@Transactional
@Service
public class PlantService {

	@Autowired
	private PlantRepository plantRepository;

	@Autowired
	private CollectionRepository collectionRepository;

	public List<PlantForClient> receiveAllPlants() {
		List<Plant> plantsFromDatabase = getPlantRepository().findAll();
		List<PlantForClient> plantsForClient = plantsFromDatabase.stream().map((plant) -> {
			PlantForClient pfc = new PlantForClient();
			pfc.setPlantId(plant.getPlantId());
			// plnt.setImageURL(plant.getImageURL());
			pfc.setName(plant.getName());
			pfc.setPrice(plant.getPrice());
			pfc.setDescription(plant.getDescription());
			return pfc;
		}).collect(Collectors.toList());
		return plantsForClient;
	}

	public Plant receiveOnePlant(long plantId) {
		Plant plant = plantRepository.findByPlantId(plantId);
		return plant;
	}

	public void addNewPlant(AddNewPlant newPlant, long collectionId) {
		Plant plant = new Plant();
		// plnt.setImageURL(plant.getImageURL());
		plant.setName(newPlant.getName());
		plant.setPrice(newPlant.getPrice());
		plant.setDateOfPurchase(newPlant.getDateOfPurchase());
		plant.setPlaceOfPurchase(newPlant.getPlaceOfPurchase());
		plant.setDescription(newPlant.getDescription());
		plant.setNotes(newPlant.getNotes());
		Collection collection = collectionRepository.findByCollectionId(collectionId);
		plant.setCollection(collection);
		plantRepository.save(plant);

	}

	public void updatePlant(Plant plant, Long plantId) {
		Plant plnt = plantRepository.findOne(plantId);
		// plnt.setImageURL(plant.getImageURL());
		plnt.setName(plant.getName());
		plnt.setPrice(plant.getPrice());
		plnt.setDateOfPurchase(plant.getDateOfPurchase());
		plnt.setPlaceOfPurchase(plant.getPlaceOfPurchase());
		plnt.setDescription(plant.getDescription());
		plnt.setNotes(plant.getNotes());
		plantRepository.save(plnt);
	}

	public void deletePlant(Long plantId) {
		plantRepository.delete(plantId);
	}

	public PlantRepository getPlantRepository() {
		return plantRepository;
	}

	public void setPlantRepository(PlantRepository plantRepository) {
		this.plantRepository = plantRepository;
	}

	public CollectionRepository getCollectionRepository() {
		return collectionRepository;
	}

	public void setCollectionRepository(CollectionRepository collectionRepository) {
		this.collectionRepository = collectionRepository;
	}

}
