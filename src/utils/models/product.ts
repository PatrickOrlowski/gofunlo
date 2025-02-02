export interface ProductsResponse {
	data: Product[];
	page_info: PageInfo;
}

export interface Product {
	id: string;
	name: string;
	description: string;
	additional_info_text: any;
	conditions_text_short: any;
	conditions_text_long: any;
	type: string;
	location_id: any;
	is_archive: boolean;
	is_delete: boolean;
	archived_at: any;
	company_id: string;
	attributes: any;
	location: Location;
	created_at: string;
	transport_type?: string;
	transport_vehicle?: string;
	transport_route: any;
	transport_description: any;
	food_type?: string;
	food_description?: string;
	amenities_description: any;
	schedule_description?: string;
	participation_conditions: any;
	participation_description?: string;
	insurance_description?: string;
	trip_type: any;
	status: string;
	main_photo: any;
	media?: Medum[];
	file_sections: any;
	files?: File[];
	location_name: any;
	category_code: any;
	subcategory_code: any;
	food_vegetarian: any;
	food_vegan: any;
	pickup_route: any;
	published_at: any;
	ag_state_version: number;
	admin_approved_at: any;
	admin_show_on_home_page?: boolean;
	admin_promote_on_home_page?: boolean;
	country_code: string;
	country_name: string;
	admin_comment?: string;
	categories: any;
	location_types: any;
	company_name: any;
	search_hints: any;
	tsv: string;
	min_price?: number;
	link: any;
	slug: string;
	company_logo_image_url: any;
	durations: any[];
	schedule?: Schedule[];
	price_description: string;
	price_includes_text: string;
	price_not_includes_text?: string;
	min_age: number;
	max_age: number;
	availability: any;
	places?: Place[];
	insurance_type?: string;
	place_id?: string;
	accommodation_place_id?: string;
	food_diets?: string[];
	discounts_description: any;
	duration_days: any;
	transport_types: any;
	dedicated_trip_caregiver_user_id: string;
	pickup_collection_address: string;
	pickup_collection_date: string;
	pickup_collection_place: string;
	pickup_collection_time?: number;
	pickup_return_address: string;
	pickup_return_date: string;
	pickup_return_place: string;
	pickup_return_time?: number;
	pickup_route_address?: string;
	pickup_route_price?: string;
	name_en?: string;
	description_en?: string;
	food_description_en: any;
	schedule_description_en: any;
	participation_description_en?: string;
	insurance_description_en: any;
	price_description_en?: string;
	price_includes_text_en?: string;
	price_not_includes_text_en?: string;
	object_type: any;
	facility_amenities: any;
	facility: any;
	max_guests: any;
	individual_min_price: any;
	group_min_price: any;
	prepayment: any;
	tourist_tax: any;
	dependent_price: any;
	cancellation_fee: any;
	prepayment_description: any;
	tourist_tax_description: any;
	dependent_price_description: any;
	cancellation_fee_description: any;
	prepayment_description_en: any;
	tourist_tax_description_en: any;
	dependent_price_description_en: any;
	cancellation_fee_description_en: any;
	product_payments_price_description: any;
	product_payments_price_includes_text: any;
	product_payments_price_not_includes_text: any;
	product_payments_discounts_name_1: any;
	product_payments_discounts_value_1: any;
	product_payments_discounts_name_2: any;
	product_payments_discounts_value_2: any;
	own_transport_details: any;
	participants_languages: any;
	product_payments_price_description_en: any;
	product_payments_price_includes_text_en: any;
	product_payments_price_not_includes_text_en: any;
	product_payments_discounts_name_1_en: any;
	product_payments_discounts_name_2_en: any;
	own_transport_details_en: any;
	currency: string;
	company: Company;
	accommodation?: Accommodation;
	dedicated_trip_caregiver_user: DedicatedTripCaregiverUser;
	product_id: string;
	max_price?: number;
	future_trips_count: number;
	all_trips_count: number;
	min_trip_start_date?: string;
	min_trip_end_date?: string;
	max_trip_start_date?: string;
	max_trip_end_date?: string;
	nearest_add_term_payments_base: any;
	nearest_add_term_payments_base_date: any;
	nearest_add_term_payments_first_minute: any;
	nearest_add_term_payments_first_minute_date: any;
	nearest_add_term_payments_last_minute: any;
	nearest_add_term_payments_last_minute_date: any;
	nearest_add_term_payments_discount: any;
	nearest_free_spots: any;
}

export interface Location {
	city: string;
	province: string;
	driving_directions?: string;
}

export interface Medum {
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

export interface File {
	id: string;
	key: string;
	name: string;
	bucket: string;
}

export interface Schedule {
	description: string;
}

export interface Place {
	place: Place2;
	price_type?: string;
}

export interface Place2 {
	id: string;
	city?: string;
	name: string;
	type?: string;
	media?: Medum2[];
	scope?: string;
	status?: string;
	street?: string;
	country?: string;
	name_en?: string;
	postcode?: string;
	province?: string;
	company_id?: string;
	created_at?: string;
	deleted_at: any;
	description?: string;
	room_number?: string;
	website_url?: string;
	country_name?: string;
	house_number?: string;
	description_en?: string;
	ag_state_version?: number;
	created_by_user_id?: string;
}

export interface Medum2 {
	id: string;
	url: string;
	width: number;
	height: number;
	provider: string;
	providerData: ProviderData2;
}

export interface ProviderData2 {
	cloudinaryEtag: string;
	cloudinaryPublicId: string;
	cloudinarySignature: string;
}

export interface Company {
	name: string;
	id: string;
	logo_image_url: any;
	fc_website_url: string;
	fc_website_prefix: string;
	license_valid_till?: string;
	license_type: string;
	phone: string;
	operation_types?: string[];
	country: string;
	fee: number;
	stripe_id?: string;
}

export interface Accommodation {
	id: string;
	type: string;
	scope: string;
	company_id: string;
	name: string;
	status: string;
	description: string;
	country: string;
	country_name: string;
	province: string;
	city: string;
	postcode: string;
	street: string;
	house_number: string;
	room_number: string;
	deleted_at: any;
	created_by_user_id: string;
	created_at: string;
	ag_state_version: number;
	media: any[];
	website_url: string;
	name_en: any;
	description_en: any;
}

export interface DedicatedTripCaregiverUser {
	name: string;
	id: string;
	first_name: string;
	last_name: string;
}

export interface PageInfo {
	has_more: boolean;
	total_items: number;
	total_pages: number;
}
