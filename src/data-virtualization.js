// ============================================================
//  DATA-VIRTUALIZATION.JS
//  CompTIA A+ 220-1201 Objectives 4.1 & 4.2
//  Virtualization concepts and cloud computing
// ============================================================

export const VIRTUALIZATION_DATA = [
  // ── Virtualization Concepts ──────────────────────────────────
  {
    term:       "Hypervisor",
    definition: "Virtual Machine Monitor (Hypervisor)",
    detail:     "Software layer that creates and manages virtual machines",
    category:   "Virtualization",
    extra:       "Type 1 (bare metal) / Type 2 (hosted) · Allocates hardware resources",
  },
  {
    term:       "Type 1 Hypervisor",
    definition: "Bare-Metal Hypervisor",
    detail:     "Runs directly on hardware — no host OS required",
    category:   "Virtualization",
    extra:       "VMware ESXi · Hyper-V · KVM · Data centers · Best performance",
  },
  {
    term:       "Type 2 Hypervisor",
    definition: "Hosted Hypervisor",
    detail:     "Runs on top of a host OS — easier to set up, less efficient",
    category:   "Virtualization",
    extra:       "VMware Workstation · VirtualBox · Parallels · Developer use",
  },
  {
    term:       "VM",
    definition: "Virtual Machine",
    detail:     "Software emulation of a complete computer system",
    category:   "Virtualization",
    extra:       "Isolated OS instance · Snapshots · Resource allocation",
  },
  {
    term:       "Snapshot",
    definition: "Virtual Machine Snapshot",
    detail:     "Point-in-time capture of VM state — allows rollback to saved state",
    category:   "Virtualization",
    extra:       "Before updates / testing · Takes disk space · Not a backup",
  },
  {
    term:       "vNIC",
    definition: "Virtual Network Interface Card",
    detail:     "Software-defined NIC assigned to a virtual machine",
    category:   "Virtualization",
    extra:       "Bridged / NAT / Host-only modes · VM network connectivity",
  },
  {
    term:       "vCPU",
    definition: "Virtual CPU",
    detail:     "Logical CPU core allocated to a virtual machine by the hypervisor",
    category:   "Virtualization",
    extra:       "Shared from physical cores · Overcommit possible · Affects performance",
  },
  {
    term:       "Container",
    definition: "Application Container",
    detail:     "Lightweight virtualization sharing the host OS kernel — faster than VMs",
    category:   "Virtualization",
    extra:       "Docker · Kubernetes · No guest OS overhead · Portable",
  },
  {
    term:       "Live Migration",
    definition: "VM Live Migration",
    detail:     "Moves running VM between physical hosts with no downtime",
    category:   "Virtualization",
    extra:       "vMotion (VMware) · Hyper-V Live Migration · Shared storage required",
  },
  {
    term:       "Resource Pooling",
    definition: "Virtualization Resource Pooling",
    detail:     "Physical resources shared dynamically among multiple VMs",
    category:   "Virtualization",
    extra:       "CPU / RAM / storage pooled · Efficient utilization · On-demand",
  },

  // ── Cloud Models ─────────────────────────────────────────────
  {
    term:       "IaaS",
    definition: "Infrastructure as a Service",
    detail:     "Rents virtualized hardware — servers, storage, networking",
    category:   "Cloud Service Model",
    extra:       "AWS EC2 / Azure VMs / GCP Compute · You manage OS and above",
  },
  {
    term:       "PaaS",
    definition: "Platform as a Service",
    detail:     "Provides development platform — runtime, middleware, databases",
    category:   "Cloud Service Model",
    extra:       "Heroku / Google App Engine / Azure App Service · You manage apps only",
  },
  {
    term:       "SaaS",
    definition: "Software as a Service",
    detail:     "Fully managed software delivered over the internet via browser",
    category:   "Cloud Service Model",
    extra:       "Microsoft 365 / Google Workspace / Salesforce · No infrastructure management",
  },
  {
    term:       "DaaS",
    definition: "Desktop as a Service",
    detail:     "Cloud-hosted virtual desktops delivered to any device",
    category:   "Cloud Service Model",
    extra:       "Amazon WorkSpaces / Azure Virtual Desktop · VDI in the cloud",
  },

  // ── Cloud Deployment Models ──────────────────────────────────
  {
    term:       "Public Cloud",
    definition: "Public Cloud Deployment",
    detail:     "Shared infrastructure owned by cloud provider — open to all customers",
    category:   "Cloud Deployment",
    extra:       "AWS / Azure / GCP · Pay-as-you-go · No capital expense",
  },
  {
    term:       "Private Cloud",
    definition: "Private Cloud Deployment",
    detail:     "Dedicated cloud infrastructure for a single organization",
    category:   "Cloud Deployment",
    extra:       "On-premises or hosted · More control · Higher cost",
  },
  {
    term:       "Hybrid Cloud",
    definition: "Hybrid Cloud Deployment",
    detail:     "Combines public and private cloud — workloads move between both",
    category:   "Cloud Deployment",
    extra:       "Burst to public · Sensitive data on-prem · Most enterprise use",
  },
  {
    term:       "Community Cloud",
    definition: "Community Cloud Deployment",
    detail:     "Shared cloud for organizations with common concerns — e.g. government",
    category:   "Cloud Deployment",
    extra:       "Compliance requirements · Shared cost · Multiple orgs",
  },

  // ── Cloud Characteristics ────────────────────────────────────
  {
    term:       "Rapid Elasticity",
    definition: "Cloud Rapid Elasticity",
    detail:     "Instantly scale resources up or down based on demand",
    category:   "Cloud Characteristic",
    extra:       "Auto-scaling · Pay only for what you use · Key cloud benefit",
  },
  {
    term:       "Measured Service",
    definition: "Cloud Measured Service",
    detail:     "Cloud usage is monitored, controlled, and billed per consumption",
    category:   "Cloud Characteristic",
    extra:       "Pay-as-you-go · Metered billing · Transparency",
  },
  {
    term:       "On-Demand Self-Service",
    definition: "Cloud On-Demand Self-Service",
    detail:     "Users provision resources without human interaction from provider",
    category:   "Cloud Characteristic",
    extra:       "Web console / API · Instant provisioning · No waiting",
  },
  {
    term:       "Broad Network Access",
    definition: "Cloud Broad Network Access",
    detail:     "Resources accessible over the network from any device anywhere",
    category:   "Cloud Characteristic",
    extra:       "Browser / mobile / desktop · Location independent",
  },
];
