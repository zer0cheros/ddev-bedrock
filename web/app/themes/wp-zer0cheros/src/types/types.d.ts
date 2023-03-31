export interface Page {
	id: number
	slug: string
	link: string
	lang: string | boolean
	modified: string
	parent: number
	menu_order: number
	title: {
		rendered: string
	}
	translations: any
	content: {
		rendered: string
	}
	has_blocks: boolean
	block_data: Array<Block>
	yoast_head_json?: YoastHead,
}

export interface Products {
	length: number;
	average_rating: string;
	backordered: boolean;
	backorders: string;
	backorders_allowed: boolean;
	button_text: string;
	catalog_visibility: string;
	categories: {
	  id: number;
	  name: string;
	  slug: string;
	}[];
	cross_sell_ids: number[];
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	date_on_sale_from: string | null;
	date_on_sale_from_gmt: string | null;
	date_on_sale_to: string | null;
	date_on_sale_to_gmt: string | null;
	default_attributes: any[];
	description: string;
	dimensions: {
	  length: string;
	  width: string;
	  height: string;
	};
	download_expiry: number;
	downloadable: boolean;
	downloads: any[];
	featured: boolean;
	grouped_products: any[];
	has_options: boolean;
	id: number;
	images: {
	  id: number;
	  date_created: string;
	  date_created_gmt: string;
	  date_modified: string;
	  date_modified_gmt: string;
	  src: string;
	  name: string;
	  alt: string;
	}[];
	low_stock_amount: number | null;
	manage_stock: boolean;
	menu_order: number;
	name: string;
	on_sale: boolean;
	parent_id: number;
	permalink: string;
	price: string;
	price_html: string;
	purchasable: boolean;
	purchase_note: string;
	rating_count: number;
	regular_price: string;
	related_ids: number[];
	reviews_allowed: boolean;
	sale_price: string;
	shipping_class: string;
	shipping_class_id: number;
	shipping_required: boolean;
	shipping_taxable: boolean;
	short_description: string;
	sku: string;
	slug: string;
	sold_individually: boolean;
	status: string;
	stock_quantity: number | null;
	stock_status: string;
	tags: {
	  id: number;
	  name: string;
	  slug: string;
	}[];
	tax_class: string;
	tax_status: string;
	total_sales: number;
	type: string;
	upsell_ids: number[];
	variations: any[];
	virtual: boolean;
	weight: string;
	yoast_head: string;
  }
  
export interface Menu {
	id: number,
	link: string,
	title: string
}
export interface Categories {
	id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: null | string;
  date_on_sale_from_gmt: null | string;
  date_on_sale_to: null | string;
  date_on_sale_to_gmt: null | string;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: null | number;
  in_stock: boolean;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: any[];
  tags: any[];
  images: any[];
  attributes: any[];
  default_attributes: any[];
  variations: any[];
  grouped_products: any[];
  menu_order: number;
  meta_data: any[];
  yoast_head: string;
}