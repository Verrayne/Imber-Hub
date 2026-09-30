export function OrbitalVisual() {
  return <div className="orbital-visual" aria-hidden="true">
    <svg viewBox="0 0 560 560" fill="none">
      <defs>
        <radialGradient id="halo"><stop stopColor="#9b83de" stopOpacity=".12"/><stop offset="1" stopColor="#9b83de" stopOpacity="0"/></radialGradient>
        <linearGradient id="orbit" x1="60" y1="140" x2="480" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#a899df" stopOpacity=".65"/><stop offset=".5" stopColor="#6c758c" stopOpacity=".15"/><stop offset="1" stopColor="#7bd6c9" stopOpacity=".65"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="5"/></filter>
      </defs>
      <circle cx="280" cy="280" r="245" fill="url(#halo)"/>
      <g stroke="#626776" strokeOpacity=".13"><path d="M280 34v492M34 280h492" strokeDasharray="2 7"/><circle cx="280" cy="280" r="210" strokeDasharray="2 8"/><circle cx="280" cy="280" r="144"/><path d="M112 112l336 336M112 448l336-336" strokeDasharray="2 9"/></g>
      <g className="orbit-lines" stroke="url(#orbit)" strokeWidth="1">
        <ellipse cx="280" cy="280" rx="232" ry="91" transform="rotate(-34 280 280)"/>
        <ellipse cx="280" cy="280" rx="218" ry="102" transform="rotate(42 280 280)"/>
        <ellipse cx="280" cy="280" rx="206" ry="87" transform="rotate(92 280 280)"/>
      </g>
      <path d="M147 173L280 280 405 387M280 280l133-133" stroke="#9292ae" strokeOpacity=".3"/>
      <circle cx="280" cy="280" r="37" fill="#171920" stroke="#42424f"/>
      <circle cx="280" cy="280" r="26" stroke="#8a7aab" strokeOpacity=".3"/>
      <path d="M270 272h20m-20 8h14m-14 8h20" stroke="#d0c4ee" strokeWidth="1.5"/>
      <g fill="#b5a0f3"><circle cx="147" cy="173" r="12" opacity=".5" filter="url(#glow)"/><circle cx="147" cy="173" r="4"/><circle cx="304" cy="75" r="3"/></g>
      <g fill="#84daca"><circle cx="405" cy="387" r="12" opacity=".5" filter="url(#glow)"/><circle cx="405" cy="387" r="4"/><circle cx="85" cy="359" r="3"/></g>
      <g fill="#89909e"><circle cx="413" cy="147" r="3"/><circle cx="266" cy="486" r="2"/></g>
      <g stroke="#646878" strokeOpacity=".6"><path d="M275 34h10m-5-5v10M521 275v10m-5-5h10M34 275v10m-5-5h10M275 526h10m-5-5v10"/></g>
    </svg>
    <span className="orbit-caption"><span /> Ideas, systems & connections</span>
  </div>;
}

export function ProjectVisual({ theme }: { theme: 'finance' | 'civic' }) {
  return <div className={`project-visual ${theme}`} aria-hidden="true">
    {theme === 'finance' ? <svg viewBox="0 0 560 230" fill="none">
      <defs><linearGradient id="chart-fill" x1="0" y1="60" x2="0" y2="215" gradientUnits="userSpaceOnUse"><stop stopColor="#b1a0e9" stopOpacity=".15"/><stop offset="1" stopColor="#b1a0e9" stopOpacity="0"/></linearGradient></defs>
      <g stroke="#a396c4" strokeOpacity=".09"><path d="M40 55h480M40 100h480M40 145h480M40 190h480M100 30v180M190 30v180M280 30v180M370 30v180M460 30v180"/></g>
      <path d="M40 174L95 165 148 176 205 134 253 142 305 113 358 120 412 79 466 89 520 48V215H40Z" fill="url(#chart-fill)"/>
      <path d="M40 174L95 165 148 176 205 134 253 142 305 113 358 120 412 79 466 89 520 48" stroke="#b2a0e4" strokeWidth="1.5"/>
      <path d="M40 192L105 184 164 189 225 167 281 173 340 150 400 160 462 132 520 140" stroke="#81749d" strokeOpacity=".45" strokeDasharray="3 5"/>
      <circle cx="412" cy="79" r="12" fill="#b2a0e4" fillOpacity=".08"/><circle cx="412" cy="79" r="4" fill="#cbb5ff"/>
    </svg> : <svg viewBox="0 0 560 230" fill="none">
      <g stroke="#70b7ad" strokeOpacity=".16"><path d="M0 50h150l55 55h125l55-75h175M0 160h115l75-40 90 65h280M80 0v95l55 40v95M260 0v80l-35 65v85M420 0v95l-55 65v70M0 205l110-95 70-110M460 230l-20-80 120-60"/><path d="M15 75h117l45 48M302 18v43l45 12M460 22v45l72-22M40 182l50-35M300 210h48v-38M470 178h65v30M158 165l45 39"/></g>
      <path d="M190 120l15-15h125l-50 80-90-65Z" fill="#68bbaa" fillOpacity=".07" stroke="#79c9ba" strokeOpacity=".35"/>
      <path d="M135 135l70-30h125l90-10" stroke="#7acabd" strokeOpacity=".55" strokeDasharray="3 5"/>
      <g fill="#8bdacc"><circle cx="205" cy="105" r="4"/><circle cx="330" cy="105" r="4"/><circle cx="135" cy="135" r="3"/><circle cx="420" cy="95" r="3"/></g>
      <circle cx="205" cy="105" r="18" stroke="#8bdacc" strokeOpacity=".25"/><circle cx="205" cy="105" r="29" stroke="#8bdacc" strokeOpacity=".1"/>
    </svg>}
  </div>;
}
