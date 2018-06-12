package myPreciousPlants.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import myPreciousPlants.blooming.AddNewBlooming;
import myPreciousPlants.blooming.Blooming;
import myPreciousPlants.blooming.BloomingForClient;
import myPreciousPlants.plant.Plant;
import myPreciousPlants.repositories.BloomingRepository;
import myPreciousPlants.repositories.PlantRepository;

@Transactional
@Service
public class BloomingService {

	@Autowired
	private BloomingRepository bloomingRepository;

	@Autowired
	private PlantRepository plantRepository;

	public List<BloomingForClient> receiveAllBloomings() {
		List<Blooming> bloomingsFromDatabase = getBloomingRepository().findAll();
		List<BloomingForClient> bloomingsForClient = bloomingsFromDatabase.stream().map((blooming) -> {
			BloomingForClient bfc = new BloomingForClient();
			bfc.setBloomingId(blooming.getBloomingId());
			bfc.setDateOfBloom(blooming.getDateOfBloom());
			bfc.setBloomInfo(blooming.getBloomInfo());
			return bfc;
		}).collect(Collectors.toList());
		return bloomingsForClient;
	}

	public Blooming receiveOneBlooming(long bloomingId) {
		Blooming blooming = bloomingRepository.findByBloomingId(bloomingId);
		return blooming;
	}

	public void addNewBlooming(AddNewBlooming newBlooming, long plantId) {
		Blooming blooming = new Blooming();
		blooming.setDateOfBloom(newBlooming.getDateOfBloom());
		blooming.setBloomInfo(newBlooming.getBloomInfo());
		Plant plant = plantRepository.findByPlantId(plantId);
		blooming.setPlant(plant);
		bloomingRepository.save(blooming);
	}

	public void updateBlooming(Blooming blooming, Long bloomingId) {
		Blooming bloom = bloomingRepository.findOne(bloomingId);
		bloom.setDateOfBloom(blooming.getDateOfBloom());
		bloom.setBloomInfo(blooming.getBloomInfo());
		bloomingRepository.save(bloom);
	}

	public void deleteBlooming(Long bloomingId) {
		bloomingRepository.delete(bloomingId);
	}

	public BloomingRepository getBloomingRepository() {
		return bloomingRepository;
	}

	public void setBloomingRepository(BloomingRepository bloomingRepository) {
		this.bloomingRepository = bloomingRepository;
	}
}
