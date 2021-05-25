export interface MessageEvent {
  data: string;
  id: string;
  type: string;
  retry?: number;
}
