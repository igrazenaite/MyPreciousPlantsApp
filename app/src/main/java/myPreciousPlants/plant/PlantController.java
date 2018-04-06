package myPreciousPlants.plant;

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

@RestController
@RequestMapping(value = "/collection")
@CrossOrigin(origins = "*")
public class PlantController {

	Logger logger = Logger.getLogger(PlantController.class);

	@Autowired
	private PlantService plantService;

	// gets all plants
	@RequestMapping(method = RequestMethod.GET)
	public List<PlantForClient> giveAllPlants() {
		logger.info("All plants received");
		return getPlantService().receiveAllPlants();
	}

	// gets single plant by id
	@RequestMapping(value = "/{plantId}", method = RequestMethod.GET)
	public Plant findByPlantId(@PathVariable("plantId") final long plantId) {
		logger.info("Plant number " + plantId + " found");
		return getPlantService().receiveOnePlant(plantId);
	}

	// adds new plant
	@RequestMapping(value = "/addNewPlant", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPlant(@RequestBody final AddNewPlant newPlant, long collectionId) {
		logger.info("New plant created: " + newPlant);
		plantService.addNewPlant(newPlant, collectionId);
	}

	// updates existing plant
	@RequestMapping(path = "/update/{plantId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPlant(@RequestBody final Plant plant, @PathVariable final Long plantId) {
		logger.info("Plant info updated");
		plantService.updatePlant(plant, plantId);
	}

	// deletes plant from database
	@RequestMapping(path = "/delete/{plantId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletePlantFromDatabase(@PathVariable final Long plantId) {
		logger.info("Plant No. " + plantId + " deleted");
		plantService.deletePlant(plantId);
	}

	public PlantService getPlantService() {
		return plantService;
	}

	public void setPlantService(PlantService plantService) {
		this.plantService = plantService;
	}

}
