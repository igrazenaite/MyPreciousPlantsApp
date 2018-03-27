package myPreciousPlants.repotting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepottingRepository extends JpaRepository<Repot, Long> {

	Repot findByRepotId(long repotId);

}
