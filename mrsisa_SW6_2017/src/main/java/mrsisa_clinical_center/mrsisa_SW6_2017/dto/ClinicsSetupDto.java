package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.ArrayList;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;

public class ClinicsSetupDto {
	
	private ArrayList<ClinicDto> clinics;
	private ArrayList<String> appointmentTypes; // for select
	
	
	public ClinicsSetupDto() {
		super();
	}


	public ClinicsSetupDto(ArrayList<ClinicDto> clinics, ArrayList<String> appointmentTypes) {
		super();
		this.clinics = clinics;
		this.appointmentTypes = appointmentTypes;
	}


	public ArrayList<ClinicDto> getClinics() {
		return clinics;
	}


	public void setClinics(ArrayList<ClinicDto> clinics) {
		this.clinics = clinics;
	}


	public ArrayList<String> getAppointmentTypes() {
		return appointmentTypes;
	}


	public void setAppointmentTypes(ArrayList<String> appointmentTypes) {
		this.appointmentTypes = appointmentTypes;
	}
	
	
	
}
