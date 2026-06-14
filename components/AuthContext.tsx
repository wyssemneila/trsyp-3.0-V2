'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserType = 'participant' | 'challenger';
export type RegStatus = 'waiting_for_payment' | 'waiting_for_verification' | 'approved';

export interface TeamMember {
  name: string;
  email: string;
  whatsapp: string;
  university: string;
  isIeee: boolean;
  ieeeId: string;
  isRas: boolean;
}

export interface UserData {
  userType: UserType;
  fullName: string;
  email: string;
  whatsapp: string;
  university: string;
  isIeee: boolean;
  ieeeId: string;
  isRas: boolean;
  status: RegStatus;
  paymentProofSubmitted: boolean;
  paymentFileName: string;
  // Challenger-only
  teamName?: string;
  memberCount?: number;
  members?: TeamMember[];
}

interface AuthCtx {
  user: UserData | null;
  isRegistered: boolean;
  register: (data: UserData) => void;
  updateStatus: (status: RegStatus) => void;
  submitPayment: (fileName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  isRegistered: false,
  register: () => {},
  updateStatus: () => {},
  submitPayment: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('trsyp_user');
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
    setLoaded(true);
  }, []);

  const persist = (data: UserData) => {
    localStorage.setItem('trsyp_user', JSON.stringify(data));
    localStorage.setItem('trsyp_registered', 'true');
    setUser(data);
  };

  const register = (data: UserData) => persist(data);

  const updateStatus = (status: RegStatus) => {
    if (!user) return;
    persist({ ...user, status });
  };

  const submitPayment = (fileName: string) => {
    if (!user) return;
    persist({
      ...user,
      status: 'waiting_for_verification',
      paymentProofSubmitted: true,
      paymentFileName: fileName,
    });
  };

  const logout = () => {
    localStorage.removeItem('trsyp_user');
    localStorage.removeItem('trsyp_registered');
    setUser(null);
  };

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={{ user, isRegistered: !!user, register, updateStatus, submitPayment, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
