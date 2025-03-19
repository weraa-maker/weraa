import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// User preferences
export const userPreferencesAtom = atomWithStorage('userPreferences', {
  cookiesAccepted: false,
  analyticsConsent: false,
  marketingConsent: false,
  lastUpdated: null as Date | null,
});

// App state
export const sidebarOpenAtom = atom(false);
export const mobileMenuOpenAtom = atom(false);

// Current user state (for when you implement authentication)
export const userAtom = atom<{
  isAuthenticated: boolean;
  user: null | {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
}>({
  isAuthenticated: false,
  user: null,
});

// Search state
export const searchQueryAtom = atom('');
export const searchResultsAtom = atom<any[]>([]);
export const isSearchingAtom = atom(false);

// Notification state
export const notificationsAtom = atom<
  {
    id: string;
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    read: boolean;
    createdAt: Date;
  }[]
>([]);

export const unreadNotificationsAtom = atom((get) => {
  return get(notificationsAtom).filter((notification) => !notification.read);
});

// Feature flags for progressive enhancement
export const featureFlagsAtom = atomWithStorage('featureFlags', {
  enableNewDashboard: false,
  enableAdvancedAnalytics: false,
}); 