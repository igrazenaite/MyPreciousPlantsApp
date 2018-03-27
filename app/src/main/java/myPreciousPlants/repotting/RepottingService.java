package myPreciousPlants.repotting;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import myPreciousPlants.plant.Plant;
import myPreciousPlants.plant.PlantRepository;

@Transactional
@Service
public class RepottingService {

	@Autowired
	private RepottingRepository repottingRepository;

	@Autowired
	private PlantRepository plantRepository;

	public List<RepotForClient> receiveAllRepottings() {
		List<Repot> repotsFromDatabase = getRepottingRepository().findAll();
		List<RepotForClient> repottingsForClient = repotsFromDatabase.stream().map((repotting) -> {
			RepotForClient rpfc = new RepotForClient();
			rpfc.setRepotId(repotting.getRepotId());
			rpfc.setDateOfRepot(repotting.getDateOfRepot());
			rpfc.setRepotInfo(repotting.getRepotInfo());
			return rpfc;
		}).collect(Collectors.toList());
		return repottingsForClient;
	}

	public Repot receiveOneRepot(long repotId) {
		Repot repot = repottingRepository.findByRepotId(repotId);
		return repot;
	}

	public void addNewRepot(AddNewRepot newRepot, long plantId) {
		Repot repot = new Repot();
		repot.setDateOfRepot(newRepot.getDateOfRepot());
		repot.setRepotInfo(newRepot.getRepotInfo());
		Plant plant = plantRepository.findByPlantId(plantId);
		repot.setPlant(plant);
		repottingRepository.save(repot);
	}

	public void updateRepot(Repot updrepot, Long repotId) {
		Repot repot = repottingRepository.findOne(repotId);
		repot.setDateOfRepot(updrepot.getDateOfRepot());
		repot.setRepotInfo(updrepot.getRepotInfo());
		repottingRepository.save(repot);
	}

	public void deleteRepot(Long repotId) {
		repottingRepository.delete(repotId);
	}

	public RepottingRepository getRepottingRepository() {
		return repottingRepository;
	}

	public void setRepottingRepository(RepottingRepository repottingRepository) {
		this.repottingRepository = repottingRepository;
	}

	public PlantRepository getPlantRepository() {
		return plantRepository;
	}

	public void setPlantRepository(PlantRepository plantRepository) {
		this.plantRepository = plantRepository;
	}

}
