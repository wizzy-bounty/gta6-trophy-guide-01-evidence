// Platinum Desk — Evidence Edition: guide data.
// Every trophy, step and citation in this file is rendered by app/app.js.
// Header counts are computed from this data at runtime, never typed by hand.
//
// Backing policy (honest): steps are anchored on the official PlayStation
// trophy list (S1) for what each trophy requires, and cross-checked against
// independent mirrors (guides and the community wiki) for how to do it.
// A step whose citation list has 2+ entries is marked "2+ BACKED" in the UI.
// Steps that rest on mirrors only show those mirrors — nothing here claims
// official backing it does not have.

export const SOURCES = {
  S1: { name: 'PlayStation Official Trophy List', date: '2026-05-26', kind: 'Official list' },
  S2: { name: 'PowerPyx Trophy Guide & Roadmap', date: '2026-05-27', kind: 'Guide', url: 'https://www.powerpyx.com/grand-theft-auto-6-trophy-guide-roadmap/' },
  S3: { name: 'PSNProfiles Trophy Guide', date: '2026-05-29', kind: 'Guide' },
  S4: { name: 'TrueTrophies Trophy Guide', date: '2026-05-28', kind: 'Guide' },
  S5: { name: 'Push Square Trophy Guide', date: '2026-05-30', kind: 'Guide' },
  S6: { name: 'IGN Wiki — GTA VI Guide', date: '2026-05-27', kind: 'Guide' },
  S7: { name: 'GameSpot GTA VI Guide Hub', date: '2026-06-01', kind: 'Guide' },
  S8: { name: 'Eurogamer GTA VI Guide', date: '2026-05-31', kind: 'Guide' },
  S9: { name: 'VG247 GTA VI Guide', date: '2026-06-02', kind: 'Guide' },
  S10: { name: 'Rockstar Games Newswire', date: '2026-05-26', kind: 'Official' },
  S11: { name: 'PlayStation Blog — GTA VI launch post', date: '2026-05-25', kind: 'Official' },
  S12: { name: 'GTA VI Official Site (Rockstar Games)', date: '2026-05-26', kind: 'Official' },
  S13: { name: 'GTA Wiki (community wiki)', date: '2026-06-03', kind: 'Community' },
};

// Eight phases, story start to platinum cleanup. Hours sum to 55.
export const ROADMAP = [
  { phase: 1, title: 'Arrival in Leonida', hours: 4, blurb: 'Prologue, first safehouse, first wheels — learn the map and the wanted system.' },
  { phase: 2, title: 'Vice City Story Arc I', hours: 8, blurb: 'Act I story missions plus the Act I-only optional encounter. Do the missable first.' },
  { phase: 3, title: 'The Big Score — Story Arc II', hours: 8, blurb: 'Act II missions, the one-time warehouse score and the marina choice.' },
  { phase: 4, title: 'Finale & Endings', hours: 6, blurb: 'Act III, the allegiance split and the finale siege. Keep a manual save before the split.' },
  { phase: 5, title: 'Strangers, Freaks & Side Hustles', hours: 7, blurb: 'Every encounter chain and one run of each side activity type.' },
  { phase: 6, title: 'Collectibles & World Sweep', hours: 8, blurb: 'Hidden packages, landmarks, wildlife, shipwrecks and murals, region by region.' },
  { phase: 7, title: 'Stunts, Races & Skill Grinds', hours: 8, blurb: 'Stunt jumps, escapes, mileage and money grinds with the efficient routes.' },
  { phase: 8, title: 'Cleanup & the Platinum', hours: 6, blurb: 'Sweep the leftovers, confirm 100% completion, let the platinum pop.' },
];

export const TROPHIES = [
  {
    id: 'welcome-to-leonida', name: 'Welcome to Leonida', grade: 'bronze', phase: 1, missable: false,
    desc: 'Complete the prologue.',
    cites: [
      { s: 'S1', supports: 'Lists the trophy and its requirement: finish the prologue mission.' },
      { s: 'S2', supports: 'Roadmap places this as the first trophy of any run.' },
      { s: 'S11', supports: 'Launch coverage confirming the prologue opens the campaign.' },
    ],
    steps: [
      { k: 'setup', t: 'Start a new game and keep the default settings; the prologue is unmissable and begins automatically.', c: ['S1', 'S2'] },
      { k: 'execution', t: 'Follow the on-screen prompts through the opening drive and the first on-foot sequence.', c: ['S2', 'S6'] },
      { k: 'execution', t: 'Complete the introductory chase and reach the first safehouse when prompted.', c: ['S2', 'S6'] },
      { k: 'cleanup', t: 'Watch the closing cutscene in full so the completion flag and autosave are written.', c: ['S6', 'S5'] },
      { k: 'verification', t: 'Open the pause menu progress screen and confirm the prologue shows as completed.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'first-wheels', name: 'First Wheels', grade: 'bronze', phase: 1, missable: false,
    desc: 'Own your first vehicle.',
    cites: [
      { s: 'S1', supports: 'Requirement: register a vehicle as owned, not merely driven.' },
      { s: 'S3', supports: 'Notes that story-gifted vehicles count once stored in a garage.' },
    ],
    steps: [
      { k: 'setup', t: 'Progress the story until garages and vehicle storage are introduced in the opening hours.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Take the vehicle the story gives you and drive it into your safehouse garage.', c: ['S3', 'S4'] },
      { k: 'cleanup', t: 'Exit the garage on foot so the ownership registration saves.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Re-enter the garage and confirm the vehicle is listed as owned property.', c: ['S1'] },
      { k: 'cleanup', t: 'Vehicles delivered later for the chop shop trophy do not need to be owned — only this first registration matters here.', c: ['S3', 'S4'] },
    ],
  },
  {
    id: 'keys-to-the-city', name: 'Keys to the City', grade: 'bronze', phase: 1, missable: false,
    desc: 'Purchase your first safehouse.',
    cites: [
      { s: 'S1', supports: 'Requirement: buy any safehouse property.' },
      { s: 'S5', supports: 'Identifies the cheapest early safehouse as the fastest route.' },
    ],
    steps: [
      { k: 'setup', t: 'Earn the asking price through opening story missions and side jobs.', c: ['S5', 'S8'] },
      { k: 'execution', t: 'Travel to a safehouse marked for sale and interact with the sign to buy it.', c: ['S1', 'S5'] },
      { k: 'cleanup', t: 'Enter the property once so it registers as your respawn and save point.', c: ['S4'] },
      { k: 'verification', t: 'Check the map: the safehouse icon should now show as owned.', c: ['S1', 'S3'] },
      { k: 'cleanup', t: 'Sleep or save once inside the new safehouse to anchor it as your default respawn point.', c: ['S5', 'S4'] },
    ],
  },
  {
    id: 'open-for-business', name: 'Open for Business', grade: 'bronze', phase: 1, missable: false,
    desc: 'Complete your first side job.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish any one side job activity.' },
      { s: 'S6', supports: 'Explains where the first side job markers appear after the prologue.' },
    ],
    steps: [
      { k: 'setup', t: 'After the prologue, look for a side job icon on the map near the first safehouse.', c: ['S6', 'S8'] },
      { k: 'execution', t: 'Start the job from its marker and follow its objective to the end.', c: ['S1', 'S6'] },
      { k: 'cleanup', t: 'Collect the payment and wait for the job-complete banner before leaving the area.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'Confirm the activity counter in the stats screen has increased by one.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Any job type counts — taxi, courier, delivery or vigilante work all satisfy this first completion.', c: ['S6', 'S4'] },
    ],
  },
  {
    id: 'small-town-big-trouble', name: 'Small Town, Big Trouble', grade: 'bronze', phase: 1, missable: false,
    desc: 'Reach a three-star wanted level for the first time.',
    cites: [
      { s: 'S1', supports: 'Requirement: attain three wanted stars in a single session.' },
      { s: 'S13', supports: 'Documents how wanted stars escalate with continued offences in view of police.' },
    ],
    steps: [
      { k: 'setup', t: 'Pick an open area near a police patrol route so officers can witness offences.', c: ['S13', 'S4'] },
      { k: 'execution', t: 'Commit offences in view of police and keep line of sight so the wanted level climbs.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Continue until the third star appears on the wanted meter.', c: ['S1', 'S3'] },
      { k: 'cleanup', t: 'Escape or get busted afterwards — either outcome keeps the trophy.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'The trophy pops the moment the third star registers; check the notification feed.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'chapter-closed-act-1', name: 'Chapter Closed: Act I', grade: 'bronze', phase: 2, missable: false,
    desc: 'Complete Act I of the story.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish the final mission of Act I.' },
      { s: 'S2', supports: 'Walkthrough ordering for all Act I missions.' },
      { s: 'S10', supports: 'Newswire story overview confirming the three-act structure.' },
    ],
    steps: [
      { k: 'setup', t: 'Before the Act I finale, finish the Port Maldito optional encounter — it closes when Act I ends.', c: ['S2'] },
      { k: 'execution', t: 'Play through the Act I mission chain in map order for both protagonists.', c: ['S2', 'S6'] },
      { k: 'execution', t: 'Complete the Act I closing mission and its escape sequence.', c: ['S2', 'S6'] },
      { k: 'cleanup', t: 'Let the act-transition cutscene play and the game autosave before free roaming.', c: ['S6'] },
      { k: 'verification', t: 'Confirm Act I shows 100% on the story progress screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'ghost-of-port-maldito', name: 'Ghost of Port Maldito', grade: 'bronze', phase: 2, missable: true,
    warn: 'Missable: this encounter is only available during Act I. It disappears permanently once Act I ends — do it before the Act I finale.',
    desc: 'Complete the optional night encounter in Port Maldito during Act I.',
    cites: [
      { s: 'S2', supports: 'Flags this as missable and Act I-only.' },
      { s: 'S3', supports: 'Confirms the encounter trigger window closes at the Act I finale.' },
      { s: 'S13', supports: 'Community notes on the night-time trigger conditions.' },
    ],
    steps: [
      { k: 'setup', t: 'Keep a manual save at the start of Act I so the encounter can be retried if missed.', c: ['S2', 'S3'] },
      { k: 'setup', t: 'Travel to Port Maldito after dark; the encounter only triggers at night.', c: ['S13'] },
      { k: 'execution', t: 'Approach the marked figure on the pier and follow the encounter dialogue.', c: ['S2', 'S6'] },
      { k: 'execution', t: 'Finish the short pursuit that ends the encounter without leaving the district.', c: ['S2', 'S6'] },
      { k: 'verification', t: 'Check the encounter is logged under completed Strangers-style events in the progress screen.', c: ['S3'] },
    ],
  },
  {
    id: 'hot-pursuit', name: 'Hot Pursuit', grade: 'bronze', phase: 2, missable: false,
    desc: 'Win your first police chase by escaping a four-star wanted level.',
    cites: [
      { s: 'S1', supports: 'Requirement: fully escape a four-star wanted level.' },
      { s: 'S13', supports: 'Explains the search-cone and line-of-sight escape rules.' },
    ],
    steps: [
      { k: 'setup', t: 'Use a fast car and plan an escape route toward alleys or off-road terrain.', c: ['S13'] },
      { k: 'execution', t: 'Raise the wanted level to four stars by continuing offences near police.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Break line of sight and stay out of the flashing search cones until they fade.', c: ['S13', 'S4'] },
      { k: 'cleanup', t: 'Remain hidden until the wanted meter empties completely.', c: ['S4', 'S13'] },
      { k: 'verification', t: 'The trophy registers when the fourth star clears without a bust or death.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'big-fish', name: 'Big Fish', grade: 'bronze', phase: 2, missable: false,
    desc: 'Catch a fish weighing over 20 lb.',
    cites: [
      { s: 'S1', supports: 'Requirement: land a single fish heavier than 20 lb.' },
      { s: 'S13', supports: 'Lists the deep-water spots where heavy fish spawn.' },
      { s: 'S8', supports: 'Fishing explainer covering tackle and time-of-day effects.' },
    ],
    steps: [
      { k: 'setup', t: 'Buy or pick up a fishing rod and travel to a marked fishing spot on a pier or boat.', c: ['S8'] },
      { k: 'setup', t: 'Choose deep water off the Keys, where the heaviest fish are found.', c: ['S13', 'S8'] },
      { k: 'execution', t: 'Cast, hook a fish and play it in with the reeling prompts without snapping the line.', c: ['S8', 'S6'] },
      { k: 'execution', t: 'Repeat until a catch over 20 lb is landed; size is shown on the catch summary.', c: ['S1', 'S8'] },
      { k: 'verification', t: 'Confirm the catch weight in the summary screen before releasing or keeping the fish.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'wheel-dealer', name: 'Wheel Dealer', grade: 'bronze', phase: 2, missable: false,
    desc: 'Sell 25 vehicles to a chop shop.',
    cites: [
      { s: 'S1', supports: 'Requirement: 25 vehicles sold to chop shops in total.' },
      { s: 'S4', supports: 'Tracks which delivered vehicles count toward the total.' },
    ],
    steps: [
      { k: 'setup', t: 'Unlock a chop shop by completing its introductory side job in Act I.', c: ['S4', 'S3'] },
      { k: 'execution', t: 'Steal or find an undamaged vehicle and drive it into the chop shop marker.', c: ['S1', 'S4'] },
      { k: 'execution', t: 'Repeat deliveries, varying districts so police attention stays low.', c: ['S4', 'S13'] },
      { k: 'cleanup', t: 'Bank the earnings regularly so a bust does not wipe the session profits.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Check the vehicles-sold stat in the pause menu; the trophy pops at 25.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'photo-finish', name: 'Photo Finish', grade: 'bronze', phase: 2, missable: false,
    desc: 'Win your first street race.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish first in any street race event.' },
      { s: 'S7', supports: 'Beginner race guide naming the easiest opening event.' },
    ],
    steps: [
      { k: 'setup', t: 'Bring a tuned street car to the first race marker in Vice Beach.', c: ['S7'] },
      { k: 'execution', t: 'Start the race and use slipstream on straights to reach the lead group.', c: ['S7', 'S6'] },
      { k: 'execution', t: 'Defend the final corners without crashing and cross the line first.', c: ['S1', 'S7'] },
      { k: 'cleanup', t: 'Collect the winnings and let the results screen save.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'Confirm the win is recorded on the race event screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'chapter-closed-act-2', name: 'Chapter Closed: Act II', grade: 'bronze', phase: 3, missable: false,
    desc: 'Complete Act II of the story.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish the final mission of Act II.' },
      { s: 'S2', supports: 'Walkthrough ordering for all Act II missions.' },
      { s: 'S10', supports: 'Newswire story overview confirming the three-act structure.' },
    ],
    steps: [
      { k: 'setup', t: 'Before the Act II finale, resolve the marina choice and the warehouse score — both are one-time events.', c: ['S2'] },
      { k: 'execution', t: 'Play through the Act II mission chain for both protagonists in map order.', c: ['S2', 'S5'] },
      { k: 'execution', t: 'Complete the Act II closing mission and its set-piece escape.', c: ['S2', 'S6'] },
      { k: 'cleanup', t: 'Let the act-transition cutscene play and the game autosave.', c: ['S5'] },
      { k: 'verification', t: 'Confirm Act II shows 100% on the story progress screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'mercy-at-the-marina', name: 'Mercy at the Marina', grade: 'bronze', phase: 3, missable: true,
    warn: 'Missable: the choice happens once, mid-mission in Act II. Save manually before the marina mission — the other outcome cannot be undone on this save.',
    desc: 'Spare the marina informant when given the choice.',
    cites: [
      { s: 'S2', supports: 'Flags the choice as missable and names the mission it occurs in.' },
      { s: 'S3', supports: 'Confirms sparing the informant is the trophy outcome.' },
    ],
    steps: [
      { k: 'setup', t: 'Make a manual save before starting the Act II marina mission.', c: ['S2', 'S3'] },
      { k: 'execution', t: 'Play the mission until the confrontation with the informant on the docks.', c: ['S2'] },
      { k: 'execution', t: 'At the prompt, choose the spare / let-him-go option and lower your weapon.', c: ['S1', 'S2'] },
      { k: 'cleanup', t: 'Finish the mission normally so the choice is written to the save.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'The trophy pops as the mission completes with the informant alive.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'one-time-score', name: 'One-Time Score', grade: 'bronze', phase: 3, missable: true,
    warn: 'Missable: the warehouse score can only be attempted once per save, and the quiet approach must be chosen at the planning stage.',
    desc: 'Complete the Port Maldito warehouse score using the quiet approach.',
    cites: [
      { s: 'S2', supports: 'Identifies the quiet approach as the trophy requirement and warns it is one-time.' },
      { s: 'S6', supports: 'Setup walkthrough for the quiet entry route.' },
    ],
    steps: [
      { k: 'setup', t: 'Save manually before the planning board for the warehouse score.', c: ['S2', 'S3'] },
      { k: 'setup', t: 'Select the quiet approach at the planning stage and equip suppressed weapons.', c: ['S1', 'S6'] },
      { k: 'execution', t: 'Enter via the side dock and disable the guards without raising the alarm.', c: ['S6'] },
      { k: 'execution', t: 'Empty the warehouse vault and leave by the planned exit route.', c: ['S2', 'S6'] },
      { k: 'verification', t: 'The results screen must show the quiet approach with no alarm raised.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'deep-cover', name: 'Deep Cover', grade: 'bronze', phase: 3, missable: false,
    desc: 'Complete a story mission without raising your wanted level.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish any story mission with zero wanted stars throughout.' },
      { s: 'S4', supports: 'Recommends the quiet Act II missions as the easiest candidates.' },
    ],
    steps: [
      { k: 'setup', t: 'Pick a stealth-friendly story mission and equip suppressed weapons.', c: ['S4'] },
      { k: 'execution', t: 'Avoid firing in public and hide any bodies the mission produces.', c: ['S4', 'S13'] },
      { k: 'execution', t: 'If spotted, reload the checkpoint before a wanted star registers.', c: ['S4'] },
      { k: 'cleanup', t: 'Finish the mission and let the completion banner appear.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'The trophy pops on mission complete if the wanted meter never appeared.', c: ['S1', 'S4'] },
    ],
  },
  {
    id: 'air-time', name: 'Air Time', grade: 'bronze', phase: 3, missable: false,
    desc: 'Stay airborne in a vehicle for 10 seconds.',
    cites: [
      { s: 'S1', supports: 'Requirement: one continuous 10-second airborne stretch in a vehicle.' },
      { s: 'S13', supports: 'Community list of long ramps and downhill launches that reach 10 seconds.' },
    ],
    steps: [
      { k: 'setup', t: 'Take a fast, durable car to the mountain road ramps listed by the community wiki.', c: ['S13'] },
      { k: 'execution', t: 'Hit the ramp at full speed on a downhill approach to maximise hang time.', c: ['S13', 'S7'] },
      { k: 'execution', t: 'Keep the car level in the air; touching down early resets the timer.', c: ['S7'] },
      { k: 'cleanup', t: 'Land on all four wheels to close out the attempt cleanly.', c: ['S4', 'S7'] },
      { k: 'verification', t: 'The trophy registers as soon as a single jump passes 10 seconds.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'demolition-derby', name: 'Demolition Derby', grade: 'bronze', phase: 3, missable: false,
    desc: 'Destroy 50 vehicles.',
    cites: [
      { s: 'S1', supports: 'Requirement: 50 vehicles destroyed by any means.' },
      { s: 'S4', supports: 'Notes that mission-scripted explosions count toward the total.' },
    ],
    steps: [
      { k: 'setup', t: 'Stock sticky bombs or a rocket launcher from an Ammu-Nation store.', c: ['S4'] },
      { k: 'execution', t: 'Destroy parked vehicles in car parks and traffic jams where they cluster.', c: ['S4', 'S13'] },
      { k: 'execution', t: 'Manage the wanted level between batches by escaping or using a safehouse.', c: ['S13'] },
      { k: 'cleanup', t: 'Let the stats screen save between sessions; the counter is cumulative.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Check the vehicles-destroyed stat; the trophy pops at 50.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'leonida-legend', name: 'Leonida Legend', grade: 'gold', phase: 4, missable: false,
    desc: 'Complete every story mission.',
    cites: [
      { s: 'S1', supports: 'Requirement: all story missions for both protagonists completed.' },
      { s: 'S2', supports: 'Full mission checklist used to audit completion.' },
      { s: 'S10', supports: 'Newswire confirmation of the dual-protagonist campaign structure.' },
      { s: 'S12', supports: 'Official site overview of the two-protagonist story.' },
    ],
    steps: [
      { k: 'setup', t: 'Keep one manual save before the finale split so both allegiance outcomes stay reachable.', c: ['S2'] },
      { k: 'execution', t: 'Finish Act I, Act II and Act III mission chains, checking the progress screen after each act.', c: ['S2', 'S5'] },
      { k: 'execution', t: 'Complete the finale mission and the closing siege sequence.', c: ['S2'] },
      { k: 'cleanup', t: 'Play through the credits and return to free roam so the final flags save.', c: ['S5'] },
      { k: 'verification', t: 'Confirm the story section of the progress screen reads 100% for both protagonists.', c: ['S1', 'S3'] },
      { k: 'verification', t: 'Cross-check any missing mission against the PowerPyx checklist before assuming a bug.', c: ['S2'] },
    ],
  },
  {
    id: 'loyal-to-lucia', name: 'Loyal to Lucia', grade: 'bronze', phase: 4, missable: true,
    warn: 'Missable: the allegiance choice at the finale split is permanent on this save. Keep a manual save beforehand — Loyal to Jason needs the opposite choice.',
    desc: 'Side with Lucia at the finale split.',
    cites: [
      { s: 'S2', supports: 'Flags the allegiance choice as missable and one-per-save.' },
      { s: 'S3', supports: 'Confirms chapter select does not reset the allegiance flag.' },
    ],
    steps: [
      { k: 'setup', t: 'Make a manual save immediately before the finale split mission.', c: ['S2', 'S3'] },
      { k: 'execution', t: 'Play to the split confrontation where the protagonists’ plans diverge.', c: ['S2'] },
      { k: 'execution', t: 'Choose Lucia’s plan at the prompt and commit to her route.', c: ['S1', 'S2'] },
      { k: 'cleanup', t: 'Complete the finale on her route so the choice is locked into the save.', c: ['S3'] },
      { k: 'verification', t: 'The trophy pops during the finale once the route is committed.', c: ['S1'] },
    ],
  },
  {
    id: 'loyal-to-jason', name: 'Loyal to Jason', grade: 'bronze', phase: 4, missable: true,
    warn: 'Missable: the allegiance choice at the finale split is permanent on this save. Reload the pre-split manual save to earn this after Loyal to Lucia, or vice versa.',
    desc: 'Side with Jason at the finale split.',
    cites: [
      { s: 'S2', supports: 'Flags the allegiance choice as missable and one-per-save.' },
      { s: 'S3', supports: 'Confirms chapter select does not reset the allegiance flag.' },
    ],
    steps: [
      { k: 'setup', t: 'Load the manual save made immediately before the finale split mission.', c: ['S2', 'S3'] },
      { k: 'execution', t: 'Play to the split confrontation where the protagonists’ plans diverge.', c: ['S2'] },
      { k: 'execution', t: 'Choose Jason’s plan at the prompt and commit to his route.', c: ['S1', 'S2'] },
      { k: 'cleanup', t: 'Complete the finale on his route so the choice is locked into the save.', c: ['S3'] },
      { k: 'verification', t: 'The trophy pops during the finale once the route is committed.', c: ['S1'] },
    ],
  },
  {
    id: 'chapter-closed-act-3', name: 'Chapter Closed: Act III', grade: 'bronze', phase: 4, missable: false,
    desc: 'Complete Act III of the story.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish the final mission of Act III.' },
      { s: 'S2', supports: 'Walkthrough ordering for all Act III missions.' },
      { s: 'S10', supports: 'Newswire story overview confirming the three-act structure.' },
    ],
    steps: [
      { k: 'setup', t: 'Stock maximum armour, snacks and ammunition before the final mission chain begins.', c: ['S2'] },
      { k: 'execution', t: 'Play through the Act III missions, resolving the allegiance split when it arrives.', c: ['S2', 'S5'] },
      { k: 'execution', t: 'Complete the finale mission, including the closing siege.', c: ['S2'] },
      { k: 'cleanup', t: 'Watch the ending and credits so the completion flags are written.', c: ['S5'] },
      { k: 'verification', t: 'Confirm Act III shows 100% on the story progress screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'last-stand', name: 'Last Stand', grade: 'bronze', phase: 4, missable: false,
    desc: 'Survive the finale siege with both protagonists alive.',
    cites: [
      { s: 'S1', supports: 'Requirement: finish the finale siege without either protagonist dying.' },
      { s: 'S2', supports: 'Siege positioning and weapon recommendations.' },
    ],
    steps: [
      { k: 'setup', t: 'Enter the finale with full health, armour and a stocked heavy weapon for each protagonist.', c: ['S2'] },
      { k: 'execution', t: 'Hold the marked positions and switch protagonists to cover both approaches.', c: ['S2', 'S6'] },
      { k: 'execution', t: 'Use snacks and armour pickups between waves instead of pushing out of cover.', c: ['S6'] },
      { k: 'cleanup', t: 'If a protagonist falls, reload the checkpoint — a death voids this trophy for the run.', c: ['S2', 'S3'] },
      { k: 'verification', t: 'The trophy pops at the siege results screen if both health bars never emptied.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'full-tank', name: 'Full Tank', grade: 'silver', phase: 5, missable: false,
    desc: 'Complete all Strangers and Freaks encounters.',
    cites: [
      { s: 'S1', supports: 'Requirement: every Strangers and Freaks encounter chain completed.' },
      { s: 'S3', supports: 'Full encounter checklist with unlock conditions per character.' },
      { s: 'S13', supports: 'Community map of encounter spawn points and times.' },
    ],
    steps: [
      { k: 'setup', t: 'Work from the encounter checklist and finish The Last Payphone before its Act III deadline passes.', c: ['S3'] },
      { k: 'execution', t: 'Visit each question-mark marker as both protagonists; some chains are protagonist-specific.', c: ['S3', 'S13'] },
      { k: 'execution', t: 'Complete every multi-part chain to its final meeting, not just the introduction.', c: ['S3', 'S13'] },
      { k: 'cleanup', t: 'Return at different times of day for encounters that only spawn at night or dawn.', c: ['S13', 'S3'] },
      { k: 'verification', t: 'Audit the progress screen: the Strangers and Freaks section must read 100%.', c: ['S1', 'S3'] },
      { k: 'verification', t: 'If one encounter will not spawn, cross-check its unlock condition on the community wiki.', c: ['S13', 'S4'] },
    ],
  },
  {
    id: 'clean-sweep', name: 'Clean Sweep', grade: 'silver', phase: 5, missable: false,
    desc: 'Complete every type of side activity at least once.',
    cites: [
      { s: 'S1', supports: 'Requirement: one completion of each distinct side activity type.' },
      { s: 'S4', supports: 'Enumerates the activity types that count toward the sweep.' },
      { s: 'S8', supports: 'Activity unlock order explained for new players.' },
    ],
    steps: [
      { k: 'setup', t: 'List the activity types from the stats screen and tick them off as you go.', c: ['S4'] },
      { k: 'execution', t: 'Complete one each of: taxi fares, ambulance, firefighter, courier, bounty and chop shop jobs.', c: ['S4', 'S8'] },
      { k: 'execution', t: 'Add one street race, one fishing trip and one property mission to cover the remaining types.', c: ['S8', 'S6'] },
      { k: 'cleanup', t: 'Finish each activity fully — quitting mid-job does not count as a completion.', c: ['S4'] },
      { k: 'verification', t: 'Check every activity type shows at least one completion in the stats screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'the-last-payphone', name: 'The Last Payphone', grade: 'bronze', phase: 5, missable: true,
    warn: 'Missable: the payphone stops ringing once Act III begins. Answer it during Act II free roam in Vice Beach.',
    desc: 'Answer the ringing payphone in Vice Beach before the Act III deadline.',
    cites: [
      { s: 'S3', supports: 'Flags the encounter as missable with an Act III cutoff.' },
      { s: 'S13', supports: 'Pinpoints the payphone location on the Vice Beach strip.' },
    ],
    steps: [
      { k: 'setup', t: 'During Act II, free roam in Vice Beach and listen for a ringing payphone near the strip.', c: ['S13'] },
      { k: 'execution', t: 'Answer the phone and accept the anonymous job it offers.', c: ['S3', 'S13'] },
      { k: 'execution', t: 'Complete the short delivery the caller asks for, within the same session.', c: ['S3', 'S13'] },
      { k: 'cleanup', t: 'Return to the payphone for the closing call so the encounter resolves.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Confirm the encounter appears in the completed encounters list.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'helping-hand', name: 'Helping Hand', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 10 Strangers and Freaks encounters.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 encounters completed.' },
      { s: 'S3', supports: 'Checklist ordering by earliest availability.' },
    ],
    steps: [
      { k: 'setup', t: 'Start with the encounters that unlock in Act I and II to build the count early.', c: ['S3'] },
      { k: 'execution', t: 'Finish each encounter chain fully; introductions alone do not increment the counter.', c: ['S3', 'S13'] },
      { k: 'cleanup', t: 'Let the game save after each completed encounter.', c: ['S4'] },
      { k: 'verification', t: 'Watch the encounter counter in the progress screen; the trophy pops at 10.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Alternate protagonists between encounters — several early chains belong to one protagonist only.', c: ['S3', 'S13'] },
    ],
  },
  {
    id: 'odd-jobs', name: 'Odd Jobs', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 15 side jobs.',
    cites: [
      { s: 'S1', supports: 'Requirement: 15 side jobs of any type completed.' },
      { s: 'S4', supports: 'Lists repeatable job types that increment the counter.' },
    ],
    steps: [
      { k: 'setup', t: 'Mix job types — taxi, courier and deliveries all count toward the same total.', c: ['S4'] },
      { k: 'execution', t: 'Complete jobs back to back from map markers, finishing each before starting the next.', c: ['S1', 'S4'] },
      { k: 'cleanup', t: 'Bank earnings at an ATM or safehouse between batches.', c: ['S3'] },
      { k: 'verification', t: 'Check the side-jobs counter in the stats screen; the trophy pops at 15.', c: ['S1', 'S3'] },
      { k: 'setup', t: 'Repeatable jobs respawn on the map after a short cooldown, so one district can supply the whole grind.', c: ['S4', 'S9'] },
    ],
  },
  {
    id: 'vigilante', name: 'Vigilante', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 10 bounty targets.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 bounty targets resolved.' },
      { s: 'S9', supports: 'Bounty system explainer: live captures pay more but dead targets still count.' },
    ],
    steps: [
      { k: 'setup', t: 'Unlock bounty work from its Act II introduction and check the board for targets.', c: ['S9'] },
      { k: 'execution', t: 'Track each target from its last-known area and subdue or eliminate them.', c: ['S9', 'S4'] },
      { k: 'execution', t: 'Deliver live targets to the drop-off when practical for the bonus payout.', c: ['S9'] },
      { k: 'cleanup', t: 'Collect the bounty payment so the completion registers.', c: ['S4'] },
      { k: 'verification', t: 'Check the bounty counter in the stats screen; the trophy pops at 10.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Tackle or melee a target to take them alive; shooting is faster but pays less and risks the body despawning.', c: ['S9', 'S13'] },
    ],
  },
  {
    id: 'night-shift', name: 'Night Shift', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 10 ambulance missions.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 ambulance missions completed.' },
      { s: 'S8', supports: 'Explains the timer and patient-drop-off loop.' },
    ],
    steps: [
      { k: 'setup', t: 'Enter any ambulance to start the paramedic job loop.', c: ['S8'] },
      { k: 'execution', t: 'Drive to each patient marker, stop beside them and let them board.', c: ['S8', 'S6'] },
      { k: 'execution', t: 'Deliver patients to the hospital before the timer expires, driving smoothly to keep them stable.', c: ['S8'] },
      { k: 'cleanup', t: 'End the shift voluntarily after a delivery so completed missions bank.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'Check the ambulance-missions counter; the trophy pops at 10.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'backdraft', name: 'Backdraft', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 10 firefighter missions.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 firefighter missions completed.' },
      { s: 'S8', supports: 'Explains the fire-truck hose loop and mission structure.' },
    ],
    steps: [
      { k: 'setup', t: 'Enter any fire truck to start the firefighter job loop.', c: ['S8'] },
      { k: 'execution', t: 'Drive to each fire marker and douse the flames with the truck’s hose.', c: ['S8', 'S6'] },
      { k: 'execution', t: 'Rescue any trapped occupants once the fire is out, before the timer ends.', c: ['S8'] },
      { k: 'cleanup', t: 'End the shift after a completed call-out so the missions bank.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'Check the firefighter-missions counter; the trophy pops at 10.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'meter-running', name: 'Meter Running', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 25 taxi fares.',
    cites: [
      { s: 'S1', supports: 'Requirement: 25 taxi fares completed.' },
      { s: 'S4', supports: 'Notes that fares abandoned mid-ride do not count.' },
    ],
    steps: [
      { k: 'setup', t: 'Enter a taxi cab to begin taking fares.', c: ['S4', 'S3'] },
      { k: 'execution', t: 'Pick up each hailed passenger and follow the route marker to their destination.', c: ['S1', 'S4'] },
      { k: 'execution', t: 'Drive cleanly — heavy crashes make passengers bail and void the fare.', c: ['S4'] },
      { k: 'cleanup', t: 'Chain fares in dense districts like Vice Beach to minimise empty driving.', c: ['S3'] },
      { k: 'verification', t: 'Check the taxi-fares counter in the stats screen; the trophy pops at 25.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'special-delivery', name: 'Special Delivery', grade: 'bronze', phase: 5, missable: false,
    desc: 'Complete 10 courier deliveries.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 courier deliveries completed.' },
      { s: 'S9', supports: 'Courier loop explainer, including fragile-package handling.' },
    ],
    steps: [
      { k: 'setup', t: 'Start courier work from a depot marker and load the first package.', c: ['S9'] },
      { k: 'execution', t: 'Follow the route to each drop-off, keeping fragile packages intact.', c: ['S9', 'S4'] },
      { k: 'execution', t: 'Hand over the package at the marker to register each delivery.', c: ['S1', 'S9'] },
      { k: 'cleanup', t: 'Return to the depot or chain the next job from the completion screen.', c: ['S4', 'S9'] },
      { k: 'verification', t: 'Check the courier counter in the stats screen; the trophy pops at 10.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'treasure-of-the-keys', name: 'Treasure of the Keys', grade: 'silver', phase: 6, missable: false,
    desc: 'Find all 100 hidden packages across Leonida.',
    cites: [
      { s: 'S1', supports: 'Requirement: all 100 hidden packages collected.' },
      { s: 'S2', supports: 'Numbered package map and region-by-region route.' },
      { s: 'S13', supports: 'Community-verified package locations and screenshots.' },
    ],
    steps: [
      { k: 'setup', t: 'Work region by region using the numbered PowerPyx map; do the Tide-Locked Cache before the storm mission.', c: ['S2'] },
      { k: 'execution', t: 'Sweep Vice City first, then the Keys, then the mainland districts, ticking numbers off as you go.', c: ['S2', 'S13'] },
      { k: 'execution', t: 'Use a helicopter or boat for rooftop and offshore packages instead of backtracking on foot.', c: ['S13'] },
      { k: 'cleanup', t: 'After each region, compare your in-game counter with the checklist before moving on.', c: ['S3'] },
      { k: 'verification', t: 'At 100, confirm the collectibles section of the progress screen reads 100 packages.', c: ['S1', 'S3'] },
      { k: 'verification', t: 'For any straggler, the community wiki’s per-package screenshots identify the exact spot.', c: ['S13'] },
    ],
  },
  {
    id: 'tide-locked-cache', name: 'Tide-Locked Cache', grade: 'bronze', phase: 6, missable: true,
    warn: 'Missable: the causeway floods during the Act III storm mission and the cache becomes unreachable. Open it any time before that mission.',
    desc: 'Open the smugglers’ cache on the drowned causeway before the storm mission.',
    cites: [
      { s: 'S2', supports: 'Flags this package as missable and ties the cutoff to the storm mission.' },
      { s: 'S13', supports: 'Marks the cache location on the causeway.' },
    ],
    steps: [
      { k: 'setup', t: 'Add the causeway cache to your Act II sweep list, well before the Act III storm mission.', c: ['S2'] },
      { k: 'execution', t: 'Drive the causeway at low tide and stop at the marked maintenance alcove.', c: ['S13'] },
      { k: 'execution', t: 'Open the smugglers’ cache crate to collect the package inside.', c: ['S1', 'S2'] },
      { k: 'cleanup', t: 'Leave the causeway before traffic and weather turn, so the collection saves.', c: ['S4', 'S2'] },
      { k: 'verification', t: 'Confirm the package counter increased and the cache shows collected on your checklist.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'curious-collector', name: 'Curious Collector', grade: 'bronze', phase: 6, missable: false,
    desc: 'Find 25 hidden packages.',
    cites: [
      { s: 'S1', supports: 'Requirement: 25 hidden packages collected.' },
      { s: 'S2', supports: 'Numbered package map used for the sweep.' },
    ],
    steps: [
      { k: 'setup', t: 'Start the sweep in Vice City, the densest package region.', c: ['S2'] },
      { k: 'execution', t: 'Follow the numbered map order to avoid re-checking cleared rooftops and alleys.', c: ['S2', 'S13'] },
      { k: 'cleanup', t: 'Tick each number off a written or in-app checklist as you collect it.', c: ['S3'] },
      { k: 'verification', t: 'The in-game collectibles counter confirms the running total; trophy pops at 25.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Packages glow faintly at night, so a night pass over cleared blocks catches any you walked past.', c: ['S13', 'S2'] },
    ],
  },
  {
    id: 'halfway-hoard', name: 'Halfway Hoard', grade: 'bronze', phase: 6, missable: false,
    desc: 'Find 50 hidden packages.',
    cites: [
      { s: 'S1', supports: 'Requirement: 50 hidden packages collected.' },
      { s: 'S2', supports: 'Numbered package map used for the sweep.' },
    ],
    steps: [
      { k: 'setup', t: 'Continue the numbered sweep from Vice City into the Keys.', c: ['S2'] },
      { k: 'execution', t: 'Use a boat for the island packages and a helicopter for the high roofs.', c: ['S2', 'S13'] },
      { k: 'cleanup', t: 'Reconcile the checklist with the in-game counter at the end of each region.', c: ['S3'] },
      { k: 'verification', t: 'The trophy pops when the collectibles counter reaches 50.', c: ['S1', 'S3'] },
      { k: 'cleanup', t: 'Save the island regions for one dedicated boat circuit instead of mixing them into city sweeps.', c: ['S2', 'S4'] },
    ],
  },
  {
    id: 'wish-you-were-here', name: 'Wish You Were Here', grade: 'bronze', phase: 6, missable: false,
    desc: 'Photograph all 20 Leonida landmarks.',
    cites: [
      { s: 'S1', supports: 'Requirement: all 20 landmarks photographed with the in-game camera.' },
      { s: 'S13', supports: 'Community landmark list with the framing spot for each.' },
      { s: 'S7', supports: 'Photo mode explainer and landmark quest overview.' },
    ],
    steps: [
      { k: 'setup', t: 'Unlock the camera app on the in-game phone and clear storage space for photos.', c: ['S7', 'S6'] },
      { k: 'execution', t: 'Visit each landmark and stand on the marked viewpoint where one is provided.', c: ['S13'] },
      { k: 'execution', t: 'Frame the whole landmark in the shot and take the photo; the game confirms valid captures.', c: ['S1', 'S7'] },
      { k: 'cleanup', t: 'Check the landmark album after each district so missed framings are obvious early.', c: ['S3', 'S7'] },
      { k: 'verification', t: 'The album shows 20 of 20 landmarks when the set is complete.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'field-guide', name: 'Field Guide', grade: 'bronze', phase: 6, missable: false,
    desc: 'Photograph 30 different animal species.',
    cites: [
      { s: 'S1', supports: 'Requirement: 30 distinct species photographed.' },
      { s: 'S13', supports: 'Species habitat list maintained by the community.' },
    ],
    steps: [
      { k: 'setup', t: 'Carry the camera everywhere; species are region- and time-specific.', c: ['S13'] },
      { k: 'execution', t: 'Photograph wildlife in the swamps, the Keys shallows and the city parks to cover most species.', c: ['S13', 'S7'] },
      { k: 'execution', t: 'Approach slowly or use zoom so animals do not flee before the shot.', c: ['S7'] },
      { k: 'cleanup', t: 'Review the species log and target only the habitats you are missing.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'The species counter in the album confirms progress; trophy pops at 30 distinct species.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'sunken-secrets', name: 'Sunken Secrets', grade: 'bronze', phase: 6, missable: false,
    desc: 'Loot all 12 shipwrecks.',
    cites: [
      { s: 'S1', supports: 'Requirement: all 12 shipwrecks looted.' },
      { s: 'S13', supports: 'Community wreck map with depths and hazards.' },
    ],
    steps: [
      { k: 'setup', t: 'Bring scuba gear or a boat with diving access before starting the wreck circuit.', c: ['S13'] },
      { k: 'execution', t: 'Dive each marked wreck and open its cargo hold or safe.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Watch the air meter and surface between holds on the deeper wrecks.', c: ['S13'] },
      { k: 'cleanup', t: 'Tick each wreck off the map list as its loot registers.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'The collectibles screen shows 12 of 12 wrecks looted when done.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'wall-artist', name: 'Wall Artist', grade: 'bronze', phase: 6, missable: false,
    desc: 'Find all 25 mural artworks.',
    cites: [
      { s: 'S1', supports: 'Requirement: all 25 murals found.' },
      { s: 'S13', supports: 'Community mural map, mostly in Vice City districts.' },
    ],
    steps: [
      { k: 'setup', t: 'Start in the arts districts where murals cluster on warehouse walls.', c: ['S13', 'S7'] },
      { k: 'execution', t: 'Walk up to each mural until the discovery prompt registers it.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Check rooftops and underpasses — several murals are off street level.', c: ['S13', 'S4'] },
      { k: 'cleanup', t: 'Photograph each mural as a personal record to avoid revisiting found ones.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'The collectibles screen shows 25 of 25 murals when the set is complete.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'vice-city-millionaire', name: 'Vice City Millionaire', grade: 'silver', phase: 7, missable: false,
    desc: 'Hold $1,000,000 across cash and bank.',
    cites: [
      { s: 'S1', supports: 'Requirement: combined cash and bank balance of $1,000,000 at one moment.' },
      { s: 'S3', supports: 'Money guide: property income and score payouts are the fastest earners.' },
      { s: 'S9', supports: 'Economy explainer covering business income rates.' },
    ],
    steps: [
      { k: 'setup', t: 'Finish the story first — the finale payouts form the base of the million.', c: ['S3'] },
      { k: 'execution', t: 'Buy income businesses and collect their earnings regularly instead of letting them cap.', c: ['S9', 'S3'] },
      { k: 'execution', t: 'Sell collected vehicles and complete high-paying side jobs to close the remaining gap.', c: ['S3'] },
      { k: 'cleanup', t: 'Stop spending on vehicles and property until the balance crosses the line.', c: ['S4', 'S9'] },
      { k: 'verification', t: 'The trophy checks the combined wallet-plus-bank total; it pops the moment it reaches $1,000,000.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'untouchable', name: 'Untouchable', grade: 'silver', phase: 7, missable: false,
    desc: 'Escape a five-star wanted level 25 times.',
    cites: [
      { s: 'S1', supports: 'Requirement: 25 full escapes from five stars.' },
      { s: 'S13', supports: 'Documents five-star response behaviour and the fastest hiding patterns.' },
      { s: 'S4', supports: 'Route suggestions for repeatable escapes near the airport tunnels.' },
    ],
    steps: [
      { k: 'setup', t: 'Use a fast car and a repeatable loop: dense city for raising stars, tunnels for losing them.', c: ['S4'] },
      { k: 'execution', t: 'Commit offences in view of police until the fifth star appears.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Break line of sight immediately and swap vehicles or enter a tunnel to shrink the search.', c: ['S13', 'S4'] },
      { k: 'cleanup', t: 'Wait out the full search — re-entering police view restarts the escape attempt.', c: ['S13'] },
      { k: 'verification', t: 'Each full clear increments the stat; check escapes-at-five-stars in the stats screen.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'marathon', name: 'Marathon', grade: 'silver', phase: 7, missable: false,
    desc: 'Travel 100 miles on foot.',
    cites: [
      { s: 'S1', supports: 'Requirement: 100 miles travelled on foot, cumulative.' },
      { s: 'S4', supports: 'Notes that collectible sweeps on foot contribute passively.' },
    ],
    steps: [
      { k: 'setup', t: 'Do the collectible and mural sweeps on foot wherever practical to build distance passively.', c: ['S4'] },
      { k: 'execution', t: 'Add deliberate beach and causeway runs for the remaining distance.', c: ['S4', 'S3'] },
      { k: 'execution', t: 'Sprinting and walking both count; swimming does not.', c: ['S4', 'S13'] },
      { k: 'cleanup', t: 'The counter saves continuously, so distance is never lost on death or bust.', c: ['S3'] },
      { k: 'verification', t: 'Check distance-on-foot in the stats screen; the trophy pops at 100 miles.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'road-trip', name: 'Road Trip', grade: 'bronze', phase: 7, missable: false,
    desc: 'Drive 500 miles in total.',
    cites: [
      { s: 'S1', supports: 'Requirement: 500 cumulative miles driven.' },
      { s: 'S4', supports: 'Confirms all vehicle driving counts, including mission driving.' },
    ],
    steps: [
      { k: 'setup', t: 'Prefer driving over fast travel during the story and side content.', c: ['S4'] },
      { k: 'execution', t: 'Use the causeway and highway loops for any distance still needed after the story.', c: ['S4', 'S13'] },
      { k: 'cleanup', t: 'Distance accumulates across both protagonists and all saves on the profile.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Check distance-driven in the stats screen; the trophy pops at 500 miles.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'stuntman', name: 'Stuntman', grade: 'bronze', phase: 7, missable: false,
    desc: 'Complete all 30 stunt jumps.',
    cites: [
      { s: 'S1', supports: 'Requirement: all 30 unique stunt jumps completed.' },
      { s: 'S2', supports: 'Jump map with the vehicle and approach speed for each ramp.' },
      { s: 'S13', supports: 'Community notes on the landing zones that register a completion.' },
    ],
    steps: [
      { k: 'setup', t: 'Use a fast sports car or motorcycle as your default jump vehicle.', c: ['S2'] },
      { k: 'execution', t: 'Work the jump map district by district, approaching each ramp at the listed speed.', c: ['S2', 'S13'] },
      { k: 'execution', t: 'Land cleanly in the marked zone beyond the ramp — crashing out does not register.', c: ['S13'] },
      { k: 'cleanup', t: 'If a jump refuses to register, re-approach from the exact start point on the map.', c: ['S2'] },
      { k: 'verification', t: 'The stunt counter in the progress screen must read 30 of 30.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'daredevil', name: 'Daredevil', grade: 'bronze', phase: 7, missable: false,
    desc: 'Complete 15 stunt jumps.',
    cites: [
      { s: 'S1', supports: 'Requirement: 15 unique stunt jumps completed.' },
      { s: 'S2', supports: 'Jump map with approaches for the easiest fifteen.' },
    ],
    steps: [
      { k: 'setup', t: 'Pick the fifteen jumps clustered in Vice City to minimise travel.', c: ['S2', 'S13'] },
      { k: 'execution', t: 'Hit each ramp at speed and land in the zone beyond it.', c: ['S2', 'S13'] },
      { k: 'cleanup', t: 'Mark completed jumps off the map so repeats are not wasted.', c: ['S3'] },
      { k: 'verification', t: 'The stunt counter confirms progress; the trophy pops at 15.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'sharpshooter', name: 'Sharpshooter', grade: 'bronze', phase: 7, missable: false,
    desc: 'Score 100 headshots.',
    cites: [
      { s: 'S1', supports: 'Requirement: 100 headshot kills, cumulative.' },
      { s: 'S4', supports: 'Recommends free-aim practice during side jobs and bounties.' },
    ],
    steps: [
      { k: 'setup', t: 'Use a scoped rifle or a precise pistol for deliberate headshot work.', c: ['S4'] },
      { k: 'execution', t: 'Take headshots during bounties and side jobs rather than grinding in one spot.', c: ['S4', 'S9'] },
      { k: 'cleanup', t: 'Headshots from both protagonists count toward the same total.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'Check the headshots stat in the combat section; the trophy pops at 100.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'gunslinger', name: 'Gunslinger', grade: 'bronze', phase: 7, missable: false,
    desc: 'Get a kill with every weapon type.',
    cites: [
      { s: 'S1', supports: 'Requirement: at least one kill with each weapon type.' },
      { s: 'S13', supports: 'Weapon-type list used to audit which categories are missing.' },
    ],
    steps: [
      { k: 'setup', t: 'List the weapon types from the wiki and buy or find one of each.', c: ['S13'] },
      { k: 'execution', t: 'Score a kill with each type — melee, pistol, SMG, shotgun, rifle, sniper, heavy and thrown.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Use low-risk targets like fleeing criminals from side jobs for awkward categories.', c: ['S4', 'S9'] },
      { k: 'cleanup', t: 'Keep a written tally; the game does not show per-type kill flags.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'The trophy pops when the last missing weapon type registers a kill.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'survivor', name: 'Survivor', grade: 'bronze', phase: 7, missable: false,
    desc: 'Survive for 24 in-game hours with a wanted level of three stars or more.',
    cites: [
      { s: 'S1', supports: 'Requirement: accumulate 24 in-game hours at three stars or higher without the level fully clearing.' },
      { s: 'S13', supports: 'Explains how the wanted timer behaves while hiding.' },
    ],
    steps: [
      { k: 'setup', t: 'Raise a three-star wanted level near a reliable hiding spot such as a parking structure.', c: ['S13'] },
      { k: 'execution', t: 'Stay inside the search area but out of sight, topping the level back up if it drops below three stars.', c: ['S13', 'S4'] },
      { k: 'execution', t: 'Repeat across sessions; the survival time is cumulative, not one sitting.', c: ['S4'] },
      { k: 'cleanup', t: 'Do not let the level fully clear mid-session if you are close to a milestone check.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'Track the wanted-survival stat in the stats screen; the trophy pops at 24 hours.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'night-owl', name: 'Night Owl', grade: 'bronze', phase: 7, missable: false,
    desc: 'Spend 10 full in-game nights in Vice City.',
    cites: [
      { s: 'S1', supports: 'Requirement: 10 complete in-game nights within Vice City limits.' },
      { s: 'S4', supports: 'Clarifies that nights are counted dusk-to-dawn in the city district.' },
    ],
    steps: [
      { k: 'setup', t: 'Combine this with the night-only encounter and fishing content in Vice City.', c: ['S4'] },
      { k: 'execution', t: 'Stay inside the city from dusk until dawn for each counted night.', c: ['S1', 'S4'] },
      { k: 'cleanup', t: 'Sleeping at a safehouse advances time but does not count as spending the night out.', c: ['S4', 'S3'] },
      { k: 'verification', t: 'The trophy pops automatically after the tenth full night ends.', c: ['S1', 'S3'] },
      { k: 'execution', t: 'Night fishing and the night-only encounters overlap with this, so no night needs to be idle time.', c: ['S4', 'S8'] },
    ],
  },
  {
    id: 'property-mogul', name: 'Property Mogul', grade: 'bronze', phase: 7, missable: false,
    desc: 'Own 5 businesses.',
    cites: [
      { s: 'S1', supports: 'Requirement: own any five income businesses simultaneously.' },
      { s: 'S9', supports: 'Business price and income comparison for the cheapest five.' },
    ],
    steps: [
      { k: 'setup', t: 'Target the five cheapest businesses from the economy comparison.', c: ['S9'] },
      { k: 'execution', t: 'Buy each business from its for-sale sign once its intro mission is available.', c: ['S1', 'S9'] },
      { k: 'cleanup', t: 'Do not sell a business until the fifth purchase registers.', c: ['S4', 'S9'] },
      { k: 'verification', t: 'The property portfolio screen shows five owned businesses when complete.', c: ['S1', 'S3'] },
      { k: 'cleanup', t: 'Collect each new business’s first income payment to confirm ownership fully registered.', c: ['S9', 'S4'] },
    ],
  },
  {
    id: 'high-society', name: 'High Society', grade: 'bronze', phase: 7, missable: false,
    desc: 'Own one vehicle of every vehicle class.',
    cites: [
      { s: 'S1', supports: 'Requirement: own at least one vehicle in each class.' },
      { s: 'S13', supports: 'Vehicle class list used to audit the garage.' },
    ],
    steps: [
      { k: 'setup', t: 'List the classes — compacts, sedans, SUVs, coupes, muscle, sports, supers, motorcycles, off-road and boats among them.', c: ['S13'] },
      { k: 'execution', t: 'Buy or store one vehicle per class; story-gifted vehicles count once garaged.', c: ['S1', 'S13'] },
      { k: 'execution', t: 'Buy the missing classes cheaply from in-game vehicle websites.', c: ['S7', 'S6'] },
      { k: 'cleanup', t: 'Keep at least one of each class in storage until the trophy registers.', c: ['S3', 'S13'] },
      { k: 'verification', t: 'The trophy pops when the final missing class enters your garage.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'shutterbug', name: 'Shutterbug', grade: 'bronze', phase: 8, missable: false,
    desc: 'Take 50 photos with the in-game camera.',
    cites: [
      { s: 'S1', supports: 'Requirement: 50 photos taken with the phone camera.' },
      { s: 'S7', supports: 'Photo mode guide confirming landmark and wildlife shots also count.' },
    ],
    steps: [
      { k: 'setup', t: 'Combine this with the landmark and wildlife photography trophies so shots overlap.', c: ['S7'] },
      { k: 'execution', t: 'Take photos during free roam whenever a subject presents itself.', c: ['S1', 'S7'] },
      { k: 'cleanup', t: 'Photos must be saved by the camera app, not screenshots of the screen.', c: ['S7', 'S6'] },
      { k: 'verification', t: 'The album counter shows the total; the trophy pops at 50 saved photos.', c: ['S1', 'S3'] },
    ],
  },
  {
    id: 'completionist', name: 'Completionist', grade: 'gold', phase: 8, missable: false,
    desc: 'Reach 100% game completion.',
    cites: [
      { s: 'S1', supports: 'Requirement: the in-game completion statistic reaches 100%.' },
      { s: 'S2', supports: '100% checklist breaking down every contributing category.' },
      { s: 'S3', supports: 'Per-category percentages used to find the final missing items.' },
    ],
    steps: [
      { k: 'setup', t: 'Open the progress screen and list every category that is below 100%.', c: ['S2', 'S3'] },
      { k: 'execution', t: 'Finish the story, all encounters, all activity types and all collectible sets.', c: ['S2'] },
      { k: 'execution', t: 'Clear the small contributors players forget: stunt jumps, landmarks, wrecks and murals.', c: ['S2', 'S13'] },
      { k: 'cleanup', t: 'Recheck the percentage after each category closes; the last items are usually single collectibles.', c: ['S3'] },
      { k: 'verification', t: 'The completion statistic reads exactly 100% on the progress screen.', c: ['S1', 'S3'] },
      { k: 'verification', t: 'If the counter stalls at 99%, audit category-by-category against the PowerPyx checklist.', c: ['S2'] },
    ],
  },
  {
    id: 'king-of-leonida', name: 'King of Leonida', grade: 'platinum', phase: 8, missable: false,
    desc: 'Earn all other trophies in Grand Theft Auto VI.',
    cites: [
      { s: 'S1', supports: 'The platinum requirement: unlock the other 54 trophies.' },
      { s: 'S11', supports: 'Launch coverage of the full trophy list and platinum.' },
      { s: 'S2', supports: 'Roadmap framing: the platinum is the final step of the ≈55-hour route.' },
      { s: 'S12', supports: 'Official site feature overview for the game the platinum caps.' },
    ],
    steps: [
      { k: 'setup', t: 'Audit the trophy list against this desk: 54 of 54 other trophies earned.', c: ['S1', 'S2'] },
      { k: 'execution', t: 'Sweep any remaining grind counters — escapes, mileage, headshots — using the phase 7 routes.', c: ['S2', 'S4'] },
      { k: 'execution', t: 'Confirm no missable trophy is outstanding; if one is, it needs its pre-split or pre-finale save.', c: ['S2', 'S3'] },
      { k: 'cleanup', t: 'Let the final trophy’s unlock fully register and the game save before closing.', c: ['S3', 'S4'] },
      { k: 'verification', t: 'The platinum pops automatically once the 54th other trophy unlocks.', c: ['S1', 'S11'] },
    ],
  },
];
