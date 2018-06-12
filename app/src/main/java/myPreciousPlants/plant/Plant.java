package myPreciousPlants.plant;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import myPreciousPlants.blooming.Blooming;
import myPreciousPlants.collection.Collection;
import myPreciousPlants.repotting.Repot;

@Entity
public class Plant {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private long plantId;
	private String plantLabel;
	// private String imageUrl;
	private String name;
	private String price;
	private String dateOfPurchase;
	private String placeOfPurchase;
	private String description;
	private String notes;

	@JsonBackReference(value = "plant")
	@OneToMany(mappedBy = "plant")
	private List<Repot> repottingsList;

	@JsonBackReference(value = "plant")
	@OneToMany(mappedBy = "plant")
	private List<Blooming> bloomingsList;

	@ManyToOne
	@JsonManagedReference(value = "collectionId")
	@JoinColumn(name = "collectionId")
	private Collection collection;

	public Collection getCollection() {
		return collection;
	}

	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	public List<Repot> getRepottings() {
		return repottingsList;
	}

	public void setRepottings(List<Repot> repottingsList) {
		this.repottingsList = repottingsList;
	}

	public List<Blooming> getBloomings() {
		return bloomingsList;
	}

	public void setBloomings(List<Blooming> bloomingsList) {
		this.bloomingsList = bloomingsList;
	}

	public String getDateOfPurchase() {
		return dateOfPurchase;
	}

	public void setDateOfPurchase(String dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}

	public String getPlaceOfPurchase() {
		return placeOfPurchase;
	}

	public void setPlaceOfPurchase(String placeOfPurchase) {
		this.placeOfPurchase = placeOfPurchase;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public long getPlantId() {
		return plantId;
	}

	public void setPlantId(long plantId) {
		this.plantId = plantId;
	}

	public String getPlantLabel() {
		return plantLabel;
	}

	public void setPlantLabel(String plantLabel) {
		this.plantLabel = plantLabel;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	// public String getImageUrl() {
	// return imageUrl;
	// }
	//
	// public void setImageUrl(String imageUrl) {
	// this.imageUrl = imageUrl;
	// }

}
