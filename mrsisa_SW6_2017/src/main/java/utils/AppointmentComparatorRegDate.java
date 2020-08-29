package utils;

import java.util.Comparator;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;

public class AppointmentComparatorRegDate implements Comparator<Appointment> {

	@Override
	public int compare(Appointment o1, Appointment o2) {
		return o2.getDate().compareTo(o1.getDate());
	}

}
