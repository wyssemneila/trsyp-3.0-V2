export type AdminStatus = 'waiting_for_payment' | 'waiting_for_verification' | 'approved' | 'rejected';

export interface AdminParticipant {
  id: string;
  fullName: string;
  email: string;
  password: string;
  whatsapp: string;
  university: string;
  ieeeMember: boolean;
  ieeeId: string | null;
  rasMember: boolean;
  status: AdminStatus;
  registeredAt: string;
  paymentProof: string | null;
  paymentProofSubmittedAt: string | null;
}

export interface ChallengerMember {
  fullName: string;
  email: string;
  whatsapp: string;
  university: string;
  ieeeMember: boolean;
  ieeeId: string | null;
  rasMember: boolean;
}

export interface AdminChallenger {
  id: string;
  teamName: string;
  leader: {
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    university: string;
    ieeeMember: boolean;
    ieeeId: string | null;
    rasMember: boolean;
  };
  members: ChallengerMember[];
  status: AdminStatus;
  registeredAt: string;
  paymentProof: string | null;
  paymentProofSubmittedAt: string | null;
}

export interface AdminRegistrations {
  participants: AdminParticipant[];
  challengers: AdminChallenger[];
}

export const STORAGE_KEY = 'trsyp_registrations';
export const ADMIN_AUTH_KEY = 'trsyp_admin_auth';
export const ADMIN_PASSWORD = 'trsyp2026';

export function loadRegistrations(): AdminRegistrations {
  if (typeof window === 'undefined') return { participants: [], challengers: [] };
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { participants: [], challengers: [] };
  try { return JSON.parse(raw); } catch { return { participants: [], challengers: [] }; }
}

export function saveRegistrations(data: AdminRegistrations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
