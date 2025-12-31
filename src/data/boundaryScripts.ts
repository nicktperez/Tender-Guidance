export type ScriptOption = {
    id: string;
    label: string;
};

export type ScriptTemplate = {
    who: string;
    topic: string;
    vibe: 'gentle' | 'firm' | 'burn-bridges';
    text: string;
};

export const whoOptions: ScriptOption[] = [
    { id: 'mil', label: 'Mother-in-Law' },
    { id: 'stranger', label: 'Stranger' },
    { id: 'friend', label: 'Friend w/o Kids' },
    { id: 'partner', label: 'Partner' },
    { id: 'boss', label: 'Boss' },
];

export const topicOptions: ScriptOption[] = [
    { id: 'food', label: 'Food/Feeding' },
    { id: 'sleep', label: 'Sleep/Nap Schedules' },
    { id: 'body', label: 'My Body/Appearance' },
    { id: 'visits', label: 'Unannounced Visits' },
    { id: 'holding', label: 'Holding the Baby' },
];

export const vibeOptions: ScriptOption[] = [
    { id: 'gentle', label: 'Gentle / Educate' },
    { id: 'firm', label: 'Firm / Stop It' },
    { id: 'burn-bridges', label: 'Sassy / Burn Bridges' },
];

export const scriptDatabase: ScriptTemplate[] = [
    // MIL + Food
    { who: 'mil', topic: 'food', vibe: 'gentle', text: "We're following the pediatrician's lead on solids right now. I'll let you know when we're ready for treats!" },
    { who: 'mil', topic: 'food', vibe: 'firm', text: "Please don't feed him that. We have strict rules about food to avoid allergies." },
    { who: 'mil', topic: 'food', vibe: 'burn-bridges', text: "If you feed him that again, you won't be watching him anymore. Simple as that." },

    // Stranger + Body
    { who: 'stranger', topic: 'body', vibe: 'gentle', text: "Oh, I'm feeling great, thanks for asking!" },
    { who: 'stranger', topic: 'body', vibe: 'firm', text: "I prefer not to discuss my body with strangers." },
    { who: 'stranger', topic: 'body', vibe: 'burn-bridges', text: "Wow, what an odd thing to say out loud to someone you don't know." },

    // Boss + Visits (Leave)
    { who: 'boss', topic: 'visits', vibe: 'gentle', text: "I'll be fully offline during my leave to bond with the baby, but [Name] has everything covered." },
    { who: 'boss', topic: 'visits', vibe: 'firm', text: "I am on maternity leave and legally cannot work. Please stop texting me." },
    { who: 'boss', topic: 'visits', vibe: 'burn-bridges', text: "Unless the building is on fire, do not contact me until September." },

    // Friend + Sleep
    { who: 'friend', topic: 'sleep', vibe: 'gentle', text: "We can't do dinner at 8pm anymore because getting him down is a whole production. How about brunch?" },
    { who: 'friend', topic: 'sleep', vibe: 'firm', text: "Please lower your voice, the baby just went down and it took 45 minutes." },
    { who: 'friend', topic: 'sleep', vibe: 'burn-bridges', text: "If you wake this baby up, you are rocking him back to sleep for the next 2 hours." },

    // Default Fallback
    { who: 'default', topic: 'default', vibe: 'gentle', text: "Thanks so much for thinking of us! We've got it handled." },
];

export function getScript(who: string, topic: string, vibe: string): string {
    const match = scriptDatabase.find(s => s.who === who && s.topic === topic && s.vibe === vibe);
    if (match) return match.text;

    // Generic fallbacks if exact match missing
    if (vibe === 'gentle') return "I appreciate your advice, but we're doing what works best for our family right now.";
    if (vibe === 'firm') return "This isn't up for discussion. Please respect our decision.";
    if (vibe === 'burn-bridges') return "Did I ask? No. So stop.";

    return "Select options to see your script.";
}
