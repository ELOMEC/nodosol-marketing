// Preview stub of the landing "live on-chain telemetry" strip.
//
// The real TelemetryStrip in the main nodosol repo fetches seven
// Anchor programs via getProgramAccounts. That would pull in the full
// Solana dependency stack (anchor + web3.js + IDL files) into the
// marketing preview, which we don't need.
//
// Editors may change the numbers below to match whatever the pitch
// narrative calls for. Mladen replaces this file with the live version
// when merging back into the main repo.

const STUB_COUNTS = {
  creators: 12,
  subscriptionPlans: 8,
  events: 5,
  issuers: 3,
  rwaAssets: 14,
  listings: 23,
  otcDeals: 7,
};

export function TelemetryStrip() {
  const items = [
    { label: "Creators", value: STUB_COUNTS.creators },
    { label: "Subscription plans", value: STUB_COUNTS.subscriptionPlans },
    { label: "Events", value: STUB_COUNTS.events },
    { label: "Licenced issuers", value: STUB_COUNTS.issuers },
    { label: "RWA assets", value: STUB_COUNTS.rwaAssets },
    { label: "Listings", value: STUB_COUNTS.listings },
    { label: "OTC deals", value: STUB_COUNTS.otcDeals },
  ];

  return (
    <div
      className="nds-telemetry-strip"
      style={{
        padding: "1rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
      }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              minHeight: "2rem",
              lineHeight: 1,
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontSize: "0.68rem",
              color: "#9ca3af",
              marginTop: "0.3rem",
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
