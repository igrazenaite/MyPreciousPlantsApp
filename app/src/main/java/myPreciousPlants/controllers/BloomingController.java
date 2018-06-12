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

import myPreciousPlants.blooming.AddNewBlooming;
import myPreciousPlants.blooming.Blooming;
import myPreciousPlants.blooming.BloomingForClient;
import myPreciousPlants.services.BloomingService;

@RestController
@RequestMapping(value = "/plant")
@CrossOrigin(origins = "*")
@Transactional
public class BloomingController {

	Logger logger = Logger.getLogger(BloomingController.class);

	@Autowired
	private BloomingService bloomingService;

	// gets all bloomings
	@RequestMapping(value = "/bloomings", method = RequestMethod.GET)
	public List<BloomingForClient> giveAllBloomings() {
		logger.info("All bloomings received");
		return getBloomingService().receiveAllBloomings();
	}

	// gets single blooming by id
	@RequestMapping(value = "/{bloomingId}", method = RequestMethod.GET)
	public Blooming findByBloomingId(@PathVariable("bloomingId") final long bloomingId) {
		logger.info("Blooming number " + bloomingId + " found");
		return getBloomingService().receiveOneBlooming(bloomingId);
	}

	// adds new blooming
	@RequestMapping(value = "/addNewBlooming", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createBlooming(@RequestBody final AddNewBlooming newBlooming, long plantId) {
		logger.info("New blooming created");
		bloomingService.addNewBlooming(newBlooming, plantId);
	}

	// updates blooming
	@RequestMapping(path = "/update/{bloomingId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingBlooming(@RequestBody final Blooming blooming, @PathVariable final long bloomingId) {
		logger.info("Blooming updated");
		bloomingService.updateBlooming(blooming, bloomingId);
	}

	// deletes blooming
	@RequestMapping(path = "/delete/{bloomingId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteBloomingFromDatabase(@PathVariable final long bloomingId) {
		logger.info("Blooming No. " + bloomingId + " deleted");
		bloomingService.deleteBlooming(bloomingId);
	}

	public BloomingService getBloomingService() {
		return bloomingService;
	}

	public void setBloomingService(BloomingService bloomingService) {
		this.bloomingService = bloomingService;
	}

}
