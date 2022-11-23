export interface MailjetContactResponse {
  Count: number;
  Data: Datum[];
  Total: number;
}

export interface Datum {
  IsExcludedFromCampaigns: boolean;
  Name: string;
  CreatedAt: Date;
  DeliveredCount: number;
  Email: string;
  ExclusionFromCampaignsUpdatedAt: Date;
  ID: number;
  IsOptInPending: boolean;
  IsSpamComplaining: boolean;
  LastActivityAt: Date;
  LastUpdateAt: Date;
  UnsubscribedAt: Date;
  UnsubscribedBy: Date;
}

export interface MailjetError {
  ErrorInfo: string;
  ErrorMessage: string;
  StatusCode: number;
}
