package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;
public class SearchDoctorsResultDto {
	
	private AppointmentDto searchedAppointment;
	private ClinicDto clinic;
	private List<DoctorDto> doctors;
	
	public SearchDoctorsResultDto() {
		super();
	}

	public SearchDoctorsResultDto(AppointmentDto searchedAppointment, ClinicDto clinic, List<DoctorDto> doctors) {
		super();
		this.searchedAppointment = searchedAppointment;
		this.clinic = clinic;
		this.doctors = doctors;
	}

	public SearchDoctorsResultDto(ClinicDto clinic, List<DoctorDto> doctors) {
		this.clinic = clinic;
		this.doctors = doctors;
	}

	public AppointmentDto getSearchedAppointment() {
		return searchedAppointment;
	}

	public void setSearchedAppointment(AppointmentDto searchedAppointment) {
		this.searchedAppointment = searchedAppointment;
	}

	public ClinicDto getClinic() {
		return clinic;
	}

	public void setClinic(ClinicDto clinic) {
		this.clinic = clinic;
	}

	public List<DoctorDto> getDoctors() {
		return doctors;
	}

	public void setDoctors(List<DoctorDto> doctors) {
		this.doctors = doctors;
	}
	
	
}
