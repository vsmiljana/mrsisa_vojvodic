--insert into public.person(id, name, pass) values (16, 'jovana', 'lozinka');

--insert into clinical_center(id, name) values (1, 'Smiljana Vojvodic Clinical Center');

--update patient
--set clinical_center_id = 1;
/*
--INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (10, 'Stephen Av. 30', 'Los Angeles', 'USA', 'We provide services of...', 'Clinic for Internal Medicine', 1);

--	INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (11, 'Jefferson St. 2', 'San Francisco', 'USA', 'We provide services of...', 'Clinic for Ophthalmology and ORL', 1);

--	INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (12, 'Bailey St. 118', 'Los Angeles', 'USA', 'We provide services of...', 'Family Medicine Clinic', 1);
*/

	/*
INSERT INTO public.doctor(id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (110, 'Larchmont Blvd 110', 'Los Angeles', 'USA', 'd_matthew@gmail.com','Matthew', 'Fisher', 'password', '5551111', '110110', 10, 16, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (111, 'Miller St 20', 'San Francisco', 'USA', 'd_richard@gmail.com','Richard', 'Pines', 'password', '5551111', '111111', 9, 17, 11);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (112, 'Santa Fe Ave 4', 'Los Angeles', 'USA', 'd_helen@gmail.com','Helen', 'Blunt', 'password', '5551111', '112112', 9, 12, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (113, 'Balboa Blvd 113', 'Los Angeles', 'USA', 'd_catharine@gmail.com','Catharine', 'Evans', 'password', '5551111', '113113', 8, 16, 10);

	*/

--ALTER TABLE appointment_type
--ALTER COLUMN duration double;

/*
INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (1, 30, 'Gastroenterology', 120);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (4, 30, 'Hematology', 120);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (2, 30, 'Family Medicine', 80);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (3, 45, 'Orthopedy', 100);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (5, 60, 'Physical Therapy', 150);
*/	


/*
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 110);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 111);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (4, 110);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (4, 111);
	
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (2, 112);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (3, 113);	

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (5, 113);	
*/

/*
delete from appointment a where a.id=1;
delete from appointment a where a.id=2;

INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1, TO_DATE('17/12/2020', 'DD/MM/YYYY'), 10, 11, 1, 10, 110, null, null);


INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (2, TO_DATE('18/12/2020', 'DD/MM/YYYY'), 10, 11, 4, 10, 110, null, null);
*/
/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (4, TO_DATE('21/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 10, 110, null, null);

INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (5, TO_DATE('22/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/

/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (6, TO_DATE('24/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/
update appointment set start=600;
update appointment set ends=660;
update appointment set patient_id=null where id=1 or id=2 or id=3;
	
--INSERT INTO patient(
--	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, clinical_center_id, medical_record_id)
--	VALUES (1000, 'Street 24', 'Washington D.C.', 'USA', 'thomas@gmail.com', 'Thomas', 'Pierce', 'password', '0651234567', '12313231', null, null);