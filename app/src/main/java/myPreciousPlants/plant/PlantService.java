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
			pfc.setName(plant.getName());
			pfc.setPrice(plant.getPrice());
			pfc.setDescription(plant.getDescription());
			return pfc;
		}).collect(Collectors.toList());
		return plantsForClient;
	}

	public void addNewPlant(AddNewPlant newPlant) {
		Plant plant = new Plant();
		plant.setName(newPlant.getName());
		plant.setPrice(newPlant.getPrice());
		plant.setDescription(newPlant.getDescription());
		plantRepository.save(plant);

	}

	public PlantRepository getPlantRepository() {
		return plantRepository;
	}

	public void setPlantRepository(PlantRepository plantRepository) {
		this.plantRepository = plantRepository;
	}

}
