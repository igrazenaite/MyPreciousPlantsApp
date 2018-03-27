package myPreciousPlants.blooming;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloomingRepository extends JpaRepository<Blooming, Long> {

	Blooming findByBloomingId(long bloomingId);

}
