interface GtagConfigParams {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_to?: string;
  [key: string]: unknown;
}

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  event_action?: string;
  value?: number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: GtagConfigParams): void;
      (command: 'event', action: string, parameters?: GtagEventParams): void;
      (command: 'js', date: Date): void;
      (command: 'set', config: Record<string, unknown>): void;
    };
  }
}

export {};