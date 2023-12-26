export default interface Event {
  id: string;
  api_model: string;
  api_link: string;
  title: string;
  title_display?: string;
  image_url: string;
  hero_caption: string;
  short_description: string;
  header_description: string;
  list_description: string;
  description: string;
  location: string;
  event_type_id: number;
  alt_event_type_ids: number[];
  audience_id: number;
  alt_audience_ids: number[];
  program_ids: number[];
  program_titles: string[];
  is_ticketed: boolean;
  rsvp_link: string;
  buy_button_text: string;
  buy_button_caption: string;
  is_registration_required: boolean;
  is_member_exclusive: boolean;
  is_sold_out: boolean;
  is_free: boolean;
  is_admission_required: boolean;
  is_after_hours: boolean;
  is_virtual_event: boolean;
  start_date: Date;
  end_date: Date;
  start_time: string;
  end_time: string;
  date_display: string;
  door_time: string;
  layout_type: number;
  slug: string;
  entrance: string;
  join_url: string;
  survey_url: string;
  event_host_id: number;
  event_host_title: string;
  search_tags: string[];
  suggest_autocomplete_boosted: any;
  suggest_autocomplete_all: any;
  source_updated_at: Date;
  updated_at: Date;
  timestamp: Date;
}
