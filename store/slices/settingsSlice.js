import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "react-query";

const initialState = {
    profile: {
        full_name: "",
        username: "",
        email: "",
        phone_number: "",
        bio: "Write a short bio about yourself...",
        profile_picture: "https://example.com/avatar-placeholder.png"
    },
    notifications: {
        email_updates: true,
        email_reminders: true,
        email_newsletter: false,
        push_reminders: true,
        push_health_alerts: true,
        push_achievements: true
    },
    preferences: {
        dark_mode: false,
        compact_mode: false,
        language: "English",
        time_zone: "Pacific Time (PT)"
    }
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSettings: (state, action) => {
            state.settings = action.payload;
        },
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
        updateNotifications: (state, action) => {
            state.notifications = { ...state.notifications, ...action.payload };
        },
        updatePreferences: (state, action) => {
            state.preferences = { ...state.preferences, ...action.payload };
        },
        resetSettings: () => initialState
    }
});

export const getSettings = () => async (dispatch) => {
    // const { data } = useQuery('settings', () => axios.get('/api/settings'));
    dispatch(setSettings(response.data));
}

export const selectProfile = (state) => state.settings.profile;
export const selectNotifications = (state) => state.settings.notifications;
export const selectPreferences = (state) => state.settings.preferences;

export const { updateProfile, updateNotifications, updatePreferences, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;