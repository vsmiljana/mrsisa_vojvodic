package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class RatingDto {

	private Long id;
	private Integer rating;
	
	public RatingDto() {}
	
	public RatingDto(Long id, Integer rating) {
		super();
		this.id = id;
		this.rating = rating;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	
	
}
