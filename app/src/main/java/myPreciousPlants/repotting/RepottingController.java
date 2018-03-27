package myPreciousPlants.repotting;

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
public class RepottingController {

	@Autowired
	private RepottingService repottingService;

	@RequestMapping(method = RequestMethod.GET)
	public List<RepotForClient> giveAllRepots() {
		return getRepottingService().receiveAllRepottings();
	}

	@RequestMapping(value = "/{repotId}", method = RequestMethod.GET)
	public Repot findByRepotId(@PathVariable("repotId") final long repotId) {
		return getRepottingService().receiveOneRepot(repotId);
	}

	@RequestMapping(value = "/addNewRepot", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createRepot(@RequestBody final AddNewRepot newRepot, long plantId) {
		repottingService.addNewRepot(newRepot, plantId);
	}

	@RequestMapping(path = "/update/{repotId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingRepot(@RequestBody final Repot repot, @PathVariable final long repotId) {
		repottingService.updateRepot(repot, repotId);
	}

	@RequestMapping(path = "/{repotId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteRepotFromDatabase(@PathVariable final long repotId) {
		repottingService.deleteRepot(repotId);
	}

	public RepottingService getRepottingService() {
		return repottingService;
	}

	public void setRepottingService(RepottingService repottingService) {
		this.repottingService = repottingService;
	}
}
