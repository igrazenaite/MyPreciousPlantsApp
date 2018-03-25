package myPreciousPlants.plant;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class PlantService {

	@Autowired
	private PlantRepository plantRepository;

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

	public void addNewPlant(AddNewPlant newPlant) {
		Plant plant = new Plant();
		// plnt.setImageURL(plant.getImageURL());
		plant.setName(newPlant.getName());
		plant.setPrice(newPlant.getPrice());
		plant.setDateOfPurchase(newPlant.getDateOfPurchase());
		plant.setPlaceOfPurchase(newPlant.getPlaceOfPurchase());
		plant.setDescription(newPlant.getDescription());
		plant.setDateOfRepot(newPlant.getDateOfRepot());
		plant.setRepotInfo(newPlant.getRepotInfo());
		plant.setDateOfBloom(newPlant.getDateOfBloom());
		plant.setBloomInfo(newPlant.getBloomInfo());
		plant.setNotes(newPlant.getNotes());
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
		plnt.setDateOfRepot(plant.getDateOfRepot());
		plnt.setRepotInfo(plant.getRepotInfo());
		plnt.setDateOfBloom(plant.getDateOfBloom());
		plnt.setBloomInfo(plant.getBloomInfo());
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

}
