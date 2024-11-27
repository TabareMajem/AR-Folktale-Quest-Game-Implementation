import { create } from 'zustand';

interface GameState {
  currentQuest: string | null;
  completedQuests: string[];
  score: number;
  badges: string[];
  setCurrentQuest: (questId: string) => void;
  completeQuest: (questId: string) => void;
  addScore: (points: number) => void;
  addBadge: (badge: string) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentQuest: null,
  completedQuests: [],
  score: 0,
  badges: [],
  
  setCurrentQuest: (questId) => set({ currentQuest: questId }),
  completeQuest: (questId) =>
    set((state) => ({
      completedQuests: [...state.completedQuests, questId],
    })),
  addScore: (points) =>
    set((state) => ({
      score: state.score + points,
    })),
  addBadge: (badge) =>
    set((state) => ({
      badges: [...state.badges, badge],
    })),
}));