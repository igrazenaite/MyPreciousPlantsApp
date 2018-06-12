package myPreciousPlants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myPreciousPlants.blooming.Blooming;

@Repository
public interface BloomingRepository extends JpaRepository<Blooming, Long> {

	Blooming findByBloomingId(long bloomingId);

}
