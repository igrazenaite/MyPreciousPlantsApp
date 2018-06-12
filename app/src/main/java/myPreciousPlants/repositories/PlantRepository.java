package myPreciousPlants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myPreciousPlants.plant.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {

	Plant findByPlantId(long plantId);

}
