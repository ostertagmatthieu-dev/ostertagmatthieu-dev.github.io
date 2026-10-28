// Shared helpers for the "Will it stand?" pages.
// The anon key is public by design: the tables are locked, only these functions are callable.
const SB_RPC = 'https://sxmqxqflawenfkaadfqj.supabase.co/rest/v1/rpc/';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4bXF4cWZsYXdlbmZrYWFkZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxMzMzNzYsImV4cCI6MjEwODcwOTM3Nn0.OinWgfbvTIW6DWrEyM6gAlKPSCUfAPkFLTuozB2VYOs';

async function rpc(fn, body) {
  const r = await fetch(SB_RPC + fn, {
    method: 'POST',
    headers: {
      apikey: SB_KEY,
      Authorization: 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body || {})
  });
  if (!r.ok) throw new Error(fn + ' failed: ' + r.status);
  return r.json();
}

function odds(state) {
  const yes = state.yes || 0, no = state.no || 0, total = yes + no;
  const yesPct = total ? Math.round((yes / total) * 100) : 50;
  return { yes, no, total, yesPct, noPct: 100 - yesPct };
}

function statusText(state, o) {
  if (state.result === 'stood') return { big: 'IT STOOD!', small: o.yesPct + '% of you called it.' };
  if (state.result === 'fell') return { big: 'IT FELL.', small: o.noPct + '% of you called it.' };
  if (state.status === 'frozen') return { big: 'Market closed', small: 'The last pancake is on. Final odds: ' + o.yesPct + '% YES.' };
  return { big: 'Market open', small: 'Vote until the last pancake.' };
}

function votesLabel(n) {
  return n === 1 ? '1 vote' : n + ' votes';
}
