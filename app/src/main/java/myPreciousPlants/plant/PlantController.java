package myPreciousPlants.plant;

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
@RequestMapping(value = "/collection")
@CrossOrigin(origins = "*")
public class PlantController {

	@Autowired
	private PlantService plantService;

	@RequestMapping(method = RequestMethod.GET)
	public List<PlantForClient> giveAllPlants() {
		return getPlantService().receiveAllPlants();
	}

	@RequestMapping(value = "/{plantId}", method = RequestMethod.GET)
	public Plant findByPlantId(@PathVariable("plantId") final long plantId) {
		return getPlantService().receiveOnePlant(plantId);
	}

	@RequestMapping(value = "/addNewPlant", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPlant(@RequestBody final AddNewPlant newPlant, long collectionId) {
		plantService.addNewPlant(newPlant, collectionId);
	}

	@RequestMapping(path = "/update/{plantId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPlant(@RequestBody final Plant plant, @PathVariable final Long plantId) {
		plantService.updatePlant(plant, plantId);
	}

	@RequestMapping(path = "/{plantId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletePlantFromDatabase(@PathVariable final Long plantId) {
		plantService.deletePlant(plantId);
	}

	public PlantService getPlantService() {
		return plantService;
	}

	public void setPlantService(PlantService plantService) {
		this.plantService = plantService;
	}

}
