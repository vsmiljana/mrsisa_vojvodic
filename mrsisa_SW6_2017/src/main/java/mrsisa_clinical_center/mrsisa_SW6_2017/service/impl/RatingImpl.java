package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Rating;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.RatingRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.RatingService;

@Service
public class RatingImpl implements RatingService {

	@Autowired
	private RatingRepository rep;

	@Override
	public List<Rating> findAllByClinicId(Long id) {
		// TODO Auto-generated method stub
		return rep.findAllByClinicId(id);
	}
	
}
