package myPreciousPlants.repotting;

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
public class Repot {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long repotId;
	private String dateOfRepot;
	private String repotInfo;

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

	public long getRepotId() {
		return repotId;
	}

	public void setRepotId(long repotId) {
		this.repotId = repotId;
	}

	public String getDateOfRepot() {
		return dateOfRepot;
	}

	public void setDateOfRepot(String dateOfRepot) {
		this.dateOfRepot = dateOfRepot;
	}

	public String getRepotInfo() {
		return repotInfo;
	}

	public void setRepotInfo(String repotInfo) {
		this.repotInfo = repotInfo;
	}

}
