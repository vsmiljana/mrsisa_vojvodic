package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;

public class SearchClinicsResultDto {

	private AppointmentDto searchedAppointment;
	private List<ClinicDto> foundClinics;
	
	public SearchClinicsResultDto() {
		super();
	}
	public SearchClinicsResultDto(AppointmentDto searchedAppointment, List<ClinicDto> foundClinics) {
		super();
		this.searchedAppointment = searchedAppointment;
		this.foundClinics = foundClinics;
	}
	public AppointmentDto getSearchedAppointment() {
		return searchedAppointment;
	}
	public void setSearchedAppointment(AppointmentDto searchedAppointment) {
		this.searchedAppointment = searchedAppointment;
	}
	public List<ClinicDto> getFoundClinics() {
		return foundClinics;
	}
	public void setFoundClinics(List<ClinicDto> foundClinics) {
		this.foundClinics = foundClinics;
	}
	
	
	
}
