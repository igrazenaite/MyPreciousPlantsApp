package myPreciousPlants.controllers;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import myPreciousPlants.repotting.AddNewRepot;
import myPreciousPlants.repotting.Repot;
import myPreciousPlants.repotting.RepotForClient;
import myPreciousPlants.services.RepottingService;

@RestController
@RequestMapping(value = "/plant")
@CrossOrigin(origins = "*")
@Transactional
public class RepottingController {

	Logger logger = Logger.getLogger(RepottingController.class);

	@Autowired
	private RepottingService repottingService;

	// gets all repottings
	@RequestMapping(value = "/repottings", method = RequestMethod.GET)
	public List<RepotForClient> giveAllRepots() {
		logger.info("All repottings received");
		return getRepottingService().receiveAllRepottings();
	}

	// gets single repotting by id
	@RequestMapping(value = "/{repotId}", method = RequestMethod.GET)
	public Repot findByRepotId(@PathVariable("repotId") final long repotId) {
		logger.info("Repotting number " + repotId + " found");
		return getRepottingService().receiveOneRepot(repotId);
	}

	@RequestMapping(value = "/addNewRepot", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createRepot(@RequestBody final AddNewRepot newRepot, long plantId) {
		logger.info("New repotting created");
		repottingService.addNewRepot(newRepot, plantId);
	}

	// updates existing repotting
	@RequestMapping(path = "/update/{repotId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingRepot(@RequestBody final Repot repot, @PathVariable final long repotId) {
		logger.info("Repotting updated");
		repottingService.updateRepot(repot, repotId);
	}

	// deletes repotting from database
	@RequestMapping(path = "/delete/{repotId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteRepotFromDatabase(@PathVariable final long repotId) {
		logger.info("Repotting No. " + repotId + " deleted");
		repottingService.deleteRepot(repotId);
	}

	public RepottingService getRepottingService() {
		return repottingService;
	}

	public void setRepottingService(RepottingService repottingService) {
		this.repottingService = repottingService;
	}
}
