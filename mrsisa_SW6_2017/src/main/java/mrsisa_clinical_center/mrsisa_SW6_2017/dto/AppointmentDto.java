package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.Date;

public class AppointmentDto {

	private Long id;
	private Date date;
	private int start;
	private int end;
	private String doctor;
	private String appointmentName;
	private Double price;
	private String clinicName;
	private String clinicAddress;
	private Long dateLong;
	
	
	public AppointmentDto() {}
	
	public AppointmentDto(Long id, Date date, int start, int end, String doctor, String appointmentName, Double price) {
		super();
		this.id = id;
		this.date = date;
		this.start = start;
		this.end = end;
		this.doctor = doctor;
		this.appointmentName = appointmentName;
		this.price = price;
	}
	
	

	public AppointmentDto(Long id, Date date, int start, int end, String doctor, String appointmentName, Double price,
			String clinicName, String clinicAddress) {
		super();
		this.id = id;
		this.date = date;
		this.start = start;
		this.end = end;
		this.doctor = doctor;
		this.appointmentName = appointmentName;
		this.price = price;
		this.clinicName = clinicName;
		this.clinicAddress = clinicAddress;
	}

	public AppointmentDto(Long id, Long dateLong, int start, int end, String doctor, String appointmentName, Double price,
			String clinicName, String clinicAddress) {
		super();
		this.id = id;
		this.dateLong = dateLong;
		this.start = start;
		this.end = end;
		this.doctor = doctor;
		this.appointmentName = appointmentName;
		this.price = price;
		this.clinicName = clinicName;
		this.clinicAddress = clinicAddress;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}

	public String getAppointmentName() {
		return appointmentName;
	}

	public void setAppointmentName(String appointmentName) {
		this.appointmentName = appointmentName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getClinicName() {
		return clinicName;
	}

	public void setClinicName(String clinicName) {
		this.clinicName = clinicName;
	}

	public String getClinicAddress() {
		return clinicAddress;
	}

	public void setClinicAddress(String clinicAddress) {
		this.clinicAddress = clinicAddress;
	}

	public Long getDateLong() {
		return dateLong;
	}

	public void setDateLong(Long dateLong) {
		this.dateLong = dateLong;
	}

}
