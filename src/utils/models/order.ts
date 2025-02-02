export interface BookingResponse {
	data: Order[];
	page_info: PageInfo;
}

export interface Order {
	id: string;
	status: string;
	user_id: string;
	trip_id: any;
	product_id: string;
	company_id: string;
	participants: Participant[];
	created_at: string;
	total_price: number;
	payable_price: number;
	discount_amount: any;
	deleted_at: any;
	ag_state_version: number;
	trip_data: TripData;
	product_data: ProductData;
	parent: Parent2;
	payment_due_date: string;
	advance_payment_due_date: string;
	payment_status: string;
	advance_payment_status: string;
	advance_payment_price: number;
	start_date: string;
	end_date: string;
	base_price_per_person: number;
	product_name: string;
	trip_name: string;
	user_name: string;
	company_name: string;
	type: string;
	rejection_reason: any;
	rejection_description: any;
	original_total_price: number;
	original_advance_payment: number;
	trip_length_days: any;
	participants_count: any;
	min_age: any;
	max_age: any;
	destination_province: any;
	destination_description: any;
	optional_trips: any;
	inquiry_description: any;
	month: any;
	departure_date: any;
	departure_time: any;
	departure_address: any;
	departure_remarks: any;
	return_date: any;
	return_time: any;
	return_address: any;
	return_remarks: any;
	free_places_count: any;
	transport_type: any;
	transport_vehicle: any;
	transport_price_per_person: any;
	accommodation_place_id: any;
	accommodation_price_per_person: any;
	places: any;
	inquiry_id: any;
	quotation_id: any;
	departure_place: any;
	payment_mode: any;
	product_type: any;
	customer_phone: any;
	customer_email: any;
	initial_payment_amount: any;
	paid_amount: any;
	updated_at: any;
	departure_place_price_per_pax: any;
	departure_place_price_total: any;
	advance_paid_at: any;
	fully_paid_at: any;
	payments: any;
	liveness_status: string;
	currency: string;
	is_fee_paid: boolean;
	promo_code_id: any;
	influencer_name: any;
	trip: any;
	product: any;
	company: any;
	type_label: string;
	status_label: string;
}

export interface Participant {
	id: string;
	city: string;
	type: string;
	email: any;
	pesel: string;
	phone: any;
	street: string;
	illness: boolean;
	alergies: boolean;
	postcode: string;
	province?: string;
	vaccines?: any[];
	diagnosis: boolean;
	full_name: string;
	is_delete: number;
	last_name: string;
	medicines: boolean;
	parent_id: any;
	surgeries: boolean;
	birth_date: string;
	disability: boolean;
	first_name: string;
	house_number: string;
	maladjustment?: boolean;
	owner_user_id: string;
	street_number: string;
	medicines_dose: any;
	medicines_name: any;
	surgeries_date: any;
	medicines_cause: any;
	surgeries_cause: any;
	ag_state_version: number;
	illness_symptoms: any;
	alergies_symptoms: any;
	other_information: any;
	diagnosis_symptoms: any;
	illness_description: any;
	alergies_description: any;
	diagnosis_description: any;
	surgeries_desctiption: any;
	disability_description: any;
	maladjustment_description: any;
}

export interface TripData {
	id: string;
	name: string;
	status: string;
	advance: number;
	company: Company;
	max_age: number;
	min_age: number;
	product: Product;
	bookings: Booking[];
	end_date: string;
	max_count: number;
	min_count: number;
	company_id: string;
	created_at: string;
	full_price: number;
	is_deleted: boolean;
	product_id: string;
	start_date: string;
	archived_at: any;
	is_archived: boolean;
	product_type: string;
	available_spots: any;
	ag_state_version: number;
	reservation_price: any;
	advance_conditions: string;
	reservation_min_days: any;
	discounts_description: string;
	full_price_conditions: string;
}

export interface Company {
	id: string;
	name: string;
}

export interface Product {
	id: string;
	name: string;
	type: string;
}

export interface Booking {
	id: string;
	parent: Parent;
	status: string;
	trip_id: string;
	user_id: string;
	created_at: string;
	total_price: number;
	participants: Participant2[];
}

export interface Parent {
	id: string;
	city: string;
	type: string;
	email: string;
	pesel: any;
	phone: string;
	street: string;
	illness: boolean;
	alergies: boolean;
	postcode: string;
	province: string;
	vaccines: any;
	diagnosis: boolean;
	full_name: string;
	is_delete: number;
	last_name: string;
	medicines: boolean;
	parent_id: any;
	surgeries: boolean;
	birth_date: any;
	disability: boolean;
	first_name: string;
	house_number: string;
	maladjustment: any;
	owner_user_id: string;
	street_number: string;
	medicines_dose: any;
	medicines_name: any;
	surgeries_date: any;
	medicines_cause: any;
	surgeries_cause: any;
	ag_state_version: number;
	illness_symptoms: any;
	alergies_symptoms: any;
	other_information: any;
	diagnosis_symptoms: any;
	illness_description: any;
	alergies_description: any;
	diagnosis_description: any;
	surgeries_desctiption: any;
	disability_description: any;
	maladjustment_description: any;
}

export interface Participant2 {
	id: string;
	city: string;
	type: string;
	email: any;
	pesel: string;
	phone: any;
	street: string;
	illness: boolean;
	alergies: boolean;
	postcode: string;
	province?: string;
	vaccines?: any[];
	diagnosis: boolean;
	full_name: string;
	is_delete: number;
	last_name: string;
	medicines: boolean;
	parent_id: any;
	surgeries: boolean;
	birth_date: string;
	disability: boolean;
	first_name: string;
	house_number: string;
	maladjustment?: boolean;
	owner_user_id: string;
	street_number: string;
	medicines_dose: any;
	medicines_name: any;
	surgeries_date: any;
	medicines_cause: any;
	surgeries_cause: any;
	ag_state_version: number;
	illness_symptoms: any;
	alergies_symptoms: any;
	other_information: any;
	diagnosis_symptoms: any;
	illness_description: any;
	alergies_description: any;
	diagnosis_description: any;
	surgeries_desctiption: any;
	disability_description: any;
	maladjustment_description: any;
}

export interface ProductData {
	id: string;
	name: string;
	type: string;
	files: any;
	media: any;
	trips: Trip[];
	status: string;
	company: Company2;
	max_age: any;
	min_age: any;
	location: Location;
	food_type: any;
	is_delete: boolean;
	trip_type: any;
	attributes: any;
	company_id: string;
	created_at: string;
	food_vegan: any;
	is_archive: boolean;
	main_photo: MainPhoto;
	archived_at: any;
	description: string;
	location_id: any;
	country_code: string;
	country_name: string;
	pickup_route: any;
	published_at: string;
	admin_comment: any;
	category_code: string;
	file_sections: any;
	location_name: any;
	transport_type: string;
	food_vegetarian: any;
	transport_route: any;
	ag_state_version: number;
	food_description: any;
	subcategory_code: string;
	admin_approved_at: any;
	transport_vehicle: string;
	additional_info_text: any;
	conditions_text_long: any;
	schedule_description: string;
	amenities_description: string;
	conditions_text_short: any;
	insurance_description: string;
	transport_description: string;
	admin_show_on_home_page: any;
	participation_conditions: string;
	participation_description: string;
	admin_promote_on_home_page: any;
}

export interface Trip {
	id: string;
	name: string;
	status: string;
	advance: number;
	max_age: number;
	min_age: number;
	end_date: string;
	max_count: number;
	min_count: number;
	company_id: string;
	created_at: string;
	full_price: number;
	is_deleted: boolean;
	product_id: string;
	start_date: string;
	archived_at: any;
	is_archived: boolean;
	product_type: string;
	available_spots: any;
	ag_state_version: number;
	reservation_price: any;
	advance_conditions: string;
	reservation_min_days: any;
	discounts_description: string;
	full_price_conditions: string;
}

export interface Company2 {
	id: string;
	name: string;
	fc_website_url: string;
	logo_image_url: any;
}

export interface Location {
	city: string;
	street: string;
	province: string;
	post_code: string;
	room_number: string;
	house_number: string;
}

export interface MainPhoto {
	id: string;
	url: string;
	width: number;
	height: number;
	provider: string;
	providerData: ProviderData;
}

export interface ProviderData {
	cloudinaryEtag: string;
	cloudinaryPublicId: string;
	cloudinarySignature: string;
}

export interface Parent2 {
	id: string;
	city: string;
	type: string;
	email: string;
	pesel: any;
	phone: string;
	street: string;
	illness: boolean;
	alergies: boolean;
	postcode: string;
	province: string;
	vaccines: any;
	diagnosis: boolean;
	full_name: string;
	is_delete: number;
	last_name: string;
	medicines: boolean;
	parent_id: any;
	surgeries: boolean;
	birth_date: any;
	disability: boolean;
	first_name: string;
	house_number: string;
	maladjustment: any;
	owner_user_id: string;
	street_number: string;
	medicines_dose: any;
	medicines_name: any;
	surgeries_date: any;
	medicines_cause: any;
	surgeries_cause: any;
	ag_state_version: number;
	illness_symptoms: any;
	alergies_symptoms: any;
	other_information: any;
	diagnosis_symptoms: any;
	illness_description: any;
	alergies_description: any;
	diagnosis_description: any;
	surgeries_desctiption: any;
	disability_description: any;
	maladjustment_description: any;
}

export interface PageInfo {
	has_more: boolean;
	total_items: number;
	total_pages: number;
}
