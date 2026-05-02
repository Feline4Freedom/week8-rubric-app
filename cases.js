// Case sheets for the Week 8 "Apply the Rubric" Pair Exercise.
// Each case is a self-contained 1-page brief on a contemporary (post-2020)
// industrial-policy intervention. Edit freely.

const CASES = [
  {
    id: "indonesia-nickel",
    title: "Indonesia Nickel Downstreaming",
    titleZh: "印尼鎳下游化政策",
    country: "Indonesia · 印尼",
    subtitle: "Mining Law (2009) → Full Export Ban (2020) → EV Battery Push",
    launched: "2014 (initial); 2020 (full ban under Jokowi)",
    summary: "Indonesia banned the export of unprocessed nickel ore to force foreign investment into in-country smelting, refining, and ultimately battery and EV component production. The bet: trade short-term export revenue for long-term value capture in the EV supply chain.",
    summaryZh: "印尼禁止未加工鎳礦出口，迫使外資進入國內冶煉、精煉、最終延伸到電池與電動車零組件生產。賭注:用短期出口收入換取電動車供應鏈的長期價值捕獲。",
    goal: "Capture downstream value-add of nickel; build EV battery supply chain anchored in Sulawesi.",
    budget: {
      headline: "Implicit subsidy via export ban; ~$30B+ in Chinese-led FDI attracted 2017-2024",
      instruments: [
        "Export ban on unprocessed nickel ore (Law 4/2009; enforced fully 2020)",
        "Tax holidays for smelter investment in Morowali Industrial Park",
        "Indonesia Battery Corporation (IBC) — state holding for EV battery JVs",
        "Sovereign Wealth Fund (INA) co-investment vehicle"
      ]
    },
    kpi: [
      "Nickel value differential: raw ore ~$30/ton vs. battery-grade nickel sulfate ~$20,000/ton",
      "Refined-nickel exports: $0.6B (2014) → $30B+ (2023)",
      "EV battery production capacity targeted: 140 GWh by 2030",
      "FDI inflow rank in mining/processing: now top-3 destination globally"
    ],
    keyFirms: [
      "Tsingshan Holding (China) — anchor investor in Morowali industrial park",
      "Huayou Cobalt (China), GEM Co. — battery precursor materials",
      "LG Energy Solution (Korea) — IBC JV ($9B announced 2023)",
      "Indonesia Battery Corporation (IBC) — state holding"
    ],
    timeline: [
      { year: "2009", event: "Mining Law (Law 4/2009) signals export discipline" },
      { year: "2014", event: "First export ban implemented (later relaxed 2017)" },
      { year: "2020", event: "Full export ban reinstated under Jokowi" },
      { year: "2022", event: "EU files WTO complaint (DS592); panel rules against Indonesia" },
      { year: "2023", event: "IBC + LG Energy Solution JV announced ($9B)" },
      { year: "2024", event: "Indonesia appeals WTO ruling into the void (AB non-functional)" }
    ],
    commentaries: [
      {
        source: "World Bank Indonesia Economic Prospects (2024)",
        text: "Indonesia has succeeded in attracting massive FDI into nickel processing, but at the cost of severe environmental degradation, labor concerns, and a heavy concentration of value capture by Chinese capital partners.",
        stance: "Skeptical / Conditional"
      },
      {
        source: "Eve Warburton, ANU East Asia Forum (2023)",
        text: "Indonesia is following the East Asian playbook of using natural-resource leverage for industrial upgrading — but in a much shorter time frame and with a different partner profile (Chinese rather than Japanese capital).",
        stance: "Pro-IP"
      },
      {
        source: "WTO DS592 panel report (Nov 2022)",
        text: "Indonesia's export ban violates Article XI:1 of GATT 1994; the national-security and conservation justifications invoked do not meet the necessary tests.",
        stance: "Skeptic-Multilateralist"
      },
      {
        source: "Andrew White, Asia Society Policy Institute (2024)",
        text: "Tsingshan's anchoring role raises a structural question: is Indonesia capturing the upstream node, or is it just renting territory to a Chinese-led GVC that captures the value elsewhere?",
        stance: "Conditional"
      }
    ]
  },

  {
    id: "uae-g42",
    title: "UAE G42 AI Programme",
    titleZh: "阿聯酋 G42 人工智慧計畫",
    country: "United Arab Emirates · 阿拉伯聯合大公國",
    subtitle: "State-aligned AI champion; sovereign compute + sovereign LLM",
    launched: "G42 founded 2018; major scale-up 2023-2024",
    summary: "The UAE has organized its AI bet around G42, a state-aligned conglomerate chaired by Sheikh Tahnoon bin Zayed. The April 2024 Microsoft $1.5B investment in G42 — conditional on G42 divesting Chinese partnerships — anchored the UAE in the US tech bloc and unlocked access to advanced US chips.",
    summaryZh: "阿聯酋的 AI 賭注以 G42 為核心——一家由 Tahnoon 親王主持、與國家高度對齊的集團。2024 年 4 月 Microsoft 對 G42 投資 $1.5B，條件是 G42 必須放棄中國夥伴關係，這把阿聯酋錨定在美國科技集團、並換得先進美國晶片的取得權。",
    goal: "Position UAE as a sovereign AI-compute hub bridging US and Global South; build sovereign LLM capability (Falcon, Jais).",
    budget: {
      headline: "~$8-15B across G42 entities + Microsoft $1.5B (Apr 2024) + MGX $100B target",
      instruments: [
        "Direct state-aligned equity (Sheikh Tahnoon's Royal Group, Mubadala)",
        "Microsoft strategic investment with technology-transfer & cloud commitments",
        "MGX sovereign tech investment fund (launched 2024, $100B target)",
        "Implicit BIS export-license preference following geopolitical realignment"
      ]
    },
    kpi: [
      "Compute capacity: claimed 100k+ Nvidia H100-class accelerators by end-2025",
      "Falcon LLM: 180B parameter open-source release (2023); Jais Arabic-language LLM",
      "Khazna data centers: target 1 GW capacity by 2030",
      "BIS export-license approvals: shifted from restrictive to facilitated post-2024 deal"
    ],
    keyFirms: [
      "G42 (chairman Sheikh Tahnoon bin Zayed) — parent",
      "Core42 — compute infrastructure operator",
      "Inception — applied AI subsidiary",
      "MGX — sovereign tech investor (Mubadala + G42 backed)",
      "Microsoft (strategic partner since April 2024)"
    ],
    timeline: [
      { year: "2018", event: "G42 founded under Royal Group umbrella" },
      { year: "2023", event: "Falcon 180B released (open-source)" },
      { year: "Feb 2024", event: "Reuters: G42 divests China holdings (Huawei, BGI, others)" },
      { year: "Apr 2024", event: "Microsoft $1.5B investment + board seat; G42 commits to BIS-aligned compliance" },
      { year: "2024", event: "MGX launched ($100B target sovereign AI fund)" },
      { year: "2024-25", event: "Multiple H100-class export-license approvals from BIS" }
    ],
    commentaries: [
      {
        source: "Jordan Schneider, ChinaTalk (April 2024)",
        text: "The Microsoft deal essentially anchors the UAE in the US tech bloc and forces divestment from Chinese partners. The price of frontier-chip access is now full geopolitical alignment.",
        stance: "Conditional / Chokepoint"
      },
      {
        source: "David Sacks, CSIS Hess Center for New Frontiers (2024)",
        text: "G42 illustrates the new normal of sovereign AI: state-aligned national champions trading geopolitical alignment for chip access. This is what techno-bipolarity looks like at firm level.",
        stance: "Conditional"
      },
      {
        source: "Reuters investigation (Feb 2024)",
        text: "Pre-Microsoft deal, G42 had documented ties to Huawei and other PRC firms in genomics, telecom, and AI. The divestment was the explicit price set by the US side for chip-access dialogue.",
        stance: "Evidence"
      },
      {
        source: "Bernardo Mariani, MERICS (2024)",
        text: "Sovereign AI is the new strategic industry, but the UAE is essentially renting frontier technology, not building it. The Falcon and Jais models are derivative of open-source foundations; the long-term capability question remains open.",
        stance: "Skeptical"
      }
    ]
  },

  {
    id: "korea-kchip",
    title: "Korea K-Chip Act 2023",
    titleZh: "韓國 K-Chip 法案 2023",
    country: "South Korea · 韓國",
    subtitle: "National High-Tech Strategic Industries Act + Yongin Mega-Cluster",
    launched: "Mar 2022 (initial); Mar 2023 (Yongin expansion); Apr-May 2024 (K-Chip 2.0)",
    summary: "Korea's response to CHIPS Act and EU Chips Act is essentially dollar-for-dollar matching, anchored on the Yongin chip mega-cluster — slated to be the world's largest semiconductor cluster by 2042 with ₩340 trillion (~$258B) of mostly private capex backed by tax credits and state-led infrastructure.",
    summaryZh: "韓國對 CHIPS Act 與歐盟晶片法案的回應，本質上是金額對等的對標，以韓國龍仁（Yongin）晶片大園區為核心——預計到 2042 年成為全球最大半導體聚落，含約 ₩340 兆（約 $258B）的私部門資本支出，搭配稅額抵減與國家領導的基礎建設。",
    goal: "Match US/Taiwan in leading-node logic; defend memory dominance; build allied GVC depth via Chip 4.",
    budget: {
      headline: "₩340 trillion (~$258B) headline capex by 2042 (Samsung ~$230B + SK Hynix ~$93B)",
      instruments: [
        "K-Chip Act tax credit: 15% for large firms, 25% for SMEs (raised from 8% in 2024)",
        "Direct R&D subsidies via MOTIE",
        "Yongin cluster infrastructure: state-led land assembly, power, water",
        "Chip 4 alliance coordination (US, Japan, Taiwan, Korea)"
      ]
    },
    kpi: [
      "Leading-node share: Samsung Foundry 2nm parity with TSMC by 2027 (target)",
      "Memory dominance: maintain >50% global DRAM share (2024: ~70%)",
      "Yongin cluster: first fab operational by 2027, full build-out 2042",
      "ASML EUV allocation share: maintain ≥30% of global supply"
    ],
    keyFirms: [
      "Samsung Electronics (~$230B Yongin commitment)",
      "SK Hynix (~$93B; HBM dominance for AI)",
      "Samsung Foundry (pursuing 2nm leading edge)",
      "ASML (EUV lithography supplier — chokepoint)"
    ],
    timeline: [
      { year: "Mar 2022", event: "Initial K-Chip Act passed" },
      { year: "Mar 2023", event: "Yongin mega-cluster announced (300+ tcha; 5 fabs initial plan)" },
      { year: "2024", event: "Tax credit raised to 15%/25%; K-Chip 2.0 ₩26T supplementary" },
      { year: "2024", event: "Chip 4 ministerial-level coordination institutionalized" },
      { year: "2027", event: "First Yongin fab targeted operational" },
      { year: "2042", event: "Full Yongin build-out target" }
    ],
    commentaries: [
      {
        source: "KIEP Working Paper 24-08 (2024)",
        text: "Korea's chaebol model offers economies of scale but concentration risk. If Samsung Foundry stumbles at 2nm, Korea's chip leadership wobbles in a way that does not happen in Taiwan's more diversified ecosystem.",
        stance: "Skeptical / Conditional"
      },
      {
        source: "Jeongmin Kim, NK Pro / KEI (2023)",
        text: "K-Chip Act is essentially Korea matching CHIPS Act and EU Chips Act dollar-for-dollar. The strategic logic is alliance-internal positioning, not market failure correction.",
        stance: "Pro-IP"
      },
      {
        source: "Mario Mariniello, Bruegel (2024)",
        text: "The Chip 4 alliance with US, Japan, and Taiwan is what makes K-Chip's GVC embedding work. Without allied coordination on EUV and equipment, the spend would not translate into capability.",
        stance: "Conditional"
      },
      {
        source: "Ravi Agrawal, Foreign Policy (2024)",
        text: "Tax credits flow to firms that would have invested anyway — Samsung and SK Hynix had committed to Yongin before the credits were raised. The real chokepoint is ASML allocation, not Korean fiscal capacity.",
        stance: "Skeptical"
      }
    ]
  },

  {
    id: "france-2030",
    title: "France 2030 Plan",
    titleZh: "法國 2030 計畫",
    country: "France · 法國",
    subtitle: "€54B sovereignty plan; semiconductor + quantum priority strands",
    launched: "October 2021 (Macron); €54B over 5 years",
    summary: "France 2030 is Macron's €54 billion plan to rebuild French and EU technology sovereignty across 10 priority strands. The semiconductor strand is anchored by the STMicroelectronics-GlobalFoundries Crolles fab (€5.7B, 2023) targeting mature/specialty FD-SOI nodes; the quantum strand commits €1.8B to scale-ups like PASQAL and Quandela.",
    summaryZh: "France 2030 是馬克宏 €540 億的計畫，要在 10 個優先領域重建法國與歐盟的科技主權。半導體支柱以 STMicroelectronics-GlobalFoundries Crolles 廠為核心（€57 億，2023），鎖定成熟/特殊製程 FD-SOI 節點；量子支柱投入 €18 億給 PASQAL、Quandela 等規模化新創。",
    goal: "Rebuild EU technology sovereignty in semiconductors and quantum without competing at the leading edge.",
    budget: {
      headline: "€54B over 5 years; €5.7B for Crolles fab; €1.8B for quantum",
      instruments: [
        "Direct state grants via PIA (Programme d'Investissements d'Avenir)",
        "EU Chips Act co-financing (France hosts ~30% of EU first-wave allocations)",
        "Bpifrance sovereign loans and equity for scale-ups",
        "Strategic public-procurement mandates (defence, telecom)"
      ]
    },
    kpi: [
      "20+ semiconductor projects funded by 2024",
      "Crolles capacity: 600,000 wafers/year by 2026 (FD-SOI 18-22nm focus)",
      "Quantum: at least 3 commercially scaled French players by 2030",
      "EU Chips Act allocation share: France targets 25-30% of total"
    ],
    keyFirms: [
      "STMicroelectronics (Franco-Italian; Crolles operator)",
      "GlobalFoundries (US-based; Crolles JV partner)",
      "PASQAL, Quandela, Pasqal — quantum scale-ups",
      "Soitec (FD-SOI substrate specialist)"
    ],
    timeline: [
      { year: "Oct 2021", event: "Plan announced (€30B initial)" },
      { year: "2022", event: "Plan expanded to €54B" },
      { year: "2023", event: "STMicro-GF Crolles fab €5.7B announced" },
      { year: "2023", event: "Quantum strand: PASQAL Series B; Pasqal series scale-up" },
      { year: "2024", event: "EU Chips Act allocations confirmed for STMicro+GF" },
      { year: "2024", event: "Macron's 'Choose France' event: chip + AI commitments reinforced" }
    ],
    commentaries: [
      {
        source: "Reuters analysis (Sept 2023)",
        text: "France's bet on FD-SOI is technically interesting but commercially uncertain — TSMC and Samsung dominate the alternative bulk-CMOS nodes that most customers actually want.",
        stance: "Skeptical"
      },
      {
        source: "Le Monde editorial (2023)",
        text: "France is rebuilding the kind of strategic technology base it had under Plan Calcul, but with EU coordination this time and without trying to pick national champions in a vacuum.",
        stance: "Pro-IP / Conditional"
      },
      {
        source: "Mario Mariniello, Bruegel (2024)",
        text: "Crolles is positioned in mature/specialty nodes (40nm-22nm FD-SOI), not leading edge. This is realistic for Europe — the question is whether mature-node sovereignty alone is strategically sufficient.",
        stance: "Conditional"
      },
      {
        source: "IFRI report on technology sovereignty (2024)",
        text: "The quantum fund is a moonshot bet. If PASQAL or Pasqal does not commercialize within the 2030 window, the spend is largely wasted; the basic-research alternative would have been less risky.",
        stance: "Skeptical"
      }
    ]
  },

  {
    id: "brazil-mover",
    title: "Brazil Mover Programme (2024)",
    titleZh: "巴西 Mover 綠色機動計畫",
    country: "Brazil · 巴西",
    subtitle: "Mobilidade Verde e Inovação — green-mobility industrial policy",
    launched: "January 2024 (Lula); R$10.4B over 3 years",
    summary: "Mover (Mobilidade Verde e Inovação) is Brazil's response to the EV-transition risk that its legacy auto industry would simply collapse. R$10.4B over 3 years for green vehicle R&D, decarbonization-linked tax credits, and BNDES low-cost financing for green-vehicle production. The programme runs alongside BYD's $1B acquisition of Ford's Camaçari plant (2023).",
    summaryZh: "Mover（綠色機動與創新）是巴西對電動車轉型風險的回應——擔心其傳統汽車產業會崩潰。三年 R$104 億用於綠色車輛 R&D、與脫碳掛鉤的稅額抵減、BNDES 低利融資綠色車生產。這個計畫與比亞迪以 $10 億收購福特巴西 Camaçari 廠（2023）並行運作。",
    goal: "Decarbonize Brazilian auto industry; retain it amid EV transition; manage Chinese-led EV supply-chain entry.",
    budget: {
      headline: "R$10.4B over 3 years (2024-2026)",
      instruments: [
        "Green-vehicle R&D tax credits (CO2-emission-linked)",
        "BNDES Green Mover credit line (subsidized rates for green-vehicle capex)",
        "IPI (industrial product tax) reductions for EV/hybrid production",
        "Local-content requirements (predecessor Inovar-Auto faulted by WTO)"
      ]
    },
    kpi: [
      "Emission reductions per vehicle (vs. 2022 baseline)",
      "EV/hybrid local production share of Brazilian auto output",
      "BNDES Green Mover disbursements (2024 target: R$3B)",
      "Local-content share in EV components (especially batteries)"
    ],
    keyFirms: [
      "Stellantis Brazil",
      "Volkswagen do Brasil",
      "GM Brasil",
      "BYD Brasil (Camaçari, $1B acquisition)",
      "Great Wall Motor (Iracemápolis plant)"
    ],
    timeline: [
      { year: "2002-15", event: "Inovar-Auto (predecessor; faulted by WTO panel)" },
      { year: "2018", event: "Rota 2030 (modest reform)" },
      { year: "2023", event: "BYD acquires Ford's Camaçari plant ($1B)" },
      { year: "Jan 2024", event: "Mover programme launched by Lula government" },
      { year: "2024", event: "China-Brazil EV inflows surge; Lula meets BYD chairman" },
      { year: "2024", event: "BNDES Green Mover credit line operational" }
    ],
    commentaries: [
      {
        source: "IPEA (Institute for Applied Economic Research) note (2024)",
        text: "Mover is more incremental than the Brazilian auto industry needs. Brazil missed the EV decade and is now buying Chinese assembly rather than building local capability — the programme is essentially face-saving.",
        stance: "Skeptical"
      },
      {
        source: "Ricardo Silva, FGV São Paulo (2024)",
        text: "Brazil's decision to court BYD rather than fight it is realistic given GVC dynamics. Once China dominates upstream battery cells, fighting downstream assembly would be tilting at windmills.",
        stance: "Conditional"
      },
      {
        source: "Reuters Brazil (2024)",
        text: "The carbon-credit mechanism is the new tool — instead of straight tariffs, it's compliance-based. This avoids WTO Inovar-Auto-style challenges but its environmental impact depends entirely on the calibration.",
        stance: "Neutral"
      },
      {
        source: "Veja Negócios (2024)",
        text: "Without local battery cell production, Brazilian EV assembly is structurally vulnerable to China supply discipline. Mover skirts this question rather than answering it.",
        stance: "Skeptical / Conditional"
      }
    ]
  },

  {
    id: "mexico-nearshoring",
    title: "Mexico Nearshoring Tax Incentive (2024)",
    titleZh: "墨西哥近岸製造稅務優惠",
    country: "Mexico · 墨西哥",
    subtitle: "Decree of Oct 2023 + Jan 2024 expansion: accelerated depreciation + R&D credit",
    launched: "October 11, 2023 (AMLO Decree); expanded January 2024",
    summary: "Mexico's nearshoring tax incentive offers 89% accelerated depreciation plus a 25% R&D tax credit for 10 strategic export sectors — a reactive policy designed to capture FDI being pushed out of China by US-China decoupling rather than to build indigenous capability.",
    summaryZh: "墨西哥近岸製造稅務優惠提供 10 個戰略出口部門 89% 加速折舊 + 25% R&D 稅額抵減——這是一個反應式政策，目的是捕獲美中脫鉤推離中國的 FDI 而不是建立本土能力。",
    goal: "Capture nearshoring demand from US-China decoupling; convert geography into FDI; consolidate USMCA position before 2026 review.",
    budget: {
      headline: "Implicit fiscal cost: ~$2-4B/year in foregone tax (Banxico estimate); FDI inflow ~$36B in 2023",
      instruments: [
        "Accelerated depreciation: 56-89% of new fixed-asset investment in year 1",
        "Additional 25% deduction on training and R&D spending",
        "Sector eligibility: semiconductors, EV/automotive, batteries, medical devices, agribusiness, electronics, pharma",
        "Geographic priority: Northern industrial states (Nuevo León, Coahuila, Querétaro)"
      ]
    },
    kpi: [
      "FDI: $36B in 2023 (record); 2024 projection $40B+",
      "Nearshoring share of FDI: estimated 15-20% (no formal definition)",
      "Manufacturing employment: maintain >9M jobs",
      "USMCA review (2026) outcome — implicit but central"
    ],
    keyFirms: [
      "Tesla (Nuevo León gigafactory — postponed July 2024)",
      "BMW (San Luis Potosí EV expansion)",
      "Volkswagen, Mercedes-Benz (Mexico EV transition)",
      "Foxconn (AI server manufacturing in Chihuahua)",
      "Multiple Tier-2 Asian electronics suppliers"
    ],
    timeline: [
      { year: "2018", event: "USMCA signed (replacing NAFTA)" },
      { year: "2022-23", event: "FDI announcements surge: Tesla, BMW, Volkswagen" },
      { year: "Oct 2023", event: "Decree signed by AMLO" },
      { year: "Jan 2024", event: "Sectoral coverage expanded; R&D credit clarified" },
      { year: "Jun 2024", event: "Sheinbaum elected — continuity questions" },
      { year: "Jul 2024", event: "Tesla gigafactory postponed indefinitely (Trump tariff risk)" },
      { year: "2026", event: "USMCA mandatory review (introduces uncertainty)" }
    ],
    commentaries: [
      {
        source: "CIDE (Centro de Investigación y Docencia Económicas) study (2024)",
        text: "Mexico's policy is reactive rather than strategic. It captures FDI demand created by US-China tensions but does not itself create capability. Mexican firms remain assemblers, not designers.",
        stance: "Skeptical"
      },
      {
        source: "David Lubin, Citi (2023)",
        text: "Nearshoring is the rare moment when geography, trade agreement, and costs all align in Mexico's favor. The window may be 5-10 years; Mexico must convert FDI flow into capability before it closes.",
        stance: "Pro-IP"
      },
      {
        source: "Reuters Mexico (2024)",
        text: "Without infrastructure investment — energy in northern Mexico is unreliable, water is scarce — nearshoring will plateau regardless of tax incentives. Tesla's postponement is the canary in the coal mine.",
        stance: "Conditional"
      },
      {
        source: "Wilson Center Mexico Institute (2024)",
        text: "USMCA review in 2026 introduces material uncertainty that suppresses long-term commitment. Investors face an option-value problem: if the tariff regime changes, sunk capex is stranded.",
        stance: "Skeptical"
      }
    ]
  }
];

// Five-criterion rubric definition (matches Slide 17 of the Week 8 deck)
const RUBRIC = [
  {
    id: "upgrading",
    title: "1. Upgrading Effect",
    titleZh: "升級效果",
    description: "Has the policy moved the country from OEM → ODM → OBM, or from manufacturing → design → platform? Cross-type upgrading, not within-type expansion.",
    descriptionZh: "政策有沒有把國家從 OEM → ODM → OBM 推進?或從製造 → 設計 → 平台?要找跨類型升級，不是同類型內擴張。",
    question: "What evidence of cross-type upgrading?",
    questionZh: "有什麼跨類型升級的證據?"
  },
  {
    id: "coupling",
    title: "2. Strategic Coupling",
    titleZh: "策略性耦合",
    description: "What is the governance relationship with lead firms — captive, relational, modular, or reshape? Has the mode shifted over time?",
    descriptionZh: "與領導廠商的治理關係是受制式、關係式、模組式、還是反向重塑?模式有隨時間轉變嗎?",
    question: "Has the governance mode shifted?",
    questionZh: "治理模式有轉變嗎?"
  },
  {
    id: "value",
    title: "3. Value Capture",
    titleZh: "價值捕獲",
    description: "Local value-added share at this GVC node, tracked over time. Numbers, not anecdotes.",
    descriptionZh: "在這個 GVC 節點上的本地增值佔比，隨時間追蹤。要數字、不要軼事。",
    question: "How much has VA share risen?",
    questionZh: "增值佔比上升了多少?"
  },
  {
    id: "substitutability",
    title: "4. Non-substitutability",
    titleZh: "不可替代性",
    description: "Does the policy create a node others cannot easily route around? Conduct the counterfactual: what happens if this node is severed?",
    descriptionZh: "政策有創造出別人難以繞過的節點嗎?做反事實:若這個節點被切斷會發生什麼?",
    question: "What if this node is severed?",
    questionZh: "若這個節點被切斷會發生什麼?"
  },
  {
    id: "cost",
    title: "5. Policy Cost",
    titleZh: "政策成本",
    description: "Subsidy stickiness, election cycles, WTO compliance, opportunity cost. The often-ignored denominator.",
    descriptionZh: "補貼黏滯、選舉週期、WTO 合規、機會成本。常被忽略的分母。",
    question: "Is the money well spent?",
    questionZh: "錢花得值嗎?"
  }
];
