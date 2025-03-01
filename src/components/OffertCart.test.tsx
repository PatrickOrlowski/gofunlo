import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OffertCard from "@components/OffertCard";
import { Product } from "@utils/models/product";



describe("OfferCard Component", () => {
	const mockProps = {
		id: 'IN_SSRIATQ9KQ',
		name: 'dla klienta indywidualna temp',
		description: 'wycieczka',
		additional_info_text: undefined,
		conditions_text_short: undefined,
		conditions_text_long: undefined,
		type: 'dedykowana-wycieczka-szkolna',
		location_id: null,
		is_archive: false,
		is_delete: false,
		archived_at: undefined,
		company_id: 'cf2db90f-87fc-4f4b-b835-e2502a13b963',
		attributes: undefined,
		location: {
			city: 'goru',
			province: 'Opolskie',
			driving_directions: 'wycieczka'
		},
		created_at: '2024-11-03T19:42:03.537Z',
		transport_type: 'own',
		transport_vehicle: "null",
		transport_route: undefined,
		transport_description: undefined,
		food_type: 'nie',
		food_description: "null",
		amenities_description: undefined,
		schedule_description: undefined,
		participation_conditions: undefined,
		participation_description: 'wycieczka',
		insurance_description: undefined,
		trip_type: undefined,
		status: 'ACTIVE',
		main_photo: undefined,
		media: [
			{
				id: '5613e941-718c-4ce8-8e33-df813e3ac5c3',
				url: 'http://res.cloudinary.com/www-fajnyczas-pl/image/upload/v1730662688/Screenshot_2024-01-31_170142_li4jzx.png',
				width: 920,
				height: 461,
				provider: 'cloudinary',
				providerData: [Object]
			},
			{
				id: '081a707a-1ab8-46be-98f8-96fe49438a1b',
				url: 'http://res.cloudinary.com/www-fajnyczas-pl/image/upload/v1730662689/Screenshot_2024-01-31_170200_jwmtgm.png',
				width: 1168,
				height: 533,
				provider: 'cloudinary',
				providerData: [Object]
			},
			{
				id: 'd00de353-3a53-4940-a0d1-85a8098cd792',
				url: 'http://res.cloudinary.com/www-fajnyczas-pl/image/upload/v1730662690/Screenshot_2024-01-31_170237_kpxlzr.png',
				width: 1178,
				height: 820,
				provider: 'cloudinary',
				providerData: [Object]
			},
			{
				id: '0dc29ef5-a001-4fb3-8326-bc4e7001eaeb',
				url: 'http://res.cloudinary.com/www-fajnyczas-pl/image/upload/v1730662690/Screenshot_2024-01-31_170258_t3qync.png',
				width: 1175,
				height: 808,
				provider: 'cloudinary',
				providerData: [Object]
			}
		],
		file_sections: undefined,
		files: [],
		location_name: undefined,
		category_code: undefined,
		subcategory_code: undefined,
		food_vegetarian: undefined,
		food_vegan: undefined,
		pickup_route: undefined,
		published_at: undefined,
		ag_state_version: 2,
		admin_approved_at: undefined,
		admin_show_on_home_page: undefined,
		admin_promote_on_home_page: undefined,
		country_code: 'PL',
		country_name: 'Polska',
		admin_comment: undefined,
		categories: undefined,
		location_types: undefined,
		company_name: undefined,
		search_hints: undefined,
		tsv: "'dla':1A 'indywidualna':3A 'klienta':2A 'temp':4A 'wycieczka':5B",
		min_price: 20000,
		link: undefined,
		slug: 'PR5PNXTGPC96/6153bcae-24a8-40a9-a25f-580cf451294e',
		company_logo_image_url: undefined,
		durations: [],
		schedule: [{ description: 'temp' }],
		price_description: 'wycieczka',
		price_includes_text: 'wycieczka',
		price_not_includes_text: 'wycieczka',
		min_age: 2,
		max_age: 20,
		availability: undefined,
		places: [],
		insurance_type: 'nie',
		place_id: undefined,
		accommodation_place_id: undefined,
		food_diets: undefined,
		discounts_description: undefined,
		duration_days: undefined,
		transport_types: undefined,
		dedicated_trip_caregiver_user_id: 'uEUGDLTgBahfMJVB6Fs9VjVUPN22',
		pickup_collection_address: 'tegez',
		pickup_collection_date: '2024-11-23',
		pickup_collection_place: ' Wwa',
		pickup_collection_time: 430,
		pickup_return_address: ' cos',
		pickup_return_date: '2024-11-30',
		pickup_return_place: ' ten',
		pickup_return_time: 430,
		pickup_route_address: undefined,
		pickup_route_price: undefined,
		name_en: ' for the customer individual temp',
		description_en: 'excursion',
		food_description_en: undefined,
		schedule_description_en: undefined,
		participation_description_en: 'excursion',
		insurance_description_en: undefined,
		price_description_en: 'excursion',
		price_includes_text_en: 'excursion',
		price_not_includes_text_en: 'excursion',
		object_type: undefined,
		facility_amenities: undefined,
		facility: undefined,
		max_guests: undefined,
		individual_min_price: undefined,
		group_min_price: undefined,
		prepayment: undefined,
		tourist_tax: undefined,
		dependent_price: undefined,
		cancellation_fee: undefined,
		prepayment_description: undefined,
		tourist_tax_description: undefined,
		dependent_price_description: undefined,
		cancellation_fee_description: undefined,
		prepayment_description_en: undefined,
		tourist_tax_description_en: undefined,
		dependent_price_description_en: undefined,
		cancellation_fee_description_en: undefined,
		product_payments_price_description: undefined,
		product_payments_price_includes_text: undefined,
		product_payments_price_not_includes_text: undefined,
		product_payments_discounts_name_1: undefined,
		product_payments_discounts_value_1: undefined,
		product_payments_discounts_name_2: undefined,
		product_payments_discounts_value_2: undefined,
		own_transport_details: undefined,
		participants_languages: undefined,
		product_payments_price_description_en: undefined,
		product_payments_price_includes_text_en: undefined,
		product_payments_price_not_includes_text_en: undefined,
		product_payments_discounts_name_1_en: undefined,
		product_payments_discounts_name_2_en: undefined,
		own_transport_details_en: undefined,
		currency: 'PLN',
		company: {
			name: 'janmat',
			id: 'cf2db90f-87fc-4f4b-b835-e2502a13b963',
			logo_image_url: undefined,
			fc_website_url: 'https://www.fajnyczas.pl/janmat',
			fc_website_prefix: 'janmat',
			license_valid_till: '2025-04-12',
			license_type: 'MINI_2023_250',
			phone: '5555555',
			operation_types: ['kolonie', 'polkolonie', 'wycieczka-szkolna'],
			country: 'us',
			fee: 2000,
			stripe_id: 'acct_1QACKzRJMzmBVPqo'
		},
		accommodation: undefined,
		dedicated_trip_caregiver_user: {
			name: 'Adrianna Kolanek',
			id: 'uEUGDLTgBahfMJVB6Fs9VjVUPN22',
			first_name: 'Adrianna',
			last_name: 'Kolanek'
		},
		product_id: 'IN_SSRIATQ9KQ',
		max_price: 20000,
		future_trips_count: 0,
		all_trips_count: 0,
		min_trip_start_date: '2024-12-26',
		min_trip_end_date: '2024-12-28',
		max_trip_start_date: '2024-12-26',
		max_trip_end_date: '2024-12-28',
		nearest_add_term_payments_base: undefined,
		nearest_add_term_payments_base_date: undefined,
		nearest_add_term_payments_first_minute: undefined,
		nearest_add_term_payments_first_minute_date: undefined,
		nearest_add_term_payments_last_minute: undefined,
		nearest_add_term_payments_last_minute_date: undefined,
		nearest_add_term_payments_discount: undefined,
		nearest_free_spots: undefined
	}

	it("renders the title correctly", () => {
		render(<OffertCard offer={mockProps as unknown as Product} />);
		expect(screen.getByText(new RegExp(mockProps.name, "gi"))).toBeInTheDocument();
	});

	it("renders the description correctly", () => {
		render(<OffertCard offer={mockProps as unknown as Product} />);
		expect(screen.getAllByText(mockProps.description)[0]).toBeInTheDocument();
	});
});

