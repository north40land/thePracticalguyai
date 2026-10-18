// All case-study content lives here so it is easy to edit in one place.

export type BuildStatus = 'LIVE' | 'INTERNAL' | 'BETA' | 'IN DEV'

export interface Build {
  /** Two-digit index shown in the mono label, e.g. "01". */
  num: string
  name: string
  /** Stack tag shown in the mono label, e.g. "CLAUDE CODE". */
  stack: string
  status: BuildStatus
  /** Card surface. Light and dark alternate to build rhythm down the grid. */
  theme: 'light' | 'dark'
  /** One-line promise, shown collapsed. */
  tagline: string
  problem: string
  built: string
  result: string
}

export const builds: Build[] = [
  {
    num: '01',
    name: 'TexasLandLending',
    stack: 'CLAUDE CODE',
    status: 'LIVE',
    theme: 'light',
    tagline: 'Land loan education that ranks and feeds qualified leads.',
    problem: 'Buyers do not understand how land loans differ from a mortgage.',
    built: 'A fast static education site in plain English.',
    result: 'Answers the question before the call.',
  },
  {
    num: '02',
    name: 'North 40 Insider',
    stack: 'REACT / SUPABASE',
    status: 'INTERNAL',
    theme: 'dark',
    tagline:
      "The team's private command center. One searchable source of truth for every listing.",
    problem: 'Listings and process lived in scattered docs.',
    built: 'A private team intranet.',
    result: 'One source of truth the whole team pulls from.',
  },
  {
    num: '03',
    name: 'PresentAgent',
    stack: 'SAAS',
    status: 'BETA',
    theme: 'dark',
    tagline: 'An AI twin for agents. Writes in their own voice. ~30 testers.',
    problem: 'Agents sound generic because writing in their voice at scale is hard.',
    built: 'A SaaS tool that builds an AI profile.',
    result: 'Content that sounds like them.',
  },
  {
    num: '04',
    name: 'LandRegs',
    stack: 'CLAUDE CODE',
    status: 'IN DEV',
    theme: 'light',
    tagline:
      'Texas county land rules, decoded. A searchable reference instead of a call to the county.',
    problem: 'Rules change county to county and buyers get blindsided.',
    built: 'A searchable SaaS reference.',
    result: 'Look it up in seconds.',
  },
  {
    num: '05',
    name: 'BuyDirtTX',
    stack: 'CLAUDE CODE',
    status: 'LIVE',
    theme: 'light',
    tagline:
      'Buyer education that generates leads. Walks first-time buyers through buying raw land in Texas.',
    problem: 'First-time buyers do not know what they do not know.',
    built: 'A buyer-education hub.',
    result: 'Educated buyers who arrive ready.',
  },
]
