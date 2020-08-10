package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class AppointmentTimeDto {

	private Long start;
	private Long end;
	
	public AppointmentTimeDto() {}
	
	public AppointmentTimeDto(Long start, Long end) {
		super();
		this.start = start;
		this.end = end;
	}

	public Long getStart() {
		return start;
	}
	public void setStart(Long start) {
		this.start = start;
	}
	public Long getEnd() {
		return end;
	}
	public void setEnd(Long end) {
		this.end = end;
	}
}
