import Event from '@events/business/domain/Event';

export interface EventsState {
  events: Event[];
  readingEvent: Event | null;
  isLoading: boolean;
  error: string | null;
}

export interface ApiResponse<T = any | undefined> {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: T;
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
}

export interface GeneralAppApiResponse<T = any | undefined> {
  success: boolean;
	status?: number;
	statusCode?: number | null;
	errorMessage?: string | null;
	response?: T;
	error?: string;
}
