package myPreciousPlants.collection;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import myPreciousPlants.plant.Plant;

@Entity
public class Collection {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long collectionId;
	private String collectionName;

	@JsonBackReference(value = "collection")
	@OneToMany(mappedBy = "collection")
	private List<Plant> plantsList;

	public List<Plant> getPlantsList() {
		return plantsList;
	}

	public void setPlantsList(List<Plant> plantsList) {
		this.plantsList = plantsList;
	}

	public long getCollectionId() {
		return collectionId;
	}

	public void setCollectionId(long collectionId) {
		this.collectionId = collectionId;
	}

	public String getCollectionName() {
		return collectionName;
	}

	public void setCollectionName(String collectionName) {
		this.collectionName = collectionName;
	}
}
