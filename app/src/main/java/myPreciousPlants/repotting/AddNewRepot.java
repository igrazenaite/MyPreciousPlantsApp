package myPreciousPlants.repotting;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AddNewRepot {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long repotId;
	private String dateOfRepot;
	private String repotInfo;

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
