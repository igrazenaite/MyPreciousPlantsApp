package myPreciousPlants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myPreciousPlants.collection.Collection;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {

	Collection findByCollectionId(long collectionId);
}
