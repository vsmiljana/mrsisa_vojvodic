package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class AppointmentRegScheduleDto {

	private Long doctorId;
	private String appointmentName;
	private Integer start;
	private Integer ends;
	private Long date;
	
	public AppointmentRegScheduleDto() {}
	
	public AppointmentRegScheduleDto(Long doctorId, String appointmentName, Integer start, Integer ends, Long date) {
		super();
		this.doctorId = doctorId;
		this.appointmentName = appointmentName;
		this.start = start;
		this.ends = ends;
		this.date = date;
	}

	public AppointmentRegScheduleDto(Long doctorId, String appointmentName, Integer start, Long date) {
		super();
		this.doctorId = doctorId;
		this.appointmentName = appointmentName;
		this.start = start;
		this.date = date;
	}

	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}

	public String getAppointmentName() {
		return appointmentName;
	}

	public void setAppointmentName(String appointmentName) {
		this.appointmentName = appointmentName;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public Integer getEnds() {
		return ends;
	}

	public void setEnds(Integer ends) {
		this.ends = ends;
	}

	public Long getDate() {
		return date;
	}

	public void setDate(Long date) {
		this.date = date;
	}
	
}
