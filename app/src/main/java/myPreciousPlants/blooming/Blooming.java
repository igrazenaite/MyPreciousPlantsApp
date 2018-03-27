package myPreciousPlants.blooming;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import myPreciousPlants.plant.Plant;

@Entity
public class Blooming {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long bloomingId;
	private String dateOfBloom;
	private String bloomInfo;

	@ManyToOne
	@JsonManagedReference(value = "plantId")
	@JoinColumn(name = "plantId")
	private Plant plant;

	public Plant getPlant() {
		return plant;
	}

	public void setPlant(Plant plant) {
		this.plant = plant;
	}

	public long getBloomingId() {
		return bloomingId;
	}

	public void setBloomingId(long bloomingId) {
		this.bloomingId = bloomingId;
	}

	public String getDateOfBloom() {
		return dateOfBloom;
	}

	public void setDateOfBloom(String dateOfBloom) {
		this.dateOfBloom = dateOfBloom;
	}

	public String getBloomInfo() {
		return bloomInfo;
	}

	public void setBloomInfo(String bloomInfo) {
		this.bloomInfo = bloomInfo;
	}

}
