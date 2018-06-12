package myPreciousPlants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myPreciousPlants.repotting.Repot;

@Repository
public interface RepottingRepository extends JpaRepository<Repot, Long> {

	Repot findByRepotId(long repotId);

}
