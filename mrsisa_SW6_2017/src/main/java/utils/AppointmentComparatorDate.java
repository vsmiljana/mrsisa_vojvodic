package utils;

import java.util.Comparator;

import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentDto;

public class AppointmentComparatorDate implements Comparator<AppointmentDto>{


		@Override
		public int compare(AppointmentDto o1, AppointmentDto o2) {
			// TODO Auto-generated method stub
			return o1.getDateLong().compareTo(o2.getDateLong());
		}
}
