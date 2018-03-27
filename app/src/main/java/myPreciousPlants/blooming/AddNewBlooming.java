package myPreciousPlants.blooming;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AddNewBlooming {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long bloomingId;
	private String dateOfBloom;
	private String bloomInfo;

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
