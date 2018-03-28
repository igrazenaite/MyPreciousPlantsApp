package myPreciousPlants.blooming;

import java.util.List;

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

@RestController
@RequestMapping(value = "/plant")
@CrossOrigin(origins = "*")
@Transactional
public class BloomingController {

	@Autowired
	private BloomingService bloomingService;

	@RequestMapping(value = "/bloomings", method = RequestMethod.GET)
	public List<BloomingForClient> giveAllBloomings() {
		return getBloomingService().receiveAllBloomings();
	}

	@RequestMapping(value = "/{bloomingId}", method = RequestMethod.GET)
	public Blooming findByBloomingId(@PathVariable("bloomingId") final long bloomingId) {
		return getBloomingService().receiveOneBlooming(bloomingId);
	}

	@RequestMapping(value = "/addNewBlooming", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createBlooming(@RequestBody final AddNewBlooming newBlooming, long plantId) {
		bloomingService.addNewBlooming(newBlooming, plantId);
	}

	@RequestMapping(path = "/update/{bloomingId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingBlooming(@RequestBody final Blooming blooming, @PathVariable final long bloomingId) {
		bloomingService.updateBlooming(blooming, bloomingId);
	}

	@RequestMapping(path = "/{bloomingId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteBloomingFromDatabase(@PathVariable final long bloomingId) {
		bloomingService.deleteBlooming(bloomingId);
	}

	public BloomingService getBloomingService() {
		return bloomingService;
	}

	public void setBloomingService(BloomingService bloomingService) {
		this.bloomingService = bloomingService;
	}

}
